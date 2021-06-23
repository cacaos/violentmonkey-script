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
// @exclude      /localhost/ 
// @icon         https://img.icons8.com/dusk/128/000000/google-logo--v1.png
// ==/UserScript==

;(function () {
	'use strict';

	function createElement(html, nodeText, attr, parent) {
		const element = document.createElement(nodeText);
		if (attr) {
			element[attr] = html;
		} else {
			element.innerHTML = html;
		}
		parent.appendChild(element);
	}
	if (document.documentElement.lang.substr(0, 2) === 'zh') {
		console.log('translate out');
		return false;
	} 

	GM_addStyle(`
	  html,body{
		top: 0!important;
	  }
	  #google_translate_element {
		position: fixed;
		bottom: 30px;
		right: 30px;
		height: 30px; 
		z-index: 10000000;
		overflow: hidden; 
		opacity: 0.13;
	  }
	  #google_translate_element:hover, .recoverPage:hover {
		opacity: 1;
	  }

	  #google_translate_element .goog-te-gadget-simple {
		border-top: 3px solid #e53935 !important;
		border-radius: 3px;
		border-left: 3px solid #fbc02d !important;
		border-bottom: 3px solid #4caf50 !important;
		border-right: 3px solid #1565c0 !important;
	  }
	  #google_translate_element .goog-te-gadget-simple span {
		margin-right: 2px;
	  }
	  #google_translate_element #lb {
		background-image: url("https://img.icons8.com/dusk/128/000000/google-logo--v1.png") !important;
		background-position: 0 !important;
		background-size: 100% 100%;
		display: inline-block;
	  }

	  .goog-te-banner-frame.skiptranslate {
		display: none
	  }
	  @media handheld, only screen and (max-width: 768px) {
		#google_translate_element {
		  width: 104px;
		}
		#google_translate_element .goog-te-combo {
		  margin: 0;
		  padding-top: 2px;
		  border: none;
		}
		#goog-gt-tt {
		  visibility: hidden!important;
		  display: none!important;
		}
		.goog-text-highlight {
		  background-color: inherit!important;
		  box-shadow: 0 0 0 0 transparent!important;
		}
	  }
	`);

	createElement('google_translate_element', 'div', 'id', document.body);
	createElement(
		`
		function googleTranslateElementInit() {
		let google_translate_element = document.getElementById('google_translate_element');
		let timer = setInterval(function () {
		  google_translate_element = document.getElementById('google_translate_element');
		  if (google_translate_element) {
			clearInterval(timer);
			new google.translate.TranslateElement( { pageLanguage: 'auto', includedLanguages: 'zh-CN,en', layout: 2, }, 'google_translate_element');
			let img = [].slice.call(document.querySelectorAll('#goog-gt-tt img,#google_translate_element img'));
			img.forEach(function(v) {
			  const a = v;
			  a.src = '';
			  let b = a.outerHTML.replace(/<img(.*?)>/, () => {
				return '<span id="lb"' + RegExp.$1 +'></span>';
			  });
			  const c = document.createElement('div');
			  c.innerHTML = b;
			  a.parentNode.insertBefore(c.children[0], a.parentNode.children[0]);
			  a.remove();
			});
		  }
		}, 300);
	  }`,
		'script',
		'',
		document.head
	);

	createElement( '//translate.google.cn/translate_a/element.js?&cb=googleTranslateElementInit', 'script', 'src', document.head);

	const noTranslateArray = ['.bbCodeCode', 'tt', 'pre[translate="no"]', 'pre'];
	noTranslateArray.forEach(selectorName => {
		;[...document.querySelectorAll(selectorName)].forEach(node => {
			if (node.className.indexOf('notranslate') === -1) {
				node.classList.add('notranslate');
			}
		});
	});
})();
