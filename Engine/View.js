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
    ctx.drawImage(imagesMainMenu[4], MAIN_MENU_FON_X, MAIN_MENU_FON_Y, canvas.width, canvas.height);
    for(var i = 0; i < menu.length; i++) {
      ctx.drawImage(menu[i].img, menu[i].x, menu[i].y, menu[i].sizeX, menu[i].sizeY);
    }

  },

  drawMap: function() {
    //fone
    ctx.drawImage(imagesMap[1], (0+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(imagesMap[1], (1000+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(imagesMap[1], (2000+scrollX)*scale, (0+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(imagesMap[1], (0+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(imagesMap[1], (1000+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    ctx.drawImage(imagesMap[1], (2000+scrollX)*scale, (1000+scrollY)*scale, 1000*scale, 1000*scale);
    //house
    ctx.drawImage(imagesMap[2], (1900+scrollX)*scale, (10+scrollY)*scale, 850*scale, 600*scale);
    //draw garden beds
    var beds = Map.arrayGardenBeds;
    for(var i = 0; i < beds.length; i++) {
      ctx.drawImage(imagesMap[3], (beds[i].x+scrollX)*scale, (beds[i].y+scrollY)*scale, beds[i].sizeX*scale, beds[i].sizeY*scale);
      beds[i].drawPlaces(); // draw Plants
    }
  },

  drawGameMenu: function() {
    var menu = GameMenu.menuIcons;
    for(var i = 0; i < menu.length; i++) {
      ctx.drawImage(menu[i].img, menu[i].x, menu[i].y, menu[i].sizeX, menu[i].sizeY);
    }
    if(bag) {
      View.drawBag();
    } else {
      View.drawTool();
    }
  },

  drawShop: function() {
    ctx.drawImage(imagesShop[5], Shop.x, Shop.y, Shop.sizeX, Shop.sizeY);
  },

  drawStock: function() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(Stock.x, Stock.y, Stock.sizeX, Stock.sizeY);
  },

  drawBag: function() {
    //fone
    ctx.drawImage(imagesGameMenu[9], bagX, bagY, bagSizeX, bagSizeY);
    //seeds
    ctx.drawImage(Bag.seeds[0].img, BAG_SEED_POSITION_1_X, BAG_SEED_POSITION_1_Y, BAG_SEED_POSITION_SIZE_X, BAG_SEED_POSITION_SIZE_Y);
    ctx.drawImage(Bag.seeds[1].img, BAG_SEED_POSITION_2_X, BAG_SEED_POSITION_2_Y, BAG_SEED_POSITION_SIZE_X, BAG_SEED_POSITION_SIZE_Y);
    ctx.drawImage(Bag.seeds[2].img, BAG_SEED_POSITION_3_X, BAG_SEED_POSITION_3_Y, BAG_SEED_POSITION_SIZE_X, BAG_SEED_POSITION_SIZE_Y);
  },

  drawTool: function() {
    //arrows
    ctx.drawImage(imagesGameMenu[4], GAME_MENU_ARROW_LEFT_X, GAME_MENU_ARROW_LEFT_Y, GAME_MENU_ARROW_SIZE_X, GAME_MENU_ARROW_SIZE_Y);
    ctx.drawImage(imagesGameMenu[5], GAME_MENU_ARROW_RIGHT_X, GAME_MENU_ARROW_RIGHT_Y, GAME_MENU_ARROW_SIZE_X, GAME_MENU_ARROW_SIZE_Y);
    //tool
    ctx.drawImage(GameMenu.tools[tool].img, GAME_MENU_TOOL_X, GAME_MENU_TOOL_Y, GAME_MENU_TOOL_SIZE_X, GAME_MENU_TOOL_SIZE_Y);
  }

}
