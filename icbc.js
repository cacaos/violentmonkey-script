// ==UserScript==
// @name        GoldTendencyPicture - icbc.com.cn
// @namespace   Violentmonkey Scripts
// @match       http://www.icbc.com.cn/ICBCDynamicSite/Charts/GoldTendencyPicture**
// @grant       none
// @version     1.0
// @author      -
// @description 10/6/2020, 4:32:27 PM
// ==/UserScript==


 let nu = 5000,
bu = 5.304,
//bu = 5.204,
     se = 0;
var sendE = 0;

setInterval(function() {
    location.reload();
},
15000);

// document.getElementsByTagName("table")[0].style.width="100%"
let t1 = document.getElementById("TABLE1");
if (!t1) {
    return;
}
let cloneT = t1.cloneNode(true);
let form1 = document.getElementById("form1");
form1.innerHTML = "";
form1.appendChild(cloneT);

let eleForm = document.createElement("form");
eleForm.setAttribute("name", "emForm");
eleForm.setAttribute("id", "emForm");
eleForm.setAttribute("action", "mailto:meteis@qq.com");
//let inpCC = document.createElement("input");
//inpCC.setAttribute("name","cc");
let inpSub = document.createElement("input");
inpSub.setAttribute("name", "subject");
inpSub.setAttribute("value", "ICBCDynamicSite");

let inpBody = document.createElement("input");
inpBody.setAttribute("name", "body");
inpBody.setAttribute("value", "无内鬼,立刻交易");

eleForm.appendChild(inpSub);
eleForm.appendChild(inpBody);
form1.appendChild(eleForm);

for (let i = 0; i < cloneT.rows.length; i++) {
    if (i != 0 && i != 2) {
        cloneT.rows[i].style.display = "none";
    }
}
cloneT.rows[0].children[0].style.display = "none";
cloneT.rows[0].children[(cloneT.rows[0].children.length - 1)].style.display = "none";
let rs = cloneT.rows[2];
rs.style.height = "600px";
let rc = rs.children;
rc[rc.length - 1].style.display = "none";
setTimeout(function(){
for (let i = 0; i < rc.length; i++) {
    let rt = rc[i];
    rt.style.borderRight = "none";
    rt.style.borderLeft = "none";
    rt.style.fontSize = "22px";
    switch (i) {
    case 0:
        rt.style.display = "none";
        break;
    case 2:
        if (nu < 1) {
            return;
        }
        rt.fontweight = "bold";
        rt.style.fontSize = "80px";
        rt.style.lineHeight = "30px";
        if (bu > 0) {
            try {
                let bi = parseFloat(rt.innerText);
                let res = (parseInt(bi * 100000) - bu * 100000) / 100000;
                rt.innerHTML = bi + "<br/><br/><span style='font-size: 40px;line-height:40px;'>" + res + "<br/>" + (res * nu) + "</span>";
                rt.style.color = bi > bu ? "#0f0": "#f00";
                if (res > 0) {
                 let seconds = new Date().getSeconds();
                 if(seconds > 30 && seconds < 50){
       //            document.getElementById("emForm").submit();
                 }  
                console.log();
                } 
            } catch(e) {}

        }
        break;
    case 3:
        if (nu < 1) {
            return;
        }
        rt.fontweight = "bold";
        rt.style.fontSize = "80px";
        rt.style.lineHeight = "30px";
        if (se > 0) {
            try {
                let si = parseFloat(rt.innerText);
                rt.innerHTML = si + "<br/><br/><span style='font-size: 16px;'>" + ((parseInt(si * 100000) - se * 100000) / 100000) + "</span>";
                rt.style.color = si < se ? "#0f0": "#f00";
            } catch(e) {}
        }
        break;
    default:
        break;
    }
}
  
  },300);