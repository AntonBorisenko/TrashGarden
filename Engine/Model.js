"use strict";

var Model = {

  //responce on the task
  response: function(message) {
    //define further actions
    switch(message) {
      case "download complete":
        ctx.clearRect(0,0,canvas.width,canvas.height);
        Controller.complete(message);
      break;

      case "main menu complete":
        locationNow = "main menu";
        document.body.style.overflow = "hidden"; //Disable scroll
        Model.createTouchEvent();
        Controller.complete(message);
      break;

      case "start game":
        initialization = true;
        GameMenu.make();
        GameMenu.createBag();
        Map.make();
      break;

      case "game menu complete":
        locationNow = "game";
        window.canvas.width = document.documentElement.clientWidth;
        window.canvas.height = document.documentElement.clientHeight;
        Model.createMapEvents();
        //ЭТО ДЛЯ БРАУЗЕРА!!!В НОНЕЧНОЙ ВЕРСИИ ДЛЯ МОБИЛ - УДАЛИТЬ!
        Model.scrollMap();
      break;
    }

  },

  //called from the controller
  initialization: function(canvas) {
    Global.initialization(canvas);
  },

  //called from the controller(downloading images)
  download: function() {
    ctx.font = DOWNLOAD_APP_TEXT;
    ctx.fillText("Подождите, идёт загрузка приложения", DOWNLOAD_APP_X, DOWNLOAD_APP_Y);
    DownloadApp.downloading();
  },

  //called from the controller
  createMainMenu: function() {
    MainMenu.make();
  },

  changeLocation: function(newLocation) {
    locationNow = newLocation;
  },

  newGame: function() {
    //Здесь сбрасываем всё, обнуляем
    //..........//
    OnTrashGarden.touchOnTheTtem();
  },

  createTouchEvent: function() {
    //СОБЫТИЕ КЛИКА УДАЛИТЬ ДЛЯ КОНЕЧНОЙ МОБИЛЬНОЙ ВЕРСИИ
    canvas.onclick = function(event) {
      Click.onclick(event);
    }
    canvas.addEventListener('touchstart', function(event) {
      Touch.touchStart(event);
    }, false);
  },

  //hanging listener
  createMapEvents: function() {
    var touchMove = canvas.addEventListener('touchmove', function(event) {
      Touch.touchMove(event);
    }, false);
    canvas.addEventListener('touchend', function(event, touchMove) {
      Touch.touchEnd(event, touchMove);
    }, false);
    //ЭТО ДЛЯ ТЕСТИРОВАНИЯ В БРАУЗЕРЕ - ПОТОМ УБРАТЬ
    document.onkeydown = function checkKeycode(event) {
      if(locationNow == "game") {
        if(event.keyCode == 112) {
          if(scale >= 1 && scale < 2) {
            scale += 0.05;
          } else if(scale >= 2) {
            scale += 0.08;
          } else {
            scale += 0.02;
          }
        } else if(event.keyCode == 113) {
          if(scale >= 1 && scale < 2) {
            scale -= 0.05;
          } else if(scale >= 2) {
            scale -= 0.08;
          } else {
            scale -= 0.02;
          }
        }
      }
      if(scale < Touch.min_zoom) { scale = Touch.min_zoom }
      if(scale > Touch.max_zoom) { scale = Touch.max_zoom }
    }
  },

  //ЭТО ДЛЯ БРАУЗЕРА!!!В НОНЕЧНОЙ ВЕРСИИ ДЛЯ МОБИЛ - УДАЛИТЬ!
  scrollMap: function() {
    var status = false;
    var x, y, el, canvasX, canvasY;
    //ТУТ НУЖНО ВСЁ ХОРОШЕНЬКО ОБДУМАТЬ И ГРАМОТНО НАПИСАТЬ, А ТО УЖЕ ЖЕСТЬ
    canvas.addEventListener('mousedown', function(event) {
      //СКОРЕЕ ВСЕГО ЭТО ТОЖЕ НЕ НУЖНО, Т.К. ПОЗИЦИЯ ХОЛСТА - 0,0
      el = document.getElementById('canvas');
      canvasX = findPosX(el); //functions.js
      canvasY = findPosY(el); //functions.js
      //We get the coordinates of the click in the canvas
      x = event.pageX - canvasX;
      y = event.pageY - canvasY;
      status = true;
      if(bag) {
        if(x > bagX && y > bagY && x < (bagX + bagSizeX) && y < (bagY + bagSizeY)) {
          Click.bag(x, y);
          status = false;
        }
        //Если нажимаем на инструмент или стрелки
        } else {
          if(x > GAME_MENU_TOOL_X && y > GAME_MENU_TOOL_Y && x < (GAME_MENU_TOOL_X + GAME_MENU_TOOL_SIZE_X) && y < (GAME_MENU_TOOL_Y + GAME_MENU_TOOL_SIZE_Y)) {
            //будем делать drag and drop
            Model.dragAndDropTool(tool);
            status = false;
          } else if((x > GAME_MENU_ARROW_LEFT_X && x < (GAME_MENU_ARROW_LEFT_X + GAME_MENU_ARROW_SIZE_X) ) && (y > GAME_MENU_ARROW_LEFT_Y && y < (GAME_MENU_ARROW_LEFT_Y + GAME_MENU_ARROW_SIZE_Y)) )  {
            GameMenu.changeTool("left");
            status = false;
          } else if((x > GAME_MENU_ARROW_RIGHT_X && x < (GAME_MENU_ARROW_RIGHT_X + GAME_MENU_ARROW_SIZE_X) ) && (y > GAME_MENU_ARROW_RIGHT_Y && y < (GAME_MENU_ARROW_RIGHT_Y + GAME_MENU_ARROW_SIZE_Y)) )  {
            GameMenu.changeTool("right");
            status = false;
          }
        }
    }, false);

    var handleMove = canvas.addEventListener('mousemove', function(event) {
      //We get the coordinates mouse in the canvas(click)
      var moveX = event.pageX - canvasX;
      var moveY = event.pageY - canvasY;
      //for drag and drop
      lastMoveForToolX = moveX - (GAME_MENU_TOOL_SIZE_X / 2);
      lastMoveForToolY = moveY - (GAME_MENU_TOOL_SIZE_Y / 2);
      lastMoveForSeedX = moveX - (BAG_SEED_POSITION_SIZE_X / 2);
      lastMoveForSeedY = moveY - (BAG_SEED_POSITION_SIZE_Y / 2);
      if(planting && bagPlantingSeed !== false) { Touch.planting(moveX, moveY);}
      if(bailer) { Touch.watering(moveX, moveY);}
      if(status) {
        //scrolling now
        if(isNaN(lastScrollX) && isNaN(lastScrollY)) {
          changeScroll(moveX, moveY, x, y); //functions.js
        } else {
          changeScroll(moveX, moveY, lastScrollX, lastScrollY); //functions.js
        }
        //set next coordinates
        lastScrollX = moveX;
        lastScrollY = moveY;
      }
    }, false);

    canvas.addEventListener('mouseup', function(event) {
      Model.canselToolAndSeed();
      document.removeEventListener('mousemove', handleMove, true);
      status = false;
      lastScrollX = NaN;
      lastScrollY = NaN;
    }, false);

  },

  touchInMainMenu: function(item) {
    MainMenu.touchOnTheItem(item);
  },

  touchInGameMenu: function(icon) {
    GameMenu.touchOnTheIcon(icon);
  },

  dragAndDropTool: function(item) {
    switch(item) {
      case 0:
        bailer = true;
      break;
      case 1:
        shovel = true;
      break
      case 2:
        sprayer = true;
      break;
    }
  },

  dragAndDropBag: function(seedId) {
    bagPlantingSeed = seedId;
    planting = true;
  },

  canselToolAndSeed: function() {
    bailer = false;
    sprayer = false;
    shovel = false;
    bagPlantingSeed = false;
    planting = false;
    lastMoveForToolX = false;
    lastMoveForToolY = false;
    lastMoveForSeedX = false;
    lastMoveForSeedY = false;
  },

  planting: function(bed, place) {
    if(Map.arrayGardenBeds[bed].places[place].plant === false) {
      Map.arrayGardenBeds[bed].places[place].plant = new Bag.seeds[bagPlantingSeed].ObjPlant;
    }
  },

  watering: function(bed, place) {
    if(Map.arrayGardenBeds[bed].places[place].plant !== false) {
      Map.arrayGardenBeds[bed].places[place].plant.watering();
    }  
  }

}
