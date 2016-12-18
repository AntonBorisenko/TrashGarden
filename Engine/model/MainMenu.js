"use strict";

var MainMenu = {

  //This array needs to track touch
  arrayMenu: [],

  make: function() {
    //zero out an array
    MainMenu.arrayMenu = [];

    function createMenuItem(img, x, y, objName) {
      var sizeX = MAIN_MENU_ITEM_SIZE_X;
      var sizeY = MAIN_MENU_ITEM_SIZE_Y;
      //ctx.drawImage(img, x, y, sizeX, sizeY);
      var objectMenu = new MainMenu.createObject(objName, x, y, sizeX, sizeY, img);
      //Add in array
      MainMenu.arrayMenu.push(objectMenu);
      if(MainMenu.arrayMenu.length == 4) {
        //responce on the task
        Model.response("main menu complete");
      }
    }
    //Create main menu
    createMenuItem(imagesMainMenu[0], MAIN_MENU_ITEM_X, MAIN_MENU_ON_GARDEN_BED_Y, "on trash garden");
    createMenuItem(imagesMainMenu[1], MAIN_MENU_HELP_X, MAIN_MENU_HELP_Y, "help");
    createMenuItem(imagesMainMenu[2], MAIN_MENU_NEW_GAME_X, MAIN_MENU_NEW_GAME_Y, "new game");
    createMenuItem(imagesMainMenu[3], MAIN_MENU_EXIT_X, MAIN_MENU_EXIT_Y, "exit");
  },

  //Prototype main menu items
  createObject: function(objName, x, y, sizeX, sizeY, img) {
    this.objName = objName;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.img = img;
  },

  touchOnTheItem: function(item) {
    switch(item) {
      case "on trash garden":
        OnTrashGarden.touchOnTheTtem();
        break;
      case "help":
        Help.touchOnTheTtem();
        break;
      case "new game":
        NewGame.touchOnTheTtem();
        break;
      case "exit":
        Exit.touchOnTheTtem();
        break;
     }
  }


}


//maim menu item - "On garden bed"
var OnTrashGarden = {
  touchOnTheTtem: function() {
    if(initialization === false) {
      Model.response("start game");
    } else {
      Model.changeLocation("game");
    }
  }
}

//maim menu item - "Help"
var Help = {
  touchOnTheTtem: function() {
    alert("help!");
  }
}

//maim menu item - "New game"
var NewGame = {
  touchOnTheTtem: function() {
    var decision = confirm("Вы уверены что хотите начать новую игру?");
    if(decision == true) {
      Model.newGame();
    }
  }
}

//maim menu item - "Exit"
var Exit = {
  touchOnTheTtem: function() {
    alert('exit!');
  }
}
