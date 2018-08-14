function changeRem() {
  var deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 640) {
    deviceWidth = 640;
  }
  document.documentElement.style.fontSize = deviceWidth / 6.4 + "px";
}

changeRem();
window.onresize = changeRem;