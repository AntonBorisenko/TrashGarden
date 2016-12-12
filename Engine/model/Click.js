"use strict";

var Click = {

  onclick: function(event) {
    //We get the coordinates of the canvas on the page
    var el = document.getElementById('canvas');
    var xCanvas = findPosX(el); //functions.js
    var yCanvas = findPosY(el); //functions.js
    //We get the coordinates of the click in the canvas
    var x = event.pageX - xCanvas;
    var y = event.pageY - yCanvas;

    //determine the place where there was a click
    switch(locationNow) {
      case "main menu":
        Click.mainMenu(x, y);
        break;
      case "game":
        Click.game(x, y)
        break;
    }

  },

  //Check whether a click on the main menu
  mainMenu: function(x, y) {
    Touch.touchInMainMenu(x, y);
  },

  game: function(x, y) {
    Touch.touchInGame(x, y);
  },

}
