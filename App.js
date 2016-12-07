"use strict";
//Main js file
window.onload = function() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  if(height > width) {
      window.canvas.width = height;
      window.canvas.height = width;
  } else {
    window.canvas.width = width;
    window.canvas.height = height;
  }
  //Create context
  window.ctx = canvas.getContext("2d");
  //Download an application
  Controller.start(canvas);
}
