// ==UserScript==
// @name        WeChat Custom
// @namespace   Violentmonkey Scripts
// @match       https://wx.qq.com/
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_registerMenuCommand
// @version     1.0
// @author      Ming
// @description 2/1/2021, 10:14:56 AM
// @icon        https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico 
// ==/UserScript==


// colors 
let c141 = '#141414';
let cfa6 = '#ffffffa6';
let c808 = '#808080';
let cFF6 = '#FF69B4';
let starC = "#FF69B4";


//ico
let link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'http://ris.imageadd.cn/favicon.ico';
//link.href = 'https://www.firefox.com.cn/media/img/favicons/firefox/favicon.4e526382d5a6.ico';
document.getElementsByTagName('head')[0].appendChild(link);

// main-width
let mainDiv = document.getElementsByClassName('main_inner');
if(mainDiv && mainDiv.length > 0){
	mainDiv[0].style.maxWidth="100%";
}

// custom style
let styStr = 
	// main box
'.box{background-color: '+ c141 +';}' 
	+ '.message_empty {display: none;}'
	+ '.web_wechat_screencut {display: none;}'
	+ '.message_system {display: none;}'

	+ '.recommendation .avatar .img {display: none;}'


// fri title
	+ '.box_hd .title_wrap{border-bottom: none;background-color: '+ c141 +';box-shadow: 0 2px 8px 0 #000000a6;}'	
	+ '.box_hd .title .title_name {color: #ffffffa6;font-weight: 100;width: 10px;font-size:10px;}'
//  edit box
	+ '.chat .box_ft {height: 180px;margin-right: 19px;border-top: 1px solid #ffffff1f;border-top-color: #ffffff1f;}'
	+ '.chat .box_ft .content .flex { font-size: 10px; color: '+ c808 +'; }'
	+ '.chat .box_ft .desc {display: none;}'
// main msg
	+ '.bubble.bubble_primary {background-color: '+ c141 +';color: #808080;}'
	+ '.bubble.bubble_primary.right.arrow_primary::before, .bubble.bubble_primary.right::after {border: solid 1px #177ddc;background: #177ddc;border-radius: 100%;}'
	+ '.bubble.bubble_default {background-color: #141414;color: #808080;}'
	+ '.bubble.left::after {border-right-color: #141414;}'
	+ '.message.me {text-align: left;}'
	+ '.bubble.right::after, .bubble.right::before {left: 0;}'
	+ '.btn_send{display: none;}'


//left panel
	+ '.panel{background: '+ c141 +';width: 150px;border-right: 1px solid #303030;}'
// friend list
	+ '.chat_item .info .nickname {font-size: 10px;color: '+ cfa6 +';}'
	+ '.msg.ng-scope {display: none;}'
	+ '.chat_item.active .ext, .chat_item.active .info .msg {color: '+ c141 +';}'
	+ '.chat_item.active {background-color: #111b26;}'
	+ '.recommendation {background: '+ c141 +'; }'
	+ '.recommendation .contact_title {color: '+ cfa6 +'; background-color: '+ c141 +'; }'
	+ '.recommendation .contact_item.on {background: '+ c141 +'; }'
	+ '.recommendation .contact_item {background-color: '+ c141 +'; }'

// drop menu
	+ '.dropdown_menu {background-color: '+ c141 +';border: none;}'
	+ '.dropdown_menu li a {color: '+ cfa6 +';font-size: 10px;border-bottom: solid 1px #303030;text-align: left;}'
	+ '.dropdown_menu li a:hover {background-color: #111b26;}'

// login page
	+ '.ng-scope.ng-isolate-scope.unlogin{background: '+ c141 +';}'
	+ '.login_box { background-color: #141414; -webkit-box-shadow: none;}'
	+ '.login_box .qrcode .sub_title { display: none; }'
	+ '.login_box .qrcode .sub_desc { display: none; }'
	+ '.web_wechat_login_logo { display: none; }'
	+ '.login_box .qrcode .img { width: 90px; height: 90px; }'


// star
	+ '#star {  margin-top: -100px;position: relative; display: block; color: ' + starC + '; width: 0px; height: 0px; border-right: 10px solid transparent; border-bottom: 7px solid ' + starC + '; border-left: 10px solid transparent; -webkit-transform: rotate(35deg);}'
	+ '#star:before { border-bottom: 8px solid ' + starC + '; border-left: 3px solid transparent; border-right: 3px solid transparent; position: absolute; height: 0; width: 0; top: -6px; left: -7px; display: block; content:  ""; -moz-transform: rotate(-35deg); }'
	+ '#star:after { position: absolute; display: block; color: ' + starC + '; top: 0px; left: -10px; width: 0px; height: 0px; border-right: 10px solid transparent; border-bottom: 7px solid ' + starC + '; border-left: 10px solid transparent; -moz-transform: rotate(-70deg); content: ""; }'
	+ '@keyframes star { 0% {left:0px; top:0px;} 95% {left:95vw; top:95vh;} }'
	+ '@keyframes star2 { 0% {left:0px; top:0px;} 95% {left:95vw; top:95vh;} }'
	+ '.star-play{animation: star 5s;}'
	+ '.star-play2{animation: star2 5s;}'
	+ '';

// let sty = document.createElement('style');
// sty.type = 'text/css';
// sty.rel = 'stylesheet'; 
// sty.appendChild(document.createTextNode(styStr));
// (document.getElementsByTagName('head')[0]).appendChild(sty);
GM_addStyle(styStr); 


// show or hide panel 
let scrStr = "function shSli(){ try{ let dis = document.getElementsByClassName('panel')[0].style.display; document.getElementsByClassName('panel')[0].style.display = (dis == 'none') ? 'block' : 'none'; }catch(err){}}";
let scr = document.createElement('script');
scr.appendChild(document.createTextNode(scrStr));
(document.getElementsByTagName('head')[0]).appendChild(scr);

let toolBar = document.getElementById('tool_bar');
let btn = document.createElement('BUTTON');
btn.setAttribute('onclick','shSli()');
btn.innerText= '>|<';
btn.style.background= c141;
btn.style.color='#595959';
btn.style.border = 'none';
toolBar.appendChild(btn);


let bodyEle = document.getElementById('chatArea');
let starDiv = document.createElement('DIV');
starDiv.setAttribute('id','star');  
bodyEle.insertBefore(starDiv,bodyEle.childNodes[0]);



//
// star play
//
let mLeng = 0;
setInterval(() => {  
	let fairy = GM_getValue('fairy');
	if(fairy == ''){
		//return;
	}

	let ut =  document.getElementsByClassName('title_name');
	if(!ut || ut.length != 1){
	//	return;
	}  

	if(fairy != ut[0].innerHTML){
	//	return;
	}

	let nMLeng = document.getElementsByClassName('message ng-scope you').length;
	if(mLeng == nMLeng){
		return;
	}else{
  //  console.log(mLeng,nMLeng);
		mLeng = nMLeng;
		let staE = document.getElementById('star');
		if (staE.classList.contains('star-play2')) { 
			staE.className = 'star-play'; 
		} else { 
			staE.className = 'star-play2'; 
		}
	}
},500);


let staticTitle = decodeURI('%E5%BE%AE%E4%BF%A1%E7%BD%91%E9%A1%B5%E7%89%88');
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

GM_registerMenuCommand('keyRelease', function(){GM_xmlhttpRequest({url: 'http://localhost:59080/key/release'});});