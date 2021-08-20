fetch('info.txt')
  .then(response => response.text())
  .then(data => document.getElementById("mydiv").insertAdjacentHTML("beforeEnd", data.replaceAll("\n", "<br>")));

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function closediv() {
   document.getElementById("mydiv").style.opacity = 0;
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
   },200)
  }else{
   document.getElementById("mydiv").style.transition = ".2s";
   document.getElementById("mydiv").style.opacity = 1;
   
   setTimeout(function(){
   document.getElementById("mydiv").style.transition = "0s";
   },200)
  }
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
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
