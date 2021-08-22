let highz;
highz = 999;

fetch('info.txt')
  .then(response => response.text())
  .then(data => document.getElementById("mydiv").insertAdjacentHTML("beforeEnd", `<div class="content">` + data.replaceAll("\n", "<br>")));

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));

function closediv() {
   document.getElementById("mydiv").style.transition = ".2s";
   document.getElementById("mydiv").style.opacity = 0;
setTimeout(function(){
   document.getElementById("mydiv").style.transition = "null";
}, 200)
}
function closediv2() {
   document.getElementById("mydiv2").style.transition = ".2s";
   document.getElementById("mydiv2").style.opacity = 0;
setTimeout(function(){
   document.getElementById("mydiv2").style.transition = "null";
}, 200)
}
function closediv3() {
   document.getElementById("mydiv2").style.transition = ".2s";
   document.getElementById("mydiv2").style.opacity = 0;
setTimeout(function(){
   document.getElementById("mydiv2").style.transition = "null";
}, 200)
}

document.getElementById("logoabout_JJ8H").addEventListener("click", function() {
  if (document.getElementById("mydiv").style.opacity == 1){
   document.getElementById("mydiv").style.transition = ".2s";
   document.getElementById("mydiv").style.opacity = ".7";
   
   setTimeout(function(){
   document.getElementById("mydiv").style.opacity = 1;
   },100)
   setTimeout(function(){
   document.getElementById("mydiv").style.transition = "0s";
   document.getElementById("mydiv").style.zIndex = 999;
   },200)
  }else{
   document.getElementById("mydiv").style.transition = ".2s";
   document.getElementById("mydiv").style.opacity = 1;
   
   setTimeout(function(){
   document.getElementById("mydiv").style.transition = "0s";
   document.getElementById("mydiv").style.zIndex = 9999;
   },200)
  }
});

function store9() {
  if (document.getElementById("mydiv2").style.opacity == 1){
   document.getElementById("mydiv2").style.transition = ".2s";
   document.getElementById("mydiv2").style.opacity = ".7";
   
   setTimeout(function(){
   document.getElementById("mydiv2").style.opacity = 1;
   },100)
   setTimeout(function(){
   document.getElementById("mydiv2").style.transition = "0s";
   document.getElementById("mydiv").style.zIndex = 999;
   },200)
  }else{
   document.getElementById("mydiv2").style.transition = ".2s";
   document.getElementById("mydiv2").style.opacity = 1;
   
   setTimeout(function(){
   document.getElementById("mydiv2").style.transition = "0s";
   document.getElementById("mydiv").style.zIndex = 9999;
   },200)
  }
}

function dragElement(elmnt) {
  console.log(elmnt)
  
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    elmnt.style.zLayer = elmnt.style.zLayer + 50;
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
