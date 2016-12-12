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
    } else if(locationNow == "shop") {
        View.drawShop();
    } else if(locationNow == "stock") {
        View.drawStock();
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
    ////fone
    // var pattern = ctx.createPattern(DownloadApp.imagesMap[1], "repeat");
    // ctx.fillStyle = pattern;
    // ctx.rect(0 + scrollX, 0 + scrollY, canvas.width, canvas.height);
    // ctx.fill();
    // ctx.fillStyle = "lightgreen";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    //fone
    ctx.drawImage(DownloadApp.imagesMap[1], (0+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(DownloadApp.imagesMap[1], (1000+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(DownloadApp.imagesMap[1], (2000+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(DownloadApp.imagesMap[1], (0+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(DownloadApp.imagesMap[1], (1000+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(DownloadApp.imagesMap[1], (2000+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    //house
    ctx.drawImage(DownloadApp.imagesMap[2], (1900+scrollX)*scale, (10+scrollY)*scale, 850*scale, 600*scale);
    //testing first garden bed
    var bed_0 = Map.arrayGardenBeds[0];
    ctx.drawImage(DownloadApp.imagesMap[3], (bed_0.x+scrollX)*scale, (bed_0.y+scrollY)*scale, bed_0.sizeX*scale, bed_0.sizeY*scale);
    //first line
    var places_0 = bed_0.places;
    for(var i = 0; i < places_0.length; i++) {
      ctx.drawImage(DownloadApp.imagesMap[4], (places_0[i].x+scrollX)*scale, (places_0[i].y+scrollY)*scale, plantSizeX*scale, plantSizeY*scale);
    }
    //testing second garden bed
    var bed_1 = Map.arrayGardenBeds[1];
    ctx.drawImage(DownloadApp.imagesMap[3], (bed_1.x+scrollX)*scale, (bed_1.y+scrollY)*scale, bed_1.sizeX*scale, bed_1.sizeY*scale);
    //first line
    var places_1 = bed_1.places;
    for(var i = 0; i < places_1.length; i++) {
      ctx.drawImage(DownloadApp.imagesMap[5], (places_1[i].x+scrollX)*scale, (places_1[i].y+scrollY)*scale, plantSizeX*scale, plantSizeY*scale);
    }
  },

  drawGameMenu: function() {
    var menu = GameMenu.menuIcons;
    for(var i = 0; i < menu.length; i++) {
      ctx.drawImage(menu[i].img, menu[i].x, menu[i].y, menu[i].sizeX, menu[i].sizeY);
    }
  },

  drawShop: function() {
    ctx.drawImage(DownloadApp.imagesShop[5], Shop.x, Shop.y, Shop.sizeX, Shop.sizeY);
  },

  drawStock: function() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(Stock.x, Stock.y, Stock.sizeX, Stock.sizeY);
  }

}
