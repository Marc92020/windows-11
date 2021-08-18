document.body.addEventListener("click", function(targ) {
  if (targ.target.id != 'logostart_NXJH') {
        document.getElementById("startmenu_MMIA").style.opacity = 0;
  }
});

document.getElementById("logostart_NXJH").addEventListener("click", function() {
   document.getElementById("startmenu_MMIA").style.opacity = 1;
});
