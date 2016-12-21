"use strict";

//PROTOTYPE PLANTS
function Plant(id, name, indexWater) {
  this.id = id;
  this.name = name;
  this.status = "small";
  this.sizeX = window.plantSizeX;
  this.sizeY = window.plantSizeY;
  this.water = 10000;
  this.signalToWatering = false;
  this.indexWater = indexWater;
  this.growNow = 0;
  this.drawPlant = function(x, y) {
    //тут в кейсах будут перебираться массивы с картинками для анимации каждого состояния
    switch(this.status) {
      case "small":
        ctx.drawImage(imagesPlantsPapper[0], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "middle":
        ctx.drawImage(imagesPlantsPapper[1], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "green":
        ctx.drawImage(imagesPlantsPapper[2], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "ripe":
        ctx.drawImage(imagesPlantsPapper[3], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "ded":
        ctx.drawImage(imagesPlantsPapper[4], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
    }
    //Draw a drop of water for help
    if(this.signalToWatering && this.status != "ded") {
      ctx.drawImage(imagesMap[11], x+plantSizeX*scale, y, DROP_WATER_SIZE_X*scale, DROP_WATER_SIZE_Y*scale);
    }
  }
}

Plant.prototype.growing = function() {
  this.growNow += View.interval;
  if(this.growNow > 3000 && this.growNow < 6000) {
    this.status = "middle";
  } else if(this.growNow > 6000 && this.growNow < 10000) {
    this.status = "green";
  } else if(this.growNow > 10000) {
    this.status = "ripe";
  }
}

Plant.prototype.drying = function() {
  this.water -= (View.interval/this.indexWater);
  if(this.water < 0 && this.water > -10000) {
    this.signalToWatering = true;
  } else if(this.water < - 10000) {
    this.status = "ded";
  }
}

Plant.prototype.watering = function() {
    this.water += 20000;
    this.signalToWatering = false;
  //drying plant
  this.water = this.water - View.interval;
}

//Prototype POTATOES inherited from prototype plants
function Potatoes() {
  var id = 1;
  var name = "potatoes";
  var indexWater = 2;
  Plant.call(this, id, name, indexWater);
}
Potatoes.prototype = new Plant();
Potatoes.prototype.constructor = Potatoes;


function Tomato() {
  var id = 2;
  var name = "tomato";
  var indexWater = 0.5;
  Plant.call(this, id, name, indexWater);
}
Tomato.prototype = new Plant();
Tomato.prototype.constructor = Tomato;


function Cabbage() {
  var id = 3;
  var name = "cabbage";
  var indexWater = 1;
  Plant.call(this, id, name, indexWater);
}
Cabbage.prototype = new Plant();
Cabbage.prototype.constructor = Cabbage;
