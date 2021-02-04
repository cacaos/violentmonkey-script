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
link.href = 'http://ris.imageadd.cn/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);

// main-width
let mainDiv = document.getElementsByClassName('main_inner');
if(mainDiv && mainDiv.length > 0){
	mainDiv[0].style.maxWidth="100%";
}

let c141 = '#141414';
let cfa6 = '#ffffffa6';
let c808 = '#808080';

// custom style
let styStr = 
// 主面板
'.box{background-color: '+ c141 +';}' 
+ '.message_empty {display: none;}'
+ '.web_wechat_screencut {display: none;}'
+ '.message_system {display: none;}'

	+ '.recommendation .avatar .img {display: none;}'


//联系人title
  + '.box_hd .title_wrap{border-bottom: none;background-color: '+ c141 +';box-shadow: 0 2px 8px 0 #000000a6;}'	
  + '.box_hd .title .title_name {color: #ffffffa6;font-weight: 100;width: 10px;font-size:10px;}'
// 编辑栏
  + '.chat .box_ft {height: 180px;margin-right: 19px;border-top: 1px solid #ffffff1f;border-top-color: #ffffff1f;}'
	+ '.chat .box_ft .content .flex { font-size: 10px; color: '+ c808 +'; }'
	+ '.chat .box_ft .desc {display: none;}'
// 主消息
	+ '.bubble.bubble_primary {background-color: '+ c141 +';color: #808080;}'
  + '.bubble.bubble_primary.right.arrow_primary::before, .bubble.bubble_primary.right::after {border: solid 3px #177ddc;background: #177ddc;border-radius: 100%;}'
	+ '.bubble.bubble_default {background-color: #141414;color: #808080;}'
  + '.bubble.left::after {border-right-color: #141414;}'
  + '.message.me {text-align: left;}'
  + '.bubble.right::after, .bubble.right::before {left: 0;}'
	+ '.btn_send{display: none;}'


//左侧面板
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

// 右键菜单
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
btn.innerText= '>|<';
btn.style.background= c141;
btn.style.color='#595959';
btn.style.border = 'none';
toolBar.appendChild(btn);


// http://localhost:8099/key/press
// http://localhost:8099/key/release

var isPress = 0;
setInterval(() => {
  let title = document.title;
  if(title != '微信网页版'){
      let x = new XMLHttpRequest();
			x.open("GET",'http://localhost:8099/key/press', true);
			x.send();
      isPress = 1;
  }else{
    if(isPress == 1){
        console.log('isPress',isPress);
    }
  }
  console.log('title',title == '微信网页版');
},3000);
 
document.addEventListener("visibilitychange", function() { 
  let visState = document.visibilityState;
  if('visible' == visState){
      var x = new XMLHttpRequest();
			x.open("GET",'http://localhost:8099/key/release', true);
			x.onload=function(e) {
      	console.error('key release');
      }
			x.onerror = e => {
				console.error('请求错误',e);
			};
			x.ontimeout = e => {
				console.error('请求超时',e); 
			};
			x.send();
  } 
});

try{
  setTimeout(()=>{
      return;
      let rq = document.getElementsByClassName('qrcode')[0];
      let img = rq.getElementsByTagName('IMG')[0];
      console.log(1111,img);
      let rqSrc = img.getAttribute('src'); 
      if(rqSrc){
        var x = new XMLHttpRequest();
        x.open("GET",'http://localhost:8099/key/sendRq?email='+'sonamu@foxmail.com'+'&text=' + rqSrc, true);
        x.onload=function(e) {
          console.error('key release');
        }
        x.onerror = e => {
          console.error('请求错误',e);
        };
        x.ontimeout = e => {
          console.error('请求超时',e); 
        };
        x.send();
      }
  },3000);
}catch(err){}