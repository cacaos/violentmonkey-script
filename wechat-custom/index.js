'use strict';


let toolBar = document.getElementById('tool_bar');
let btn = document.createElement('BUTTON');
btn.setAttribute('onclick','panelStyleChange()');
btn.innerText= ' >|< ';
btn.style.background= c141;
btn.style.color='#595959';
btn.style.border = 'none';
toolBar.appendChild(btn);

function panelStyleChange(){ 
    try{ 
        let panel = document.getElementsByClassName('panel')[0];
        panel.style.display = (panel.style.display == 'none') ? 'block' : 'none';
    }catch(err){
    }
}




val CU2S_addElement = function(parentNode, tagName, attributes,beforeEle){
   var parentNode = document.getElementById('tool_bar');
    var tagName = "button";
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
  ,false).innerText = ' >|< ';
