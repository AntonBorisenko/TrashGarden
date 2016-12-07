"use strict";

var Global = {

  initialization: function(canvas) {
    Global.defineScreenSize(canvas);
    Global.defineScrolling(canvas);
    Global.defineDownloadAppText();
    Global.defineStatusVariables();
    Global.defineMainMenu();
    Global.defineGameMenu();
  },

  defineScreenSize: function(canvas) {
    window.SCREEN_WIDTH = window.screen.width;
    window.SCREEN_HEIGHT = window.screen.height;
    window.WINDOW_WIDTH = document.documentElement.clientWidth;
    window.WINDOW_HEIGHT = document.documentElement.clientHeight;
  },

  defineScrolling: function(canvas) {
    window.scrollX = 0;
    window.scrollY = 0;
    window.scrollStep = 20;
    window.scale = 1;
  },

  defineDownloadAppText: function() {
    var sizePx = WINDOW_WIDTH/24;
    window.DOWNLOAD_APP_TEXT = "italic " + sizePx + "px Arial";
    window.DOWNLOAD_APP_X = WINDOW_WIDTH/10;
    window.DOWNLOAD_APP_Y = WINDOW_HEIGHT/2;
  },

  defineStatusVariables: function() {
    window.locationNow = "download";                  //location
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
    window.GAME_MENU_ICON_BAG_X = window.GAME_MENU_ICON_STOCK_X = 0;
    window.GAME_MENU_ICON_MENU_X = window.GAME_MENU_ICON_SHOP_X = WINDOW_WIDTH - sizeIconX;
    //y
    window.GAME_MENU_ICON_BAG_Y = window.GAME_MENU_ICON_MENU_Y = 0;
    window.GAME_MENU_ICON_STOCK_Y = window.GAME_MENU_ICON_SHOP_Y = WINDOW_HEIGHT - sizeIconY;
    //tools
    window.GAME_MENU_TOOL_SIZE_X = sizeIconX / 1.2;
    window.GAME_MENU_TOOL_SIZE_Y = sizeIconX / 1.2;
    window.GAME_MENU_TOOL_X = (WINDOW_WIDTH / 2) - (sizeIconX / 2);
    window.GAME_MENU_TOOL_Y = window.GAME_MENU_ICON_SHOP_Y;
    //arrows
    window.GAME_MENU_ARROW_SIZE_X = WINDOW_HEIGHT /8;
    window.GAME_MENU_ARROW_SIZE_Y = WINDOW_HEIGHT /5;
    window.GAME_MENU_ARROW_LEFT_X = (WINDOW_WIDTH / 3) - (sizeIconX / 2);
    window.GAME_MENU_ARROW_LEFT_Y = window.GAME_MENU_ICON_SHOP_Y + distanceIcons;
    window.GAME_MENU_ARROW_RIGHT_X = WINDOW_WIDTH - (WINDOW_WIDTH / 3) - GAME_MENU_ARROW_SIZE_X + (sizeIconX / 2)  - (sizeIconX / 6.1);
    window.GAME_MENU_ARROW_RIGHT_Y = window.GAME_MENU_ICON_SHOP_Y + distanceIcons;
  }

}
