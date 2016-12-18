"use strict";

var Global = {

  initialization: function(canvas) {
    Global.defineArraysForImages();
    Global.defineScreenSize(canvas);
    Global.defineScrolling(canvas);
    Global.defineDownloadAppText();
    Global.defineStatusVariables();
    Global.defineMainMenu();
    Global.defineGameMenu()
    Global.defineShop();
    Global.defineBag();
    Global.definePlants();
  },

  defineArraysForImages: function() {
    window.imagesMainMenu = [];
    window.imagesMap = [];
    window.imagesGameMenu = [];
    window.imagesShop = [];
    window.imagesBag = [];
    window.imagesPlantsPapper = [];
  },

  defineScreenSize: function(canvas) {
    window.SCREEN_WIDTH = window.screen.width;
    window.SCREEN_HEIGHT = window.screen.height;
    window.WINDOW_WIDTH = document.documentElement.clientWidth;
    window.WINDOW_HEIGHT = document.documentElement.clientHeight;
  },

  defineScrolling: function(canvas) {
    window.smoothScroll = false; //for interrupt scrolling
    window.scrollX = 0;
    window.scrollY = 0;
    window.scale = 1;
    //the size of the card
    window.mapWidth = 3000;
    window.mapHeight = 2000;
    //scrollLimits
    window.scrollLeftLimit = 0;
    window.scrollTopLimit = 0;
    //for mousemove and touchmove(too scrolling) for browser
    window.lastScrollX = NaN;
    window.lastScrollY = NaN;
  },

  defineDownloadAppText: function() {
    var sizePx = WINDOW_WIDTH/24;
    window.DOWNLOAD_APP_TEXT = "italic " + sizePx + "px Arial";
    window.DOWNLOAD_APP_X = WINDOW_WIDTH/10;
    window.DOWNLOAD_APP_Y = WINDOW_HEIGHT/2;
  },

  defineStatusVariables: function() {
    window.locationNow = "download";                  //location
    window.initialization = false;
    window.bag = false;
    window.tool = 0;
  },

  defineMainMenu: function() {
    //fon
    window.MAIN_MENU_FON_X = window.MAIN_MENU_FON_Y = 0;
    window.MAIN_MENU_FON_SIZE_X = WINDOW_WIDTH;
    window.MAIN_MENU_FON_SIZE_Y = WINDOW_HEIGHT;
    //main menu items
    window.MAIN_MENU_ITEM_SIZE_X = WINDOW_WIDTH/3;
    window.MAIN_MENU_ITEM_SIZE_Y = WINDOW_HEIGHT/7;
    window.MAIN_MENU_ITEM_DISTANCE = WINDOW_HEIGHT/12;
    window.MAIN_MENU_ITEM_X = WINDOW_WIDTH/3;
    window.MAIN_MENU_HELP_X = WINDOW_WIDTH/2.9;
    window.MAIN_MENU_NEW_GAME_X = WINDOW_WIDTH/2.8;
    window.MAIN_MENU_EXIT_X = WINDOW_WIDTH/2.8;
    window.MAIN_MENU_ON_GARDEN_BED_Y = MAIN_MENU_ITEM_DISTANCE*1.5;
    window.MAIN_MENU_HELP_Y = MAIN_MENU_ITEM_SIZE_Y+(MAIN_MENU_ITEM_DISTANCE*1.8);
    window.MAIN_MENU_NEW_GAME_Y = (MAIN_MENU_ITEM_SIZE_Y*2) + (MAIN_MENU_ITEM_DISTANCE*2.1);
    window.MAIN_MENU_EXIT_Y = (MAIN_MENU_ITEM_SIZE_Y*3) + (MAIN_MENU_ITEM_DISTANCE*2.4);
  },

  defineGameMenu: function() {
    //PROPORTIONS GAME MENU ICONS
    var sizeIconX = window.GAME_MENU_ICON_SIZE_X = WINDOW_WIDTH/8;
    var sizeIconY = window.GAME_MENU_ICON_SIZE_Y = GAME_MENU_ICON_SIZE_X / 2;
    var distanceIcons = WINDOW_WIDTH/60;
    //size x
    window.GAME_MENU_ICON_MENU_SIZE_X = window.GAME_MENU_ICON_BAG_SIZE_X =
    window.GAME_MENU_ICON_SHOP_SIZE_X = window.GAME_MENU_ICON_STOCK_SIZE_X = sizeIconX;
    //size y
    window.GAME_MENU_ICON_MENU_SIZE_Y = window.GAME_MENU_ICON_BAG_SIZE_Y =
    window.GAME_MENU_ICON_SHOP_SIZE_Y = window.GAME_MENU_ICON_STOCK_SIZE_Y = sizeIconX / 2;
    //x
    window.GAME_MENU_ICON_BAG_X = window.GAME_MENU_ICON_SHOP_X = 0;
    window.GAME_MENU_ICON_MENU_X = window.GAME_MENU_ICON_STOCK_X = WINDOW_WIDTH - sizeIconX;
    //y
    window.GAME_MENU_ICON_SHOP_Y = window.GAME_MENU_ICON_MENU_Y = 0;
    window.GAME_MENU_ICON_BAG_Y = window.GAME_MENU_ICON_STOCK_Y = WINDOW_HEIGHT - sizeIconY;
    //tool
    window.GAME_MENU_TOOL_SIZE_X = WINDOW_HEIGHT / 5.5;
    window.GAME_MENU_TOOL_SIZE_Y = GAME_MENU_TOOL_SIZE_X;
    window.GAME_MENU_TOOL_X = (WINDOW_WIDTH / 2) - (GAME_MENU_TOOL_SIZE_X / 2);
    window.GAME_MENU_TOOL_Y = WINDOW_HEIGHT / 7 * 5.6;
    //arrows
    window.GAME_MENU_ARROW_SIZE_X = WINDOW_HEIGHT / 10;
    window.GAME_MENU_ARROW_SIZE_Y = WINDOW_HEIGHT / 6;
    window.GAME_MENU_ARROW_LEFT_X = (WINDOW_WIDTH / 2) - (GAME_MENU_TOOL_SIZE_X / 2) - (GAME_MENU_ARROW_SIZE_X * 1.5);
    window.GAME_MENU_ARROW_LEFT_Y = WINDOW_HEIGHT / 7 * 5.7;
    window.GAME_MENU_ARROW_RIGHT_X = (WINDOW_WIDTH / 2) + (GAME_MENU_TOOL_SIZE_X / 2) + (GAME_MENU_ARROW_SIZE_X * 0.5);
    window.GAME_MENU_ARROW_RIGHT_Y = GAME_MENU_ARROW_LEFT_Y;
  },

  defineShop: function() {

  },

  defineBag: function() {
    //bag fone sizeY
    window.bagX = WINDOW_WIDTH / 5.68;
    window.bagY =  WINDOW_HEIGHT / 7 * 5;
    window.bagSizeX = WINDOW_WIDTH / 3 * 1.95;
    window.bagSizeY = WINDOW_HEIGHT / 3.2;
    //Seeds in bag(in map)
    var distance =  WINDOW_HEIGHT / 19;
    window.BAG_SEED_POSITION_SIZE_X = WINDOW_HEIGHT / 8;
    window.BAG_SEED_POSITION_SIZE_Y = BAG_SEED_POSITION_SIZE_X * 1.8;
    window.BAG_SEED_POSITION_1_X = (WINDOW_WIDTH / 2) - (BAG_SEED_POSITION_SIZE_X * 1.5) - distance;
    window.BAG_SEED_POSITION_2_X = BAG_SEED_POSITION_1_X + BAG_SEED_POSITION_SIZE_X + distance;
    window.BAG_SEED_POSITION_3_X = BAG_SEED_POSITION_2_X + BAG_SEED_POSITION_SIZE_X + distance;
    window.BAG_SEED_POSITION_1_Y = window.BAG_SEED_POSITION_2_Y = window.BAG_SEED_POSITION_3_Y = WINDOW_HEIGHT / 7 * 5.3;
  },

  definePlants: function() {
    window.plantSizeX = 100;
    window.plantSizeY = 100;
  }

}
