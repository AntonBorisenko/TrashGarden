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
        Model.createEvent();
        Controller.complete(message);
      break;

      case "start game":
        locationNow = "game";
        //document.body.style.overflow = "";
        window.canvas.width = document.documentElement.clientWidth;
        window.canvas.height = document.documentElement.clientHeight;
        Model.createKeyPressEvent();
      break;
    }

  },

  initialization: function(canvas) {
    Global.initialization(canvas);
  },

  //Downloading images
  download: function() {
    ctx.font = DOWNLOAD_APP_TEXT;
    ctx.fillText("Подождите, идёт загрузка приложения", DOWNLOAD_APP_X, DOWNLOAD_APP_Y);
    DownloadApp.downloading();
  },

  createMainMenu: function() {
    MainMenu.make();
  },

  //hanging listener
  createEvent: function() {
    canvas.onclick = function(event) {
      Click.onclick(event);
    }
  },

  createKeyPressEvent: function() {
    window.onkeypress = function(event) {
      if(event.keyCode == 37) {
        scrollX += scrollStep; //left
      } else if(event.keyCode == 38) {
        scrollY += scrollStep; //up
      } else if(event.keyCode == 39) {
        scrollX -= scrollStep; //right
      } else if(event.keyCode == 40) {
        scrollY -= scrollStep; //down
      } else if(event.keyCode == 112) {
        scale = scale + 0.1; //масштаб + сцуко
      } else if(event.keyCode == 113) {
        scale = scale - 0.1; //масштаб - сцуко
      }
    }
  },

  mainMenuClick: function(item) {
    MainMenu.clickOnTheItem(item);
  },

  gameMenuClick: function() {
    //пока только выход из игры
    locationNow = "main menu";
    document.getElementById('menu').style.display = "none";
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
