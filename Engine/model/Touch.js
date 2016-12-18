"use strict";

var Touch = {
  //for scrolling
  status: false,
  startX: undefined,
  startY: undefined,
  timeStart: undefined,
  //for zoom
  zoomStatus: 0,
  scaling: false,
  dist: 0,
  curr_scale: 1.0,
  max_zoom: 3.0,
  min_zoom: 0.5,

  //ТУТ НУЖНО ВСЁ ХОРОШЕНЬКО ОБДУМАТЬ И ГРАМОТНО НАПИСАТЬ, А ТО УЖЕ ЖЕСТЬ
  touchStart: function(event) {
    event.preventDefault();
    var tt = event.targetTouches;
    //for scrolling
    if(tt.length === 1) {
      event.stopPropagation();
      var x = this.startX = event.changedTouches[0].pageX;
      var y = this.startY = event.changedTouches[0].pageY;
      this.timeStart  = new Date();
      this.status = true;
      //tuch on bag, tool or arrows
      this.bagAndTool(x, y);
      //just touch(game menu, plants)
      this.justTouch(x, y);
    }
    //for change scale
    if (tt.length >= 2) {
      this.zoomStatus = 2;
      this.dist = distance(tt[0], tt[1]);
      this.scaling = true;
    } else {
      this.scaling = false;
    }
  },

  touchMove: function(event) {
    event.preventDefault();
    var tt = event.targetTouches;
    //scrolling
    if(tt.length === 1) {
      if(this.status) {
        this.scrolling(event);
      }
    }
    //zoom
    if(tt.length === 2) {
      if (this.scaling) {
        this.curr_scale = distance(tt[0], tt[1]) / this.dist; //functions.js
      }
      zoom();
    }
  },

  touchEnd: function(event, touchMoveListener) {
    var tt = event.targetTouches;
    if (tt.length < 2) {
      this.scaling = false;
      if(this.zoomStatus < 1 && this.status) {
        scrollingJumps(event, this.startX, this.startY, this.timeStart);
      }
    } else {
      this.scaling = true;
      document.removeEventListener('touchmove', touchMoveListener, true);
      this.status = false;
    }
    this.zoomStatus--;
  },

  scrolling: function(event) {
    event.stopPropagation();
    var nowPointX  = event.changedTouches[0].pageX;
    var nowPointY  = event.changedTouches[0].pageY;
    var timeEnd  = new Date();
    if((timeEnd.getTime() - this.timeStart.getTime()) > 200) {
      if(this.zoomStatus < 1) {
        changeScroll(nowPointX, nowPointY, this.startX, this.startY);
        this.startX = nowPointX;
        this.startY = nowPointY;
      }
    }
  },

  ////////JUST TOUCH IN game
  justTouch: function(x, y) {
    //determine the place where there was a touck
    switch(locationNow) {
      case "main menu":
        Touch.touchInMainMenu(x, y);
        break;
      case "game":
        Touch.touchInGame(x, y)
        break;
    }
  },

  touchInMainMenu: function(x, y) {
    var menu = MainMenu.arrayMenu;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].sizeX) ) && (y > menu[i].y && y < (menu[i].y + menu[i].sizeY)) )  {
        Model.touchInMainMenu(menu[i].objName);
        return;
      }
    }
  },

  touchInGame: function(x, y) {
    var menu = GameMenu.menuIcons;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].sizeX) ) && (y > menu[i].y && y < (menu[i].y + menu[i].sizeY)) )  {
        Model.touchInGameMenu(menu[i].objName);
        return;
      }
    }
  },

  bagAndTool: function(x, y) {
    if(bag) {
      if(x > bagX && y > bagY && x < (bagX + bagSizeX) && y < (bagY + bagSizeY)) {
        Click.bag(x, y);
        this.status = false;
      }
    //Если нажимаем на инструмент или стрелки
    } else {
      if(x > GAME_MENU_TOOL_X && y > GAME_MENU_TOOL_Y && x < (GAME_MENU_TOOL_X + GAME_MENU_TOOL_SIZE_X) && y < (GAME_MENU_TOOL_Y + GAME_MENU_TOOL_SIZE_Y)) {
        //будем делать drag and drop
        this.status = false;
      } else if((x > GAME_MENU_ARROW_LEFT_X && x < (GAME_MENU_ARROW_LEFT_X + GAME_MENU_ARROW_SIZE_X) ) && (y > GAME_MENU_ARROW_LEFT_Y && y < (GAME_MENU_ARROW_LEFT_Y + GAME_MENU_ARROW_SIZE_Y)) )  {
        GameMenu.changeTool("left");
        this.status = false;
      } else if((x > GAME_MENU_ARROW_RIGHT_X && x < (GAME_MENU_ARROW_RIGHT_X + GAME_MENU_ARROW_SIZE_X) ) && (y > GAME_MENU_ARROW_RIGHT_Y && y < (GAME_MENU_ARROW_RIGHT_Y + GAME_MENU_ARROW_SIZE_Y)) )  {
        GameMenu.changeTool("right");
        this.status = false;
      }
    }
  },

  touchInBag: function(x, y) {
    //будем делать drag and drop
  }

}
