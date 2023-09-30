/* When the user scrolls down, hide the header. When the user scrolls up, show the header */
/* var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Header").style.top = "0";
    document.getElementById("Navigation").style.top = "0px";
    document.getElementById("Mobile-navigation").style.top = "48px";
  } else {
    document.getElementById("Header").style.top = "-140px";
    document.getElementById("Navigation").style.top = "-140px";
    document.getElementById("Mobile-navigation").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
} */

/* Mobile nav bar */
function MobileNavBar(x) {
    document.getElementById("Overlay").style.display = "block"
}
function MobileNavBarClose(x) {
    document.getElementById("Overlay").style.display = "none"
}


