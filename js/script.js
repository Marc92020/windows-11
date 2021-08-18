document.body.addEventListener("click", function(targ) {
  if (targ.target.id != 'logostart_NXJH') {
        document.getElementById("startmenu_MMIA").style.opacity = 0;
  }else{
        document.getElementById("startmenu_MMIA").style.opacity = 1;
  }
});
