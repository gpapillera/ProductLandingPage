// <!-- JAVASCRIPT - AUTO HIDE NAVBAR -->
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

function showPro() {
  document.getElementById("i-pro").style.display = "block";
  document.getElementById("i-pro-max").style.display = "none";
  showDivs();
  document.getElementById("pro").style.borderColor = "#2584DE";
  document.getElementById("pro-max").style.borderColor = "#ccc";
}

function showMax() {
  document.getElementById("i-pro-max").style.display = "block";
  document.getElementById("i-pro").style.display = "none";
  displayDivs();
  document.getElementById("pro-max").style.borderColor = "#2584DE";
  document.getElementById("pro").style.borderColor = "#ccc";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myPro");
  var dots = document.getElementsByClassName("myB");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

var imageIndex = 1;
displayDivs(imageIndex);

function addDivs(m) {
  displayDivs((imageIndex += m));
}

function currentDisplay(m) {
  displayDivs((imageIndex = m));
}

function displayDivs(m) {
  var l;
  var z = document.getElementsByClassName("myMax");
  var dote = document.getElementsByClassName("myC");
  if (m > z.length) {
    imageIndex = 1;
  }
  if (m < 1) {
    imageIndex = z.length;
  }
  for (l = 0; l < z.length; l++) {
    z[l].style.display = "none";
  }
  for (l = 0; l < dote.length; l++) {
    dote[l].className = dote[l].className.replace(" w3-white", "");
  }
  z[imageIndex - 1].style.display = "block";
  dote[imageIndex - 1].className += " w3-white";
}
