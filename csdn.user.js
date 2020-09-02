// ==UserScript==
// @name          CSDN
// @version      4.0.1
// @description   
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery.cookie/jquery.cookie.js
// @require      https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.js
// @require      https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// @supportURL   https://github.com/adlered/CSDNGreener/issues/new?assignees=adlered&labels=help+wanted&template=ISSUE_TEMPLATE.md&title=
// @contributionURL https://doc.stackoverflow.wiki/web/#/21?page_id=138
// @grant        GM_addStyle
// @icon         https://csdnimg.cn/public/favicon.ico
// ==/UserScript==
var version = "3.3.9";
var currentURL = window.location.href;
var list;
var windowTop = 0;

// 自定义 CSS
// 进度条
$('head').append("<style>#nprogress{pointer-events:none}#nprogress .bar{background:#f44444;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #f44444,0 0 5px #f44444;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#f44444;border-left-color:#f44444;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>");
// 弹出窗口
$('head').append("<style>.black_overlay{top:0%;left:0%;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:0.8;opacity:.10;filter:alpha(opacity=88)}.black_overlay,.white_content{display:none;position:absolute}.white_content{z-index:9999!important;top:25%;left:25%;width:650px;height:60%;padding:20px;border:0px;background-color:#fff;z-index:1002;overflow:auto}</style>");
// 提示条
$('head').append("<style>.tripscon{padding:10px}</style>");
// 按钮（旧）
$('head').append("<style>#toggle-button{display:none}.button-label{position:relative;display:inline-block;width:82px;background-color:#ccc;border:1px solid #ccc;border-radius:30px;cursor:pointer}.circle{position:absolute;top:0;left:0;width:30px;height:30px;border-radius:50%;background-color:#fff}.button-label .text{line-height:30px;font-size:18px;-webkit-user-select:none;user-select:none}.on{color:#fff;display:none;text-indent:10px}.off{color:#fff;display:inline-block;text-indent:53px}.button-label .circle{left:0;transition:all .3s}#toggle-button:checked+label.button-label .circle{left:50px}#toggle-button:checked+label.button-label .on{display:inline-block}#toggle-button:checked+label.button-label .off{display:none}#toggle-button:checked+label.button-label{background-color:#78d690}</style>");
// 保存按钮
$('head').append("<style>#save{background-color:#19a4ed;border:none;color:#fff;padding:5px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:12px;cursor:pointer}</style>");
// Star 样式
$('head').append("<style>.giveMeOneStar:hover{color:#FF69B4;}</style>");

// SVG
var save_svg = '<svg t="1595082650173" class="icon" viewBox="0 0 1075 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2078" width="140" height="140"><path d="M753.763902 685.830244a48.952195 48.952195 0 0 1 49.152-48.702439c81.420488 0 141.162146-65.386146 141.162147-146.057366 0-43.507512-13.037268-82.419512-43.457561-109.243317a142.360976 142.360976 0 0 0-20.280195-14.935415 158.045659 158.045659 0 0 0-11.239025-6.243902l-2.747317-1.298732a155.847805 155.847805 0 0 0-9.191024-3.996097c-1.348683-0.549463-2.697366-0.999024-4.096-1.498537a152.35122 152.35122 0 0 0-8.491707-2.847219c-1.948098-0.599415-3.896195-0.999024-5.844293-1.498537-2.497561-0.599415-4.945171-1.24878-7.492683-1.748293-2.597463-0.499512-5.34478-0.899122-8.042146-1.24878-1.948098-0.249756-3.846244-0.599415-5.844293-0.79922a153.150439 153.150439 0 0 0-14.435903-0.749268c-1.498537 0-2.997073 0.199805-4.545561 0.249756a265.390829 265.390829 0 0 0-5.594536-24.526049c-0.499512-1.998049-1.298732-3.846244-1.898146-5.844292a267.438829 267.438829 0 0 0-5.944196-17.982439c-0.649366-1.798244-1.498537-3.496585-2.197853-5.29483a283.123512 283.123512 0 0 0-7.742439-17.732683L772.745366 269.736585a282.973659 282.973659 0 0 0-9.790439-17.832585C714.302439 171.582439 625.88878 124.878049 524.487805 124.878049c-101.400976 0-189.914537 46.654439-238.517073 126.976-3.496585 5.794341-6.693463 11.788488-9.790439 17.832585l-2.197854 4.096a283.523122 283.523122 0 0 0-7.742439 17.732683l-2.197854 5.244878c-2.247805 5.894244-4.145951 11.988293-5.994146 18.03239-0.549463 1.998049-1.298732 3.846244-1.848195 5.844293a266.739512 266.739512 0 0 0-5.594537 24.476098c-1.498537 0-2.997073-0.199805-4.545561-0.199805-4.89522 0-9.690537 0.299707-14.485853 0.749268-1.998049 0.199805-3.846244 0.499512-5.794342 0.79922-2.697366 0.349659-5.444683 0.699317-8.092097 1.24878-2.497561 0.499512-4.995122 1.148878-7.492683 1.748293-1.898146 0.499512-3.846244 0.899122-5.794342 1.498536a153.649951 153.649951 0 0 0-8.491707 2.797269l-4.096 1.498536a164.289561 164.289561 0 0 0-9.240976 3.996098l-2.697366 1.348683a145.557854 145.557854 0 0 0-31.469268 21.179317C117.884878 408.600976 104.897561 447.562927 104.897561 491.070439c0 80.67122 59.741659 146.057366 141.162146 146.057366a48.952195 48.952195 0 0 1 49.152 48.702439 48.952195 48.952195 0 0 1-49.152 48.702439c-135.717463 0-245.710049-108.993561-245.710048-243.462244 0-109.692878 73.228488-202.402341 173.830243-232.872585A375.832976 375.832976 0 0 1 524.487805 20.330146a375.882927 375.882927 0 0 1 350.307902 237.867708c100.601756 30.470244 173.830244 123.179707 173.830244 232.872585 0 134.468683-109.992585 243.462244-245.710049 243.462244a48.952195 48.952195 0 0 1-49.102048-48.702439z" p-id="2079"></path><path d="M487.973463 386.122927a49.102049 49.102049 0 0 1 72.928781 0.099902l147.356097 162.041756c6.993171 7.742439 11.48878 19.431024 12.537757 30.120586l0.249756 12.937366c0 19.480976-20.48 39.661268-39.211708 39.661268h-104.897561v262.993171a52.44878 52.44878 0 1 1-104.897561 0v-262.993171h-104.897561c-13.886439 0-39.211707-21.72878-39.211707-39.661268v-12.987317c0-12.487805 4.795317-21.27922 12.637659-29.920781l147.356097-162.291512z" p-id="2080"></path></svg>';
var star_svg_1 = '<svg t="1595083631685" class="icon" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" width="140" height="140"><path d="M525.837838 852.410811L199.264865 1001.859459l41.513513-357.016216L0 381.924324l351.481081-69.189189L525.837838 0l174.356757 312.735135L1051.675676 381.924324l-240.778379 262.918919 41.513514 357.016216z" fill="#FFD566" p-id="2174"></path></svg>';
var star_svg_2 = ' <svg t="1595083715312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7848" width="140" height="140"><path d="M1014.001347 866.090236L810.23569 662.324579l145.497643-84.126599c11.377778-6.550842 17.92862-18.962963 16.894276-32.064647-1.034343-13.101684-9.309091-24.479461-21.376431-29.306397l-648.188552-258.585859c-12.756902-5.171717-27.23771-2.068687-36.891582 7.585186-9.653872 9.653872-12.756902 24.13468-7.585185 36.891582l258.585858 648.533333c4.826936 12.06734 16.204714 20.686869 29.306397 21.376431 13.101684 1.034343 25.513805-5.516498 32.064647-16.894276l84.126599-145.497643 203.765657 203.765657c6.550842 6.550842 15.17037 9.998653 24.13468 9.998653 8.96431 0 17.92862-3.447811 24.13468-9.998653l99.29697-99.29697c13.446465-13.446465 13.446465-35.167677 0-48.614141zM150.324579 102.055219c-13.446465-13.446465-35.167677-13.446465-48.26936 0-13.446465 13.446465-13.446465 35.167677 0 48.26936l76.196633 76.196633c6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653c13.446465-13.446465 13.446465-35.167677 0-48.26936L150.324579 102.055219zM176.183165 338.575084c0-18.962963-15.17037-34.133333-34.133333-34.133333H34.133333c-18.962963 0-34.133333 15.17037-34.133333 34.133333s15.17037 34.133333 34.133333 34.133334h107.571718c18.962963 0 34.478114-15.17037 34.478114-34.133334zM162.391919 444.422896l-76.196633 75.851851c-13.446465 13.446465-13.446465 35.167677 0 48.269361 6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653l76.196633-76.196633c13.446465-13.446465 13.446465-35.167677 0-48.269361-13.446465-13.101684-35.167677-13.101684-48.26936 0.344782zM338.575084 176.183165c18.962963 0 34.133333-15.17037 34.133334-34.133333V34.133333c0-18.962963-15.17037-34.133333-34.133334-34.133333s-34.133333 15.17037-34.133333 34.133333v107.571718c0 18.962963 15.17037 34.478114 34.133333 34.478114zM468.557576 220.659933c8.619529 0 17.583838-3.447811 24.13468-9.998654L568.888889 134.464646c13.446465-13.446465 13.446465-35.167677 0-48.26936-13.446465-13.446465-35.167677-13.446465-48.26936 0l-76.196633 76.196633c-13.446465 13.446465-13.446465 35.167677 0 48.26936 6.550842 6.550842 15.515152 9.998653 24.13468 9.998654z" fill="#2c2c2c" p-id="7849"></path></svg>';
var star_svg_3 = ' <svg t="1595083925438" class="icon" viewBox="0 0 1204 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4809" width="140" height="140"><path d="M1088.864348 618.13701a1555.009384 1555.009384 0 0 1-150.273004 167.137308c-52.881642 51.195212-107.931552 101.18583-163.643989 147.261521-33.849069 27.524955-60.229661 48.665566-76.190521 60.229661a162.981462 162.981462 0 0 1-191.891699 0c-15.539253-12.045932-42.160763-32.644476-76.190521-60.831957a2638.480754 2638.480754 0 0 1-164.366745-147.261521 1579.101249 1579.101249 0 0 1-150.273004-165.812257A468.104924 468.104924 0 0 1 0.152998 344.754579 315.543193 315.543193 0 0 1 109.048225 96.367457a399.443111 399.443111 0 0 1 493.883219-20.478084 398.660125 398.660125 0 0 1 493.883219 20.478084A315.482964 315.482964 0 0 1 1204.746215 343.309067a466.840101 466.840101 0 0 1-115.701178 274.647254z" fill="#FE4B83" p-id="4810"></path></svg>';
var star_svg_4 = ' <svg t="1595084089115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8008" width="140" height="140"><path d="M512 46.545455C256 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455z m0 837.818181c-204.8 0-372.363636-167.563636-372.363636-372.363636s167.563636-372.363636 372.363636-372.363636 372.363636 167.563636 372.363636 372.363636-167.563636 372.363636-372.363636 372.363636z" fill="#00C5C5" p-id="8009"></path><path d="M656.290909 586.472727c-79.127273 69.818182-209.454545 69.818182-288.581818 0-18.618182-13.963636-41.890909-13.963636-60.509091 4.654546-13.963636 13.963636-13.963636 41.890909 4.654545 60.509091 55.854545 51.2 125.672727 74.472727 200.145455 74.472727s144.290909-27.927273 200.145455-74.472727c18.618182-13.963636 18.618182-41.890909 4.654545-60.509091s-41.890909-18.618182-60.509091-4.654546zM358.4 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-55.854545-51.2-55.854545c-27.927273 0-51.2 23.272727-51.2 51.2s23.272727 55.854545 51.2 55.854545zM665.6 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-51.2-51.2-51.2-51.2 23.272727-51.2 51.2 23.272727 51.2 51.2 51.2z" fill="#00C5C5" p-id="8010"></path></svg>';
var star_svg = star_svg_1 + star_svg_2 + star_svg_3 + star_svg_4;
var donate_svg = '<svg t="1592982508258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4207" width="32" height="32"><path d="M664.48 234.432a32 32 0 0 0-45.248-0.8l-76.256 73.6-73.344-73.216a32 32 0 1 0-45.248 45.312l72.384 72.256h-49.28a32 32 0 0 0 0 64h63.776v32h-63.776a32 32 0 0 0 0 64h63.776v65.664a32 32 0 1 0 64 0v-65.664h64.288a32 32 0 1 0 0-64h-64.288v-32h64.288a32 32 0 1 0 0-64h-50.368l74.464-71.872a32.032 32.032 0 0 0 0.832-45.28z m275.2 503.552a9017.568 9017.568 0 0 0-141.664-56.736 368.512 368.512 0 0 0 97.568-248.608c0-202.912-165.12-368-368.064-368s-368 165.088-368 368c0 16.224 1.024 32.352 3.072 47.968 2.304 17.504 18.496 29.664 35.904 27.584a32 32 0 0 0 27.584-35.904 304.512 304.512 0 0 1-2.56-39.648c0-167.616 136.384-304 304-304 167.648 0 304.064 136.384 304.064 304a300.544 300.544 0 0 1-96.128 221.472c-0.768 0.736-1.088 1.76-1.824 2.528-42.848-15.936-79.328-28.48-93.76-30.656-24.896-3.904-48.672 7.616-63.104 28.896-12.032 17.792-15.072 38.816-8.096 56.256 4.288 10.656 20.512 32.896 39.776 57.28-46.432-0.064-117.312-6.336-192.832-35.488-31.264-12.064-69.44-52.64-103.136-88.416-47.968-50.976-93.28-99.104-142.56-99.104-18.336 0-35.744 6.848-50.336 19.776-18.24 16.224-35.136 48.32-12 109.248 42.624 112.16 208.544 285.12 341.728 285.12h478.144a32 32 0 0 0 32-32v-160a31.84 31.84 0 0 0-19.776-29.568z m-44.16 157.6h-445.12l-1.024 32v-32c-97.6 0-247.072-152.128-281.92-243.872-10.112-26.656-6.72-37.408-5.344-38.624 4.128-3.648 6.528-3.648 7.84-3.648 21.632 0 64.608 45.632 95.968 78.944 40.224 42.752 81.856 86.944 126.656 104.256 85.216 32.896 164.896 39.808 216.736 39.808 41.376 0 67.584-4.352 68.672-4.544a32 32 0 0 0 19.136-52.16c-27.008-32.096-58.592-71.808-67.296-85.344 0.288-0.576 0.512-1.024 0.352-1.152 22.848 3.488 162.432 57.952 265.28 99.84v106.496z" p-id="4208"></path></svg>';
var set_svg = '<svg t="1592982970375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10112" width="48" height="48"><path d="M256 102.4h512l256 256-512 563.2L0 358.4z" fill="#26CD63" p-id="10113"></path><path d="M256 102.4l256 256H0zM768 102.4l256 256H512zM512 921.6l204.8-563.2H307.2z" fill="#14A345" p-id="10114"></path></svg>';

// jquery.showtips.js
(function(jQuery) {
	jQuery.fn.showTips = function(options,elem){
		var config = {
			skin:"trips",
			content:$(this).attr("tips")||"弹出类型的气泡提示！",  //气泡提示内容里面可以是HTML，默认显示自定义的提示内容
			width:"auto",  //默认为auto，可以写具体尺寸如：200
			alignTo:["right","center"],  //箭头方向
			color:["rgb(247, 206, 57)","#FFFEF4"],  //这里是提示层的风格，第一个参数为提示边框颜色，第二个参数为提示背景颜色
			type:"html",   //显示内容类型
			trigger:"click",    //默认为点击显示，show为初始化就显示，hover为经过显示，focus焦点显示，mouse跟随鼠标显示隐藏
			spacing:10,  //默认为箭头距离对象的尺寸
			customid:"",  //自定义ID
			isclose:false,   //是否显示关闭按钮
			success : null    //成功后的回调函数
		};
		var opts = jQuery.extend(config, options);
		return this.each(function(){
			var that = jQuery(this),tipBox,tipId,selfH,selfW,conId,docW, spa = opts.spacing, skin=opts.skin;
			var Mathrandom = Math.floor(Math.random() * 9999999);
			var pmr = (opts.customid=="") ? Mathrandom :opts.customid.replace(/[#.]/, "");
			var pointer=opts.alignTo.length===1 ? ''+opts.alignTo[0]+'' : ''+opts.alignTo[0]+'-'+opts.alignTo[1]+'';

			if(typeof elem == 'string') {
				if(elem =="show"){
					jQuery('#tip'+pmr).show();  jQuery("#con"+pmr).html(opts.content);
					showPosition(pointer,jQuery('#tip'+pmr));
				};
				if(elem =="hide"){jQuery('#tip'+pmr).hide()};
			};
			if(typeof elem == '' || typeof elem == undefined){return true};
			if(jQuery('#tip'+pmr).length==1){return false;}
			tipBox=jQuery('<div class="'+skin+' '+skin+'-'+pointer+'" id="tip'+pmr+'"><i></i><em></em><div class="'+skin+'con" id="con'+pmr+'"></div></div>').appendTo(document.body);
			tipId = jQuery("#tip"+pmr);
			conId = jQuery("#con"+pmr);

			var edgecolor='border-'+opts.alignTo[0]+'-color', tfi=tipId.find("i"), tfem=tipId.find("em"), tfiem=tipId.find("i,em");
			tipId.css({'position':'absolute',border:'1px solid','border-color':opts.color[0],'background-color':opts.color[1]});
			if(opts.alignTo[1]=='center'){ var offpos=50,percen="%"; }else{ var offpos=5,percen="px"; };
			tfiem.css({width:0,height:0,content:'','position':'absolute'})
			tfi.css({border:'8px solid transparent','z-index':5});
			tfem.css({border:'7px solid transparent','z-index':10});
			switch (pointer) {
				case 'top-center':
				case 'bottom-center':
				case 'top-left':
				case 'bottom-left':
					var poi="left";
					if(pointer=='top-center' || pointer=='bottom-center'){
						tfi.css({"margin-left":"-8px"});
						tfem.css({"margin-left":"-7px"});
					}
					break;
				case 'left-center':
				case 'right-center':
				case 'left-top':
				case 'right-top':
					var poi="top";
					if(pointer=='left-center' || pointer=='right-center'){
						tfi.css({"margin-top":"-8px"});
						tfem.css({"margin-top":"-7px"});
					}
					break;
				default:
					var poi="right";
					break;
			};

			if(pointer=='follow'){
				tfi.css({'border-bottom-color':opts.color[0],left:''+offpos+percen+'',bottom:'100%'});
				tfem.css({'border-bottom-color':opts.color[1],left:''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'',bottom:'100%'});
			}else{
				tfi.css(edgecolor,opts.color[0]).css(poi,''+offpos+percen+'');
				tfem.css(edgecolor,opts.color[1]).css(poi,''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'');
				tfiem.css(opts.alignTo[0],'100%');
			};

			switch (opts.type) {
				case 'html':conId.html(opts.content); break;
				case 'id'  :
					var tempid=jQuery(opts.content) ,wrap = document.createElement("div");
					if(tempid.css("display") == "none"){  tempid.css({display:"block"}); }
					conId.append(tempid);
					break;
			};
			if(opts.isclose){
				jQuery('<span class="'+skin+'close" id="close'+pmr+'">&times;</span>').appendTo(tipId);
				tipId.find("#close"+pmr+"").on("click",function(){tipId.hide();});
			}

			if(typeof opts.width === 'string'){
				docW = parseInt(document.body.clientWidth*(opts.width.replace('%','')/100));
				(typeof opts.width == 'auto' || typeof opts.width == '') ? tipBox.css({width:'auto'}) : tipBox.css({width:docW});
				tipBox.height();
			}else{
				tipBox.width(opts.width).height();
			}
			function showPosition(pointer,cell){
				var selfH = that.outerHeight(true), selfW = that.outerWidth(true);
				var post=that.offset().top, posl=that.offset().left;
				var tipCell=(cell=="" || cell==undefined) ? tipId : cell;
				var tipH=tipCell.outerHeight(true), tipW=tipCell.outerWidth(true);

				switch (pointer) {
					case 'top-left': tipCell.css({top:post-tipH-spa,left:posl}); break;
					case 'top-center': tipCell.css({top:post-tipH-spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'top-right': tipCell.css({top:post-tipH-spa,left:posl-(tipW-selfW)}); break;
					case 'bottom-left': tipCell.css({top:post+selfH+spa,left:posl}); break;
					case 'bottom-center': tipCell.css({top:post+selfH+spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'bottom-right': tipCell.css({top:post+selfH+spa,left:posl-(tipW-selfW)}); break;
					case 'left-top': tipCell.css({top:post,left:posl-tipW-spa}); break;
					case 'left-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl-tipW-spa}); break;
					case 'right-top': tipCell.css({top:post,left:posl+selfW+spa}); break;
					case 'right-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl+selfW+spa}); break;
					case 'follow': that.mousemove(function(e) { tipCell.css({top:e.pageY + 30,left:e.pageX - 6}); }); break;
				};
			}
			tipBox.hide();
			switch (opts.trigger){
				case 'show':showPosition(pointer);tipBox.show();break;
				case 'click':that.click(function(){showPosition(pointer);tipBox.show();});break;
				case 'hover':that.hover(function(){showPosition(pointer);tipBox.show(); tipBox.on("mouseover",function(){jQuery(this).show()}).on("mouseout",function(){jQuery(this).hide()})},function(){tipBox.hide();});break;
				case 'focus':that.focus(function(){showPosition(pointer);tipBox.show();});  that.blur(function(){tipBox.hide();});break;
				case 'mouse':that.hover(function(){showPosition(pointer);tipBox.show();},function(){tipBox.hide();});break;
			};
			setTimeout(function(){opts.success && opts.success();}, 1);
		});
	}
})(jQuery);

(function () {
	'use strict';

	l("CSDNGreener V" + version);
	NProgress.start();

	setTimeout(function() {
		var blockURL = currentURL.split("/").length;
		var main = /(www\.csdn\.net\/)$/;
		var mainNav = /nav/;
		var article = /article/;
		var bbs = /bbs\.csdn\.net/;
		var blog = /blog\.csdn\.net/;
		var blog2 = /\/article\/list\//;
		var download = /download\.csdn\.net/;
		var login = /passport\.csdn\.net/;
		var zone = /me\.csdn\.net/;
		var other = /(www\.csdn\.net\/)/;
		var mp = /mp\.csdn\.net/;

		// 数组初始化
		list = [];
		// 头部分
		put(".csdn-toolbar"); 
    
		put(".more-toolbox"); 
    
		put(".comment-box"); 
    
		put(".recommend-box"); 
    
		put(".insert-baidu-box"); 
    
    
		put(".article-info-box"); 

    put(".csdn-side-toolbar");
    
		// APP
	  put(".app-app");
		// VIP
		put(".vip-caise");
		// 记录你的成长历程（）
		put("#writeGuide");
		// 新通知小圆点（未登录才消掉）
		if ($(".userinfo a").text() === '登录/注册') {
			put("#msg-circle");
		}
		// 顶部谷歌广告
		put(".adsbygoogle");
		// 悬浮在顶栏按钮上出现的二维码
		put(".appControl");
		// 顶部广告
		put(".advert-bg");

		if (main.test(currentURL) || mainNav.test(currentURL)) {
			l("正在优化主页体验...");
			// 常规
			// 头部广告
			put(".banner-ad-box");
			// 嵌入广告
			put("#kp_box_211");
			// 右侧广告
			put(".slide-outer");
			// 右侧详情
			put(".persion_article");
			// 右侧推荐
			$(".feed_company").parent().remove();
			// 广告轮播
			put(".el-carousel__container");
			clean(10);
			common(5, 10);
			loop(1);
		} else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
			l("正在优化个人博客主页体验...");
			// 常规
			// 头部广告
			put(".banner-ad-box");
			// 右侧广告
			put(".slide-outer");
			// 右侧详情
			put(".persion_article");
			// 左侧广告
			put(".mb8");
			put("#kp_box_503");
			put("#kp_box_214");
			clean(10);
			common(5, 10);
			loop(1);
		} else if (article.test(currentURL) && !mp.test(currentURL)) {
			l("正在优化阅读体验...");
			// 常规
			// 右侧广告，放到第一个清除
			// put(".recommend-right");
			put("#addAdBox");
			// put(".aside-box.kind_person.d-flex.flex-column");
			put(".recommend-top-adbox");
			// put(".recommend-list-box.d-flex.flex-column.aside-box");
			// 左侧广告
			// put("#container");
			// 快来写博客吧
			put(".blog_tip_box");
			// 推荐关注用户
			put(".blog-expert-recommend-box");
			// 右下角VIP
			put(".meau-gotop-box");
			// 广告
			put(".mediav_ad");
			put(".pulllog-box");
			put(".recommend-ad-box");
			put(".box-shadow");
			put(".type_hot_word");
			put(".fourth_column");
			// 高分辨率时右侧文章推荐
			// put(".right-item");
			// 广告
			put("#asideFooter");
			put("#ad-div");
			put("#479");
			put("#480");
			// 打赏
			put(".postTime");
			// 课程推荐
			put(".t0");
			// 分享海报
			put(".shareSuggest");
			// 底部主题
			put(".template-box");
			// 评论区广告
			put("div#dmp_ad_58");
			// 打赏
			put(".reward-user-box");
			// 右侧打赏按钮
			put(".to-reward");
			// 推荐内容广告
			put(".recommend-recommend-box");
			// 右侧广告
			put(".indexSuperise");
			// 抢沙发角标
			put(".comment-sofa-flag");
			// 页jio
			put(".bottom-pub-footer");
			// 登录查看未读消息
			put(".toolbar-notice-bubble");
			// 右侧广告
			put(".recommend-top-adbox");
			clean(10);
			setTimeout(function() {
				// 展开评论的所有回复
				$('.btn-read-reply').click();
			}, 1500);
			// 主动加入右侧栏
			if ($(".recommend-right").length === 0) {$("#mainBox").after('<div class="recommend-right  align-items-stretch clearfix" id="rightAside"><aside class="recommend-right_aside"><div id="recommend-right" style="height: 100%; position: fixed; top: 52px; overflow: scroll;"></div></aside></div>');}
			// 绿化设置
			common(6, 1);
			// 屏幕适配
			common(4, 1);
			// 评论
			common(1, 30);
			// 其它
			common(2, 20);
			// 顶部显示作者信息
			common(8, 1);
			// 循环线程开始
			loop(2);
		} else if (bbs.test(currentURL)) {
			l("正在优化论坛体验...");
			// 常规
			// 评论嵌入小广告
			put(".post_recommend");
			// 底部推荐
			put("#post_feed_wrap");
			// 底部相关文章里面的广告
			put(".bbs_feed_ad_box");
			put(".recommend-ad-box");
			// 底部相关文字里面的热词提示
			put(".type_hot_word");
			// 底部蓝色flex属性的广告栏+登录注册框
			put(".pulllog-box");
			// 猜你喜欢
			put(".personalized-recommend-box");
			// 发帖减半提示
			put(".totast-box");
			// 顶部广告
			put(".recommend-right");
			// 顶部广告
			put(".ad_top");
			clean(10);
			// 展开
			common(3, 50);
			common(5, 10);
		} else if (download.test(currentURL)) {
			l("正在优化下载页体验...");
			// 常规
			put(".fixed_dl");
			put("indexSuperise");
			// 右侧推荐
			put(".content_recom");
			clean(10);
			common(5, 10);
		} else if (login.test(currentURL)) {
			l("正在优化登录页体验...");
			// 常规
			// 登录界面大图广告
			put(".main-tu");
			clean(10);
			common(5, 10);
		} else if (zone.test(currentURL)) {
			l("正在优化个人空间体验...");
			// 常规
			clean(10);
			common(7, 10);
			common(5, 10);
		} else {
			l("哦豁，好偏门的页面，我来试着优化一下哦...");
			// 常规
			// 展开全文
			$('.readmore_btn').click();
			// *** index ***
			// 头部广告
			put(".banner-ad-box");
			// 嵌入广告
			put("#kp_box_211");
			// 右侧广告
			put(".slide-outer");
			// 右侧详情
			put(".persion_article");
			// 右侧推荐
			$(".feed_company").parent().remove();
			// *** article ***
			// 常规
			// 右侧广告，放到第一个清除
			put("#addAdBox");
			put(".recommend-top-adbox");
			// 快来写博客吧
			put(".blog_tip_box");
			// 推荐关注用户
			put(".blog-expert-recommend-box");
			// 右下角VIP
			put(".meau-gotop-box");
			// 广告
			put(".mediav_ad");
			put(".pulllog-box");
			put(".recommend-ad-box");
			put(".box-shadow");
			put(".type_hot_word");
			put(".fourth_column");
			// 广告
			put("#asideFooter");
			put("#ad-div");
			put("#479");
			put("#480");
			// 打赏
			put(".postTime");
			// 课程推荐
			put(".t0");
			// 分享海报
			put(".shareSuggest");
			// 底部主题
			put(".template-box");
			// 评论区广告
			put("div#dmp_ad_58");
			// 打赏
			put(".reward-user-box");
			// 右侧打赏按钮
			put(".to-reward");
			// 推荐内容广告
			put(".recommend-recommend-box");
			// 右侧广告
			put(".indexSuperise");
			// 抢沙发角标
			put(".comment-sofa-flag");
			// 页jio
			put(".bottom-pub-footer");
			// 登录查看未读消息
			put(".toolbar-notice-bubble");
			// 右侧广告
			put(".recommend-top-adbox");
			// 学院弹出广告
			$(".fouce_close_btn").click();
			// 其它
			// 头部广告
			put(".banner-ad-box");
			// 右侧广告
			put(".slide-outer");
			// 右侧详情
			put(".persion_article");
			// 左侧广告
			put(".mb8");
			put("#kp_box_503");
			put("#kp_box_214");
			// *** bbs ***
			// 评论嵌入小广告
			put(".post_recommend");
			// 底部推荐
			put("#post_feed_wrap");
			// 底部相关文章里面的广告
			put(".bbs_feed_ad_box");
			put(".recommend-ad-box");
			// 底部相关文字里面的热词提示
			put(".type_hot_word");
			// 底部蓝色flex属性的广告栏+登录注册框
			put(".pulllog-box");
			// 猜你喜欢
			put(".personalized-recommend-box");
			// 发帖减半提示
			put(".totast-box");
			// 顶部广告
			put(".recommend-right");
			// 顶部广告
			put(".ad_top");
			// *** download ***
			put(".fixed_dl");
			put("indexSuperise");
			// 右侧推荐
			put(".content_recom");
			clean(10);
		}
		setTimeout(function() {
			NProgress.done();
		}, 0);
		l("优化完毕!");
	}, 0);
})();

function l(log) {
	console.log("[CSDNGreener] " + log);
}

function e(error) {
	console.error("[CSDNGreener] " + error);
}

function clear() {
	list = [];
}

function put(tag) {
	list.push(tag);
}

function clean(times) {
	var loop = setInterval(function () {
		--times;
		if (times <= 0) {
			clearInterval(loop);
		}
		for (var k = 0; k < list.length; k++) {
			$(list[k]).remove();
		}
	}, 100);
	NProgress.inc();
}

function loop(num) {
	setInterval(function () {
		if (num === 1) {
			// 主页中间的广告
			$(".J_adv").remove();
			// 主页有新的内容横条
			$(".feed-fix-box").remove();
			// 主页广告 iframe
			if (currentURL == "https://www.csdn.net/") {
				$("iframe").remove();
			}
			// 删除 CSDN 官方在主页的文章（大多是广告）
			$("li.clearfix").each(function(index, ele) {
				var banned = /csdn<\/a>/;
				var aMark = $(ele).find(".name").html();
				if (banned.test(aMark)) {
					$(ele).remove();
				}
			});
			// 主页广告
			$("li").each(function(){
				let self = $(this);
				let dataType = self.attr('data-type');
				if (dataType === 'ad') {
					self.remove();
				}
			});
		} else if (num === 2) {
			// 评论查看更多展开监听
			$("div.comment-list-box").css("max-height", "none");
			// 屏蔽您的缩放不是100%的提示
			$('.leftPop').remove();
		}
	}, 500);
}

function common(num, times) {
	var loop = setInterval(function () {
		--times;
		if (times <= 0) {
			clearInterval(loop);
		}
		if (num === 1) {
			// 查看更多
			$(".btn-readmore").removeClass("no-login");
			$(".btn-readmore").addClass("fans-read-more");
			$(".btn-readmore").removeAttr("href");
			$(".btn-readmore").removeAttr("target");
			$(".btn-readmore").removeAttr("rel");
			$(".btn-readmore").click();
			// 已登录用户展开评论
			try {
				document.getElementById("btnMoreComment").click();
			} catch (e) {}
			// 删除查看更多按钮
			$("#btnMoreComment").parent("div.opt-box").remove();
			// 展开内容
			$("div.comment-list-box").css("max-height", "none");
			// 改回背景颜色
			$(".login-mark").remove();
			// 删除登录框
			$(".login-box").remove();
		} else if (num === 2) {
			// 挡住评论的“出头推荐”
			if ($(".recommend-box").length > 1) {
				$(".recommend-box")[0].remove();
			}
			// 去外链
			$("#content_views").off();
			// 去除推广广告
			$("li[data-type='ad']").remove();
			// 免登录复制
			$(".hljs-button").removeClass("signin");
			$(".hljs-button").addClass("{2}");
			$(".hljs-button").attr("data-title", "免登录复制");
			$(".hljs-button").attr("onclick", "hljs.copyCode(event)");
			// 去除剪贴板劫持
			$("code").attr("onclick", "mdcp.copyCode(event)");
			try {
				// 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
				Object.defineProperty(window, "articleType", {
					value: 0,
					writable: false,
					configurable: false
				});
			} catch (err) {
			}
			csdn.copyright.init("", "", "");
			// 页头广告
			try {
				document.getElementsByClassName("column-advert-box")[0].style.display="none";
			} catch (e) {}
			// 自动检测是否有目录，如果没有则删除右边栏，文章居中
			if ($(".recommend-right_aside").html() && $(".recommend-right_aside").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
				$("#rightAside").remove();
			} else if ($(".recommend-right_aside").html() && $("#recommend-right").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
				$("#rightAside").remove();
			}
			// 登录按钮文字太多，修改
			$("a").each(function() {
				if ($(this).attr('href') === 'https://passport.csdn.net/account/login') {
					$(this).html('登入');
				}
			});
			// 顶栏广告
			$("li").each(function(){
				let self = $(this);
				let dataType = self.attr('data-sub-menu-type');
				if (dataType === 'vip') {
					self.remove();
				}
			});
		} else if (num == 3) {
			//论坛自动展开
			$(".js_show_topic").click();
		} else if (num == 4) {
			/** 配置控制 **/
			let config = new Config();
			let smCookie = config.get("scr-sm", false);
			let mdCookie = config.get("scr-md", true);
			let lgCookie = config.get("scr-lg", false);

			$("#scr-sm").prop("checked", smCookie);
			$("#scr-md").prop("checked", mdCookie);
			$("#scr-lg").prop("checked", lgCookie);

			if (smCookie) {
				// Small Screen Mode
				$(".main_father").removeClass("justify-content-center");
				$("csdn-side-toolbar").css("left", "auto")
				GM_addStyle(`
				main{
					width: auto!important;
					float: none!important;
					max-width: 90vw;
				}
				main article img{
					margin: 0 auto;
					max-width: 100%;
					object-fit: cover;
				}
				`);
			} else if (mdCookie) {
				// Middle Screen Mode
				$(".main_father").removeClass("justify-content-center");
				$("csdn-side-toolbar").css("left", "auto")
			} else if (lgCookie) {
				// Large Screen Mode
				// DO NOTHING
			}

			// 屏幕尺寸单选监听
			$("#scr-sm").click(function () {
				new Config().set("scr-sm", true);
				new Config().set("scr-md", false);
				new Config().set("scr-lg", false);
			});
			$("#scr-md").click(function () {
				new Config().set("scr-md", true);
				new Config().set("scr-sm", false);
				new Config().set("scr-lg", false);
			});
			$("#scr-lg").click(function () {
				new Config().set("scr-lg", true);
				new Config().set("scr-sm", false);
				new Config().set("scr-md", false);
			});
		} else if (num == 5) {
			// 改回背景颜色
			$(".login-mark").remove();
			// 删除登录框
			$(".login-box").remove();
		} else if (num == 6) {
		} else if (num === 7) {
			$(".me_r")[1].remove();
		} else if (num === 8) {
			$(".blog_container_aside").remove();
			// 标题消息提醒去除
			let title = document.title.replace(/^\(.*?\)/g, "");
			document.title = title;
			// 评论复制按钮
			$('.comment-box').prepend('<button class="comment-hidden-text" style="display:none">COPY BUTTON</button>');
			$('.new-opt-box.new-opt-box-bg').prepend('<a class="btn btn-report btn-copy" onclick="javascript:$(\'.comment-hidden-text\').attr(\'data-clipboard-text\',$(this).parent().parent().find(\'.new-comment\').text())">复制评论</a><span class="btn-bar"></span>');
			$('.btn-copy').click(function() {
				var clipboard = new ClipboardJS('.comment-hidden-text');
				clipboard.on('success', function(e) {
					console.info('Action:', e.action);
					console.info('Text:', e.text);
					console.info('Trigger:', e.trigger);
					e.clearSelection();
					$('.btn-copy').html('成功');
					setTimeout(function() {
						$('.btn-copy').html('复制评论');
					}, 1000);
				});
				clipboard.on('error', function(e) {
					console.error('Action:', e.action);
					console.error('Trigger:', e.trigger);
					$('.btn-copy').html('失败，请手动复制');
					setTimeout(function() {
						$('.btn-copy').html('复制评论');
					}, 1000);
				});
				$(".comment-hidden-text").click();
				clipboard.destroy();
			});
		}
	}, 100);
	NProgress.inc();
}

// 配置控制类
class Config {
	get(key, value) {
		var cookie = $.cookie(key);
		if (cookie == undefined) {
			new Config().set(key, value);
			console.debug("Renew key: " + key + " : " + value);
			return value;
		}
		console.debug("Read key: " + key + " : " + cookie);
		if (cookie === "true") { return true; }
		if (cookie === "false") { return false; }
		return cookie;
	}

	set(setKey, setValue) {
		$.cookie(setKey, setValue, {
			path: '/',
			expires: 365
		});
		console.debug("Key set: " + setKey + " : " + setValue);
	}

	listenButton(element, listenKey, trueAction, falseAction) {
		$(element).click(function () {
			let status = new Config().get(listenKey, true);
			console.debug("Status: " + status);
			if (status === "true" || status) {
				console.debug("Key set: " + listenKey + " :: " + false);
				new Config().set(listenKey, false);
			} else {
				console.debug("Key set: " + listenKey + " :: " + true);
				new Config().set(listenKey, true);
			}
		});
	}

	listenButtonAndAction(element, listenKey, trueAction, falseAction) {
		$(element).click(function () {
			let status = new Config().get(listenKey, true);
			console.debug("Status: " + status);
			if (status === "true" || status) {
				console.debug("Key set: " + listenKey + " :: " + false);
				new Config().set(listenKey, false);
				falseAction();
			} else {
				console.debug("Key set: " + listenKey + " :: " + true);
				new Config().set(listenKey, true);
				trueAction();
			}
		});
	}
}

function showTips() {
}

function getHeight(element) {
	let outerHeight = element.outerHeight();
	if (outerHeight === null) {
		return 0;
	}
	return outerHeight;
}
