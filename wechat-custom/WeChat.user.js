
// ==UserScript==
// @name        WeChat Custom
// @namespace   Violentmonkey Scripts
// @match       https://wx.qq.com/
// @version     1.0
// @author      Ming
// @description 2/1/2021, 10:14:56 AM
// @icon        https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico 
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @grant       GM_addValueChangeListener
// @grant       GM_addElement
// ==/UserScript==


// colors 
const staticTitle = decodeURI('%E5%BE%AE%E4%BF%A1%E7%BD%91%E9%A1%B5%E7%89%88');
const CSS_URL_DEFAULT = "https://raw.githubusercontent.com/cacaos/violentmonkey-script/main/wechat-custom/index.css";
const CSS_KEY = "css-url";
const PANEL_SHOW_KEY = "PANEL-SHOW";

let panelVal = GM_getValue(PANEL_SHOW_KEY);
if(typeof(panelVal) != 'number'){
    GM_getValue(PANEL_SHOW_KEY,1);
}


// GM_addElement need 2.3.1
let CUS_addElement = function(parentNode, tagName, attributes,beforeEle){
    let tag = document.createElement(tagName);
    if(attributes){
        Object.assign(tag,attributes);
        Object.keys(attributes).forEach(k => {
            if(k == 'textcontent'){
                return;
            }
            tag.setAttribute(k,attributes[k]);  
        });
    }
    if(beforeEle){
        parentNode.insertBefore(tag,parentNode.childNodes[0]);
    }else{
        parentNode.appendChild(tag);       
    }
    return tag;
}



// favicon.ico 
try{
    Array.from(document.head.getElementsByTagName('link')).forEach(e => {
        let rel = e.getAttribute("rel");
        if(rel == 'shortcut icon'){
            document.head.removeChild(e);
            throw 'forEnd';
        }
    });
}catch(e){
    // ignore
}

CUS_addElement(document.head, 'link', {
    'type': 'image/x-icon',
    'rel': 'shortcut icon',
    'href': 'data:image/x-icon;base64,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'  
});

// custom style 
GM_xmlhttpRequest({
    url: GM_getValue(CSS_KEY,CSS_URL_DEFAULT),
    method: 'GET',
    onreadystatechange: function(response){
        if(response.status == 200 && response.readyState == 4){
            GM_addStyle(response.responseText); 
        }
    }
});



// show or hide panel 
function panelStyleChange(val){
    try{
        let panel = document.getElementsByClassName('panel')[0];
        if(typeof(val) == 'number'){
            console.error(3,(val === 1));
            panel.style.display = (val === 1) ? 'block' : 'none';
            return;
        }  
        panel.style.display = (panel.style.display == 'none') ? 'block' : 'none';
    }catch(err){
        console.error(err);
    }
}

CUS_addElement(document.head, 'script', {
    textContent: panelStyleChange.toString()
});

CUS_addElement(document.getElementById('tool_bar'),'button',{
    style: 'color:#595959;border:none;background: #0000',
    onclick: 'panelStyleChange()'
},true).innerText = ' >|< ';

CUS_addElement(document.getElementById('chatArea'),'div',{
    id: 'star'
},true);

// star play
let mLeng = 0;
setInterval(() => {   
    let fairy = '';
    if(fairy){
        let ut =  document.getElementsByClassName('title_name');
        if(!ut || ut.length != 1){
            return;
        }  
        if(fairy != ut[0].innerHTML){
            return;
        }
    }

    let nMLeng = document.getElementsByClassName('message ng-scope you').length;
    if(mLeng == nMLeng){
        return;
    }else{
        mLeng = nMLeng;
        let staE = document.getElementById('star');
        if (staE.classList.contains('star-play2')) { 
            staE.className = 'star-play'; 
        } else { 
            staE.className = 'star-play2'; 
        }
    }
},500);

setInterval(() => {
    if(document.title != staticTitle){
        GM_xmlhttpRequest({url: 'http://localhost:59080/key/press?caps=0'});
    } 
},3000);

document.addEventListener("visibilitychange", function() { 
    if('visible' == document.visibilityState){
        GM_xmlhttpRequest({url: 'http://localhost:59080/key/release'});
    } 
});

GM_registerMenuCommand('keyRelease', function(){
    GM_xmlhttpRequest({url: 'http://localhost:59080/key/release'});
});


GM_registerMenuCommand('panel show/hide', function(){
     let val = GM_getValue(PANEL_SHOW_KEY);
     GM_setValue(PANEL_SHOW_KEY,val == 1 ? 0 : 1);
});

GM_addValueChangeListener(PANEL_SHOW_KEY, (valName,oldVal,newVal,remote) =>{
     panelStyleChange(newVal);
})

