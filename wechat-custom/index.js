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


