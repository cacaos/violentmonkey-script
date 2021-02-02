// ==UserScript==
// @name        WeChat Custom
// @namespace   Violentmonkey Scripts
// @match       https://wx.qq.com/
// @grant       none
// @version     1.0
// @author      Ming
// @description 2/1/2021, 10:14:56 AM
// @icon        https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico 
// ==/UserScript==


//ico
let link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'https://tomcat.apache.org/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);

// main-width
let mainDiv = document.getElementsByClassName('main_inner');
if(mainDiv && mainDiv.length > 0){
	mainDiv[0].style.maxWidth="100%";
}

// custom style
let styStr = 
'.box{background-color: #272825;}' 
	+ '.panel{background: #36383A;}'
	+ '.box_hd .title_wrap{border-bottom: 1px solid #3b3f42;background-color: #3b3f42;margin: 0;}'
	+ '.box_hd .title .title_name {color: #919191;font-weight: 100;width: 10px;font-size:10px;}'
	+ '.btn_send{display: none;}'
	+ '.chat .box_ft {height: 180px;margin-right: 19px;border-top: 1px solid #323232;}'
	+ '.box_hd .title .title_name { color: #919191;font-weight: 100;}'
	+ '.chat_item .info .nickname {font-size: 10px;color: #919191;}'
	+ '.chat .box_ft .content .flex { font-size: 10px; color: #808080; }'
	+ '.bubble.bubble_primary {background-color: #272825;color: #808080;}'
	+ '.message_system {display: none;}'
	+ '.chat .box_ft .desc {display: none;}'
	+ '.dropdown_menu {background-color: #4a4a4a;border: 1px solid #272825;}'
	+ '.chat_item.active .ext, .chat_item.active .info .msg {color: #3a3f45;}'
	+ '.bubble.bubble_default {background-color: #272825;color: #808080;}'
	+ '.message_empty {display: none;}'
	+ '.chat .box_ft{border-top-color: #333;}'
	+ '.box_hd .title_wrap {border-bottom-color: #1d1f21;background-color: #2f3335;}'
	+ '.web_wechat_screencut {display: none;}'
	+ '.chat_item.active {background-color: #303436;}'
	+ '.recommendation .avatar .img {display: none;}'
	+ '.msg.ng-scope {display: none;}'
	+ '';
let sty = document.createElement('style');
sty.type = 'text/css';
sty.rel = 'stylesheet'; 
sty.appendChild(document.createTextNode(styStr));
(document.getElementsByTagName('head')[0]).appendChild(sty);



// show or hide panel 
let scrStr = "function shSli(){ try{ let dis = document.getElementsByClassName('panel')[0].style.display; document.getElementsByClassName('panel')[0].style.display = (dis == 'none') ? 'block' : 'none'; }catch(err){}}";
let scr = document.createElement('script');
scr.appendChild(document.createTextNode(scrStr));
(document.getElementsByTagName('head')[0]).appendChild(scr);

let toolBar = document.getElementById('tool_bar');
let btn = document.createElement('BUTTON');
btn.setAttribute('onclick','shSli()');
btn.innerText= 'S/H'
btn.style.background='#272825';
btn.style.color='#595959';
btn.style.border = 'none';
toolBar.appendChild(btn);
