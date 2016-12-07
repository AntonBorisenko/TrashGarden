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
    var menu = MainMenu.arrayMenu;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].sizeX) ) && (y > menu[i].y && y < (menu[i].y + menu[i].sizeY)) )  {
        Model.mainMenuClick(menu[i].ObjName);
        return;
      }
    }
  },

  game: function(x, y) {
    if((x > GAME_MENU_ICON_MENU_X && x < (GAME_MENU_ICON_MENU_X + GAME_MENU_ICON_SIZE_X) ) && (y > GAME_MENU_ICON_MENU_Y && y < (GAME_MENU_ICON_MENU_Y + GAME_MENU_ICON_SIZE_Y)) )  {
      Model.gameMenuClick();
    }
  }

}
