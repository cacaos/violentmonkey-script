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
  'use strict'

  // 获取 head
  const head = document.head
  // 获取body
  const body = document.body
  // 获取当前页面的语言
  const lang = document.documentElement.lang
  // 获取网页使用的主要语言
  const mainLang = document.characterSet.toLowerCase()

  // 判断是不是中文，如果是则直接return，否则执行
  if (lang.substr(0, 2) === 'zh' || (mainLang.substr(0, 2) === 'gb')) {
    return;
  } else {
    // 创建网页元素方法
    function createElement(html, nodeText, attr, parent) {
      const element = document.createElement(nodeText)
      if (attr) {
        element[attr] = html
      } else {
        element.innerHTML = html
      }
      parent.appendChild(element)
    }

    // 自定义样式，隐藏顶部栏
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
    `)
 

    // 创建容器
    createElement('google_translate_element', 'div', 'id', body)

    // 初始化
    createElement(
      `function googleTranslateElementInit() {
        let google_translate_element = document.getElementById('google_translate_element')
        let timer = setInterval(function () {
          google_translate_element = document.getElementById('google_translate_element')
          if (google_translate_element) {
            clearInterval(timer)
            new google.translate.TranslateElement(
              {
                pageLanguage: 'auto', 
                includedLanguages: 'zh-CN,en',
                layout: 2,
              },
              'google_translate_element'
            )
            // 清除图片的请求，加快访问速度
            let img = [].slice.call(document.querySelectorAll('#goog-gt-tt img,#google_translate_element img'));
            img.forEach(function(v) {
              const a = v
              a.src = ''
              let b = a.outerHTML.replace(/<img(.*?)>/, () => {
                return '<span id="lb"' + RegExp.$1 +'></span>'
              })
              const c = document.createElement('div')
              c.innerHTML = b
              a.parentNode.insertBefore(c.children[0], a.parentNode.children[0])
              a.remove()
            });
          }
        }, 300)
      }`,
      'script',
      '',
      head
    )

    // 导入翻译接口
    if (/quora/i.test(location.href)) {
      // 这里主要是适配quora
      createElement(
        '//translate.google.com/translate_a/element.js?&cb=googleTranslateElementInit',
        'script',
        'src',
        head
      )
    } else {
      createElement(
        '//translate.google.cn/translate_a/element.js?&cb=googleTranslateElementInit',
        'script',
        'src',
        head
      )
      // createElement('//cdn.jsdelivr.net/gh/lindongbin/gt/element.js','script','src', head)
    }

    // 排除一些代码的翻译
    const noTranslateArray = ['.bbCodeCode', 'tt', 'pre[translate="no"]', 'pre']
    noTranslateArray.forEach(selectorName => {
      ;[...document.querySelectorAll(selectorName)].forEach(node => {
        if (node.className.indexOf('notranslate') === -1) {
          node.classList.add('notranslate')
        }
      })
    })
  }
 
})()
