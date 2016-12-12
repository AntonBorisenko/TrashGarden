"use strict";

var GameMenu = {

  tools: [],
  menuIcons: [],

  make: function() {
    //zero out an array
    GameMenu.menuIcons = [];

    function createTools(img, objName) {
      //Create Object_menu_item
      var tool = new Tool(img, objName);//functions.js
      GameMenu.tools.push(tool);//Add in array
    }

    function createMenu(img, x, y, sizeX, sizeY, objName) {
      //Create object menu item
      var menuIcon = new CreateObject(x, y, sizeX ,sizeY, img, objName);//functions.js
      GameMenu.menuIcons.push(menuIcon);//Add in array
      if(GameMenu.menuIcons.length == 4 && GameMenu.tools.length == 3) {
        //responce on the task
        Model.response("game menu complete");
      }
    }
    //tools
    createTools(DownloadApp.imagesGameMenu[6], "Bailer");//bailer
    createTools(DownloadApp.imagesGameMenu[7], "Shovel");//shovel
    createTools(DownloadApp.imagesGameMenu[8], "Sprayer");//sprayer
    //icons
    createMenu(DownloadApp.imagesGameMenu[3], GAME_MENU_ICON_SHOP_X, GAME_MENU_ICON_SHOP_Y, GAME_MENU_ICON_SIZE_X, GAME_MENU_ICON_SIZE_Y, "Shop");
    createMenu(DownloadApp.imagesGameMenu[0], GAME_MENU_ICON_MENU_X, GAME_MENU_ICON_MENU_Y, GAME_MENU_ICON_SIZE_X, GAME_MENU_ICON_SIZE_Y, "Exit");
    createMenu(DownloadApp.imagesGameMenu[1], GAME_MENU_ICON_BAG_X, GAME_MENU_ICON_BAG_Y, GAME_MENU_ICON_SIZE_X, GAME_MENU_ICON_SIZE_Y, "Bag");
    createMenu(DownloadApp.imagesGameMenu[2], GAME_MENU_ICON_STOCK_X, GAME_MENU_ICON_STOCK_Y, GAME_MENU_ICON_SIZE_X, GAME_MENU_ICON_SIZE_Y, "Stock");

  },

  touchOnTheIcon: function(item) {
    switch(item) {
      case "Exit":
        Exit.touchOnTheIcon();
        break;
      case "Bag":
        Bag.touchOnTheIcon();
        break;
      case "Stock":
        Stock.touchOnTheIcon();
        break;
      case "Shop":
        Shop.touchOnTheIcon();
        break;
     }
  }

}


//OBJECTS MENU ICONS

var Shop = {
  x: 0,
  y: 0,
  sizeX: NaN,
  sizeY: NaN,
  location: null,

  //public methods
  touchOnTheIcon: function() {
    if(!this.x||!this.y||!this.sizeX||this.sizeY) {
      Shop.initProportions();
    }
    this.shop = "main";
    Model.changeLocation("shop");
  },

  initProportions: function() {
    Shop.sizeX = SCREEN_WIDTH;
    Shop.sizeY = SCREEN_HEIGHT;
  }

}

var Exit = {
  touchOnTheIcon: function() {
    Model.changeLocation("main menu");
    document.body.style.overflow = "hidden"; //Disable scroll
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    if(height > width) {
      window.canvas.width = height;
      window.canvas.height = width;
    } else {
      window.canvas.width = width;
      window.canvas.height = height;
    }
  }
}


//bag
var Bag = {

  //coordinates in bag
  x:0,
  y:0,
  sizeX:0,
  sizeY:0,

  touchOnTheIcon: function() {
    alert("Bag!");
    // if(!Bag.x||!Bag.y||!Bag.sizeX||Bag.sizeY) {
    //   Bag.initProportions();
    // }
    // window.bag = true;
    // window.locationNow = "bag";
  },

  // initProportions: function() {
  //   //in bag
  //   Bag.x = bagX;
  //   Bag.y = bagY;
  //   Bag.sizeX = bagSizeX;
  //   Bag.sizeY = bagSizeY;
  // }

}

//Constructor Stock
var Stock = {

  //public properties
  x: 0,
  y: 0,
  sizeX: NaN,
  sizeY: NaN,

  //public methods
  touchOnTheIcon: function() {
    if(!this.x||!this.y||!this.sizeX||this.sizeY) {
      Stock.initProportions();
    }
    Model.changeLocation("stock");
  },

  initProportions: function() {
    Stock.sizeX = SCREEN_WIDTH;
    Stock.sizeY = SCREEN_HEIGHT;
  }

}
