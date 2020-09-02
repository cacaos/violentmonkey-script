// ==UserScript==
// @name         Gitee
// @namespace    
// @version      0.0.1
// @description  花里胡哨 不想看到
// @author       黑白课
// @supportURL   
// @match        https://gitee.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.URL.startsWith("https://gitee.com/")) {
        log("This page is gitee, run clean.");
        var cleanList = [
            document.getElementsByClassName("ui red label")[0], // 企业版的“特惠” 标识
            document.getElementsByClassName("side-toolbar")[0], // 左边的悬浮按钮
            document.getElementsByClassName("iconfont icon-recommend recommend-icon")[0], // "自荐" 按钮
            document.getElementsByClassName("project-donate-overview")[0], // "捐赠" 按钮
            // document.getElementsByClassName("ui large orange donate button")[0], // "捐赠" 按钮
            document.getElementsByClassName("ui gradient button repo-action")[2], // "挂件" 按钮
            document.getElementsByClassName("ui gradient button repo-action")[0], // "挂件" 按钮(应对未登录的时候)
            document.getElementsByClassName("ui gradient button repo-action left attached")[0], // "+ Pull Request" 按钮
            document.getElementsByClassName("ui gradient button repo-action right attached")[0], // "+ Issue" 按钮
            document.getElementsByClassName("row column inner-comment")[0], // "点评" 条
            document.getElementsByClassName("inner-comment-box")[0], // "点评" 输入框
            document.getElementById("comment-box"), // "点评" 输入框
            document.getElementById("blob-comment"), // "点评" 条
            document.getElementsByClassName("item gitosc-logo")[0], // logo
            document.getElementsByClassName("register-guide")[0], // 未登录时的“加入Gitee”
            document.getElementsByClassName("ui card")[0], // 工作台的企业版推荐
            document.getElementsByClassName("recommend__container")[0], // 推荐关注与推荐仓库
            document.getElementsByClassName("gitee-stars-main-widget pendan-widget")[0], // 贪吃蛇魔改大赛
            // document.getElementsByClassName("")[0],
        ];
        for (var i = 0; i < cleanList.length; i++){
            try {
                if (cleanList[i] instanceof Element){
                    log("Clean ['" + cleanList[i].className + "']");
                    cleanList[i].remove();
                } else if (cleanList[i] instanceof HTMLCollection) {
                    // It's an list
                    if (cleanList[i].length == 1) {
                        log("Clean ['" + cleanList[i][0].className + "']");
                        cleanList[i][0].remove();
                        break;
                    }
                    for (var j = 0; j < cleanList[i].length; j++) {
                        log("Clean ['" + cleanList[i][j].className + "']");
                        cleanList[i][j].remove();
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
})();

function log(msg){
    console.log("Gitee Cleaner: " + msg);
}
