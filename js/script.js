document.getElementById("logostart_NXJH").addEventListener("click", function() {
  if (document.getElementById("startmenu_MMIA").style.opacity == 1){
   document.getElementById("startmenu_MMIA").style.transition = "1s";
   document.getElementById("startmenu_MMIA").style.zIndex = 0;
   document.getElementById("startmenu_MMIA").style.opacity = 0;
  }else{
   document.getElementById("startmenu_MMIA").style.transition = ".2s";
   document.getElementById("startmenu_MMIA").style.zIndex = 1000;
   document.getElementById("startmenu_MMIA").style.opacity = 1;
  }
});

document.addEventListener('contextmenu', event => event.preventDefault());
