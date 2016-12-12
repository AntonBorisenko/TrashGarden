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
        locationNow = "game";
        initialization = true;
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
    OnTrashGarden.clickOnTheTtem();
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
    //scroll and zoom
    var touchMove = canvas.addEventListener('touchmove', function(event) {
      Touch.touchMove(event);
    }, false);
    canvas.addEventListener('touchend', function(event, touchMove) {
      Touch.touchEnd(event, touchMove);
    }, false);
  },

  //ЭТО ДЛЯ БРАУЗЕРА!!!В НОНЕЧНОЙ ВЕРСИИ ДЛЯ МОБИЛ - УДАЛИТЬ!
  scrollMap: function() {
    var status = false;
    var x, y, el, canvasX, canvasY;
    canvas.addEventListener('mousedown', function(event) {
      el = document.getElementById('canvas');
      canvasX = findPosX(el); //functions.js
      canvasY = findPosY(el); //functions.js
      //We get the coordinates of the click in the canvas
      x = event.pageX - canvasX;
      y = event.pageY - canvasY;
      status = true;
    }, false);

    var handleMove = canvas.addEventListener('mousemove', function(event) {
      if(status) {
        //We get the coordinates mouse in the canvas(click)
        var moveX = event.pageX - canvasX;
        var moveY = event.pageY - canvasY;
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
      document.removeEventListener('mousemove', handleMove, true);
      status = false;
      lastScrollX = NaN;
      lastScrollY = NaN;
    }, false);

  },

  mainMenuClick: function(item) {
    MainMenu.clickOnTheItem(item);
  },

  gameMenuClick: function() {
    //пока только выход из игры
    locationNow = "main menu";
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
