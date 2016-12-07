"use strict";

var Controller = {

  //Download an application
  start: function(canvas) {
    Model.initialization(canvas); //initialization global variables, proportions, constants
    Model.download(); //download all images for game
  },

  //A function of receiving responce
  complete: function(message) {

    switch(message) {
      case "download complete":
        Model.createMainMenu(); //creating main menu
        break;

      case "main menu complete":
        View.startGame();
        break;
    }

  }

}
