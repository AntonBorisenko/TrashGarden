"use strict";

var View = {

  drawGame: "",

  interval: 50,

  //setInterval start
  startGame: function() {
    View.drawGame = setInterval(View.draw, View.interval);
  },

  //setInterval start
  stopGame: function() {
    clearInterval(View.drawGame);
  },

  //define location
  draw: function() {
    //CLEAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(locationNow == "main menu") {
        View.drawMainMenu();
    } else if(locationNow == "game") {
        View.drawMap();
        View.drawGameMenu();
    }
  },

  //PAINT MAIN MENU
  drawMainMenu: function () {
    var menu = MainMenu.arrayMenu;
    //Draw fone
    ctx.drawImage(DownloadApp.imagesMainMenu[4], MAIN_MENU_FON_X, MAIN_MENU_FON_Y, canvas.width, canvas.height);
    for(var i = 0; i < menu.length; i++) {
      ctx.drawImage(menu[i].img, menu[i].x, menu[i].y, menu[i].sizeX, menu[i].sizeY);
    }

  },

  drawMap: function() {
    //fon
    // var pattern = ctx.createPattern(DownloadApp.imagesMap[1], "repeat");
    // ctx.fillStyle = pattern;
    // ctx.rect(0 + scrollX, 0 + scrollY, canvas.width, canvas.height);
    // ctx.fill();
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //house
    ctx.drawImage(DownloadApp.imagesMap[2], (1600+scrollX)*scale, (10+scrollY)*scale, 850*scale, 600*scale);
    //testing first garden bed
    ctx.drawImage(DownloadApp.imagesMap[3], (100+scrollX)*scale, (100+scrollY)*scale, 650*scale, 330*scale);
    //first line
    ctx.drawImage(DownloadApp.imagesMap[4], (150+scrollX)*scale, (150+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (300+scrollX)*scale, (150+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (450+scrollX)*scale, (150+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (600+scrollX)*scale, (150+scrollY)*scale, 100*scale, 100*scale);
    //second line
    ctx.drawImage(DownloadApp.imagesMap[5], (150+scrollX)*scale, (290+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (300+scrollX)*scale, (290+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (450+scrollX)*scale, (290+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (600+scrollX)*scale, (290+scrollY)*scale, 100*scale, 100*scale);
    //testing second garden bed
    ctx.drawImage(DownloadApp.imagesMap[3], (100+scrollX)*scale, (600+scrollY)*scale, 650*scale, 330*scale);
    //first line
    ctx.drawImage(DownloadApp.imagesMap[4], (150+scrollX)*scale, (650+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (300+scrollX)*scale, (650+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (450+scrollX)*scale, (650+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[4], (600+scrollX)*scale, (650+scrollY)*scale, 100*scale, 100*scale);
    //second line
    ctx.drawImage(DownloadApp.imagesMap[5], (150+scrollX)*scale, (790+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (300+scrollX)*scale, (790+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (450+scrollX)*scale, (790+scrollY)*scale, 100*scale, 100*scale);
    ctx.drawImage(DownloadApp.imagesMap[5], (600+scrollX)*scale, (790+scrollY)*scale, 100*scale, 100*scale);
  },

  drawGameMenu: function() {
    ctx.drawImage(DownloadApp.imagesGameMenu[1], GAME_MENU_ICON_BAG_X, GAME_MENU_ICON_BAG_Y, GAME_MENU_ICON_MENU_SIZE_X, GAME_MENU_ICON_MENU_SIZE_Y);
    ctx.drawImage(DownloadApp.imagesGameMenu[0], GAME_MENU_ICON_MENU_X, GAME_MENU_ICON_MENU_Y, GAME_MENU_ICON_MENU_SIZE_X, GAME_MENU_ICON_MENU_SIZE_Y);
    ctx.drawImage(DownloadApp.imagesGameMenu[2], GAME_MENU_ICON_STOCK_X, GAME_MENU_ICON_STOCK_Y, GAME_MENU_ICON_MENU_SIZE_X, GAME_MENU_ICON_MENU_SIZE_Y);
    ctx.drawImage(DownloadApp.imagesGameMenu[3], GAME_MENU_ICON_SHOP_X, GAME_MENU_ICON_SHOP_Y, GAME_MENU_ICON_MENU_SIZE_X, GAME_MENU_ICON_MENU_SIZE_Y);
  }

}
