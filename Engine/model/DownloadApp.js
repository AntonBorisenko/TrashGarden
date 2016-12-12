"use strict";

var DownloadApp = {

  imagesMainMenu: [],
  imagesMap: [],
  imagesGameMenu: [],
  imagesShop: [],

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
          loadImages(imgMainMenuForDownload, DownloadApp.imagesMainMenu, number);
      } else if(number == 2) {
          loadImages(imagesForMap, DownloadApp.imagesMap, number);
      }  else if(number == 3) {
          loadImages(imgGameMenuForDownload, DownloadApp.imagesGameMenu, number);
      } else if(number == 4) {
          loadImages(imgForShop, DownloadApp.imagesShop, number);
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
                    "img/Map/tomato.png", "img/Map/cabbage.png"];

var imgGameMenuForDownload = ["img/Game menu/exit_in_menu.png", "img/Game menu/bag.png", "img/Game menu/stock.png",
                              "img/Game menu/shop.png", "img/Game menu/arrow_left.png", "img/Game menu/arrow_right.png",
                              "img/Game menu/bailer.png", "img/Game menu/sprayer.png", "img/Game menu/shovel.png"];

var imgForShop = ["img/Shop/all_for_billets.png", "img/Shop/all_for_garden.png",
                  "img/Shop/fertilizers.png", "img/Shop/seed.png",
                  "img/Shop/exit_in_game.jpg", "img/Shop/fon.png" ];
