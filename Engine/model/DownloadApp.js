"use strict";

var DownloadApp = {

  //Downloading images
  downloading: function() {

    //function for loading images
    function loadImages(arrayPictures, arrayForPush, number) {
      var i = 0;
      load();
      function load() {
        var img = new Image();
        img.src =  arrayPictures[i];
        img.onload = function() {
          arrayForPush.push(img);
          i++;
          if(i == arrayPictures.length) {
            //responce
            number++;
            createArraysWhisImages(number);
          } else {
            load();
          }
        }
      }
    }

    //create arrays with images
    function createArraysWhisImages(number) {
      if(number == 1) {
          loadImages(imgMainMenuForDownload, imagesMainMenu, number);
      } else if(number == 2) {
          loadImages(imagesForMap, imagesMap, number);
      }  else if(number == 3) {
          loadImages(imgGameMenuForDownload, imagesGameMenu, number);
      } else if(number == 4) {
          loadImages(imgForShop, imagesShop, number);
      } else if(number == 5) {
          loadImages(imgForBag, imagesBag, number);
      } else if(number == 6) {
          loadImages(imgPlantsPapper, imagesPlantsPapper, number);
      } else {
        //responce on the task
        Model.response("download complete");
      }
    }

    //start create arrays with images
    createArraysWhisImages(1);

  }

}


var imgMainMenuForDownload = ["img/Main menu/on_garden_bed.png","img/Main menu/help.png", "img/Main menu/new_game.png",
                              "img/Main menu/exit.png", "img/Main menu/main_fone.png"];

var imagesForMap = ["img/Map/fone.jpg", "img/Map/grassTexture.jpg", "img/Map/house.png", "img/Map/gardenBedTest.jpg",
                    "img/Map/tomato.png", "img/Map/cabbage.png", "img/Map/emptyPlace.jpg", "img/Map/small.png",
                    "img/Map/middle.png", "img/Map/green.png", "img/Map/Patrick_Star.svg" ];

var imgGameMenuForDownload = ["img/Game menu/exit_in_menu.png", "img/Game menu/bag.png", "img/Game menu/stock.png",
                              "img/Game menu/shop.png", "img/Game menu/arrow_left.png", "img/Game menu/arrow_right.png",
                              "img/Game menu/bailer.png", "img/Game menu/sprayer.png", "img/Game menu/shovel.png",
                              "img/Game menu/bag_fone.png" ];

var imgForShop = ["img/Shop/all_for_billets.png", "img/Shop/all_for_garden.png",
                  "img/Shop/fertilizers.png", "img/Shop/seed.png",
                  "img/Shop/exit_in_game.jpg", "img/Shop/fon.png" ];

var imgForBag = ["img/Seeds/potatoes.png", "img/Seeds/tomato.png",
                 "img/Seeds/cabbage.png"];


var imgPlantsPapper = ["img/Plants/papper/small.png", "img/Plants/papper/middle.png", "img/Plants/papper/green.png",
                       "img/Plants/papper/ripe.png", "img/Plants/papper/ded.png"];
