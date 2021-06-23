// ==UserScript==
// @name         google_translate
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_registerMenuCommand
// @version     1.0
// @author      Ming
// @description 6/23/2021, 10:09:13 AM
// @exclude     *://**.js
// @exclude     *://**.css
// @exclude     *://**.json
// @exclude     *://**.png
// @exclude     *://**.jpg
// @exclude     *://**.ico
// @exclude      *://*baidu.com/*
// @icon         cdn.jsdelivr.net/gh/ojer/violentmonkey-script@main/google-translate/www.google.com/images/google-logo--v1.png
// @noframes

// ==/UserScript==

;(function () {
	'use strict';
	const lang = document.documentElement.lang;
  const title = document.title;
	if ((lang && lang.substr(0, 2) === 'zh') || title.search(/[\u4e00-\u9fa5]/) != -1) {
		console.log('lang is zh, google translate be out');
		return;
	} else {
		function createElement(html, nodeText, attr, parent) {
			const element = document.createElement(nodeText);
			if (attr) {
				element[attr] = html;
			} else {
				element.innerHTML = html;
			}
			parent.appendChild(element);
		}

		GM_addStyle(
		`
      html,body{top: 0!important;}
			#google_translate_element { position: fixed; bottom: 30px; right: 30px; height: 30px; z-index: 10000000; overflow: hidden; opacity: 0.13; }
			#google_translate_element:hover { opacity: 1; }
			#google_translate_element #lb { background-image: url("https://cdn.jsdelivr.net/gh/ojer/violentmonkey-script@main/google-translate/www.google.com/images/google-logo--v1.png") !important; background-position: 0 !important; background-size: 100% 100%; display: inline-block; }
        `
		);

		createElement('google_translate_element', 'div', 'id', document.body);
		createElement(
			`
			function googleTranslateElementInit() {
		        let google_translate_element = document.getElementById('google_translate_element');
		        let timer = setInterval(function () {
		            google_translate_element = document.getElementById('google_translate_element');
		            if (google_translate_element) {
			            clearInterval(timer); new google.translate.TranslateElement( { pageLanguage: 'auto', includedLanguages: 'zh-CN,en', layout: 2, }, 'google_translate_element');
		            }
		        }, 300); 
		    }
			`, 'script', '', document.head);
		createElement( 'https://cdn.jsdelivr.net/gh/ojer/violentmonkey-script@main/google-translate/translate.google.cn/translate_a/element.js', 'script', 'src', document.head);
		const noTranslateArray = ['.bbCodeCode', 'tt', 'pre[translate="no"]', 'pre'];
		noTranslateArray.forEach(selectorName => {
			;[...document.querySelectorAll(selectorName)].forEach(node => {
				if (node.className.indexOf('notranslate') === -1) {
					node.classList.add('notranslate');
				}
			})
		});
	}
})();

