"use strict";

var MainMenu = {

  //This array needs to track clicks
  arrayMenu: [],

  make: function() {
    //zero out an array
    MainMenu.arrayMenu = [];

    function createMenuItem(img, x, y, ObjName) {
      var sizeX = MAIN_MENU_ITEM_SIZE_X;
      var sizeY = MAIN_MENU_ITEM_SIZE_Y;
      //ctx.drawImage(img, x, y, sizeX, sizeY);
      var objectMenu = new MainMenu.createObject(ObjName, x, y, sizeX, sizeY, img);
      //Add in array
      MainMenu.arrayMenu.push(objectMenu);
      if(MainMenu.arrayMenu.length == 4) {
        //responce on the task
        Model.response("main menu complete");
      }
    }
    //Create main menu
    createMenuItem(DownloadApp.imagesMainMenu[0], MAIN_MENU_ITEM_X, MAIN_MENU_ON_GARDEN_BED_Y, "on trash garden");
    createMenuItem(DownloadApp.imagesMainMenu[1], MAIN_MENU_HELP_X, MAIN_MENU_HELP_Y, "help");
    createMenuItem(DownloadApp.imagesMainMenu[2], MAIN_MENU_NEW_GAME_X, MAIN_MENU_NEW_GAME_Y, "new game");
    createMenuItem(DownloadApp.imagesMainMenu[3], MAIN_MENU_EXIT_X, MAIN_MENU_EXIT_Y, "exit");
  },

  //Prototype main menu items
  createObject: function(ObjName, x, y, sizeX, sizeY, img) {
   this.ObjName = ObjName;
   this.x = x;
   this.y = y;
   this.sizeX = sizeX;
   this.sizeY = sizeY;
   this.img = img;
 },

  clickOnTheItem: function(item) {
    switch(item) {
      case "on trash garden":
        OnTrashGarden.clickOnTheTtem();
        break;
      case "help":
        Help.clickOnTheTtem();
        break;
      case "new game":
        NewGame.clickOnTheTtem();
        break;
      case "exit":
        Exit.clickOnTheTtem();
        break;
     }
  }


}


//maim menu item - "On garden bed"
var OnTrashGarden = {
  clickOnTheTtem: function() {
    Model.response("start game");
  }
}

//maim menu item - "Help"
var Help = {
  clickOnTheTtem: function() {
    alert("help!");
  }
}

//maim menu item - "New game"
var NewGame = {
  clickOnTheTtem: function() {
    var decision = confirm("Вы уверены что хотите начать новую игру?");
    if(decision == true) {
      //Model.resetAll();
      OnTrashGarden.clickOnTheTtem();
    }
  }
}

//maim menu item - "Exit"
var Exit = {
  clickOnTheTtem: function() {
    alert('exit!');
  }
}
