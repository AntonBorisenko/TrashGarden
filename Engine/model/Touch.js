"use strict";

var Touch = {
  //for scrolling
  status: false,
  startX: undefined,
  startY: undefined,
  //for zoom
  scaling: false,
  dist: 0,
  curr_scale: 1.0,
  max_zoom: 3.0,
  min_zoom: 0.5,

  touchStart: function(event) {
    event.preventDefault();
    var tt = event.targetTouches;
    //for scrolling
    if(tt.length === 1) {
      event.stopPropagation();
      this.startX = event.changedTouches[0].pageX;
      this.startY = event.changedTouches[0].pageY;
      this.status = true;
      //just touch(game menu, plants)
      this.justTouch(this.startX, this.startY);
    }
    //for change scale
    if (tt.length >= 2) {
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
      this.zoom();
    }
  },

  touchEnd: function(event, touchMoveListener) {
    var tt = event.targetTouches;
    if (tt.length < 2) {
      this.scaling = false;
    } else {
      this.scaling = true;
      document.removeEventListener('touchmove', touchMoveListener, true);
      this.status = false;
      lastScrollX = NaN;
      lastScrollY = NaN;
    }
  },

  scrolling: function(event) {
    event.stopPropagation();
    var nowPoint = event.changedTouches[0];
    var moveX = nowPoint.pageX - this.startX;
    var moveY = nowPoint.pageY - this.startY;
    //scrolling now
    if(isNaN(lastScrollX) && isNaN(lastScrollY)) {
      changeScroll(moveX, moveY, this.startX, this.startY); //functions.js
    } else {
      changeScroll(moveX, moveY, lastScrollX, lastScrollY); //functions.js
    }
    //set next coordinates
    lastScrollX = moveX;
    lastScrollY = moveY;
  },

  zoom: function() {
    //change the scale
    if(1 < this.curr_scale) {
      if(scale > 1 && scale < 2) {
        scale += 0.05;
      } else if(scale > 2) {
        scale += 0.08;
      } else {
        scale += 0.02;
      }
    } else {
      if(scale > 1 && scale < 2) {
        scale -= 0.05;
      } else if(scale > 2) {
        scale -= 0.08;
      } else {
        scale -= 0.02;
      }
    }
    //set limits
    if(scale < this.min_zoom) { scale = this.min_zoom }
    if(scale > this.max_zoom) { scale = this.max_zoom }
    //change the scrool step
    if(scale < 1) {
      scrollStep = 30;
    } else if(scale < 2 && scale > 1) {
      scrollStep = 20;
    } else if(scale > 2 && scale < 2.5) {
      scrollStep = 10;
    } else {
      scrollStep = 5;
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
  }

}
