"use strict";

//PROTOTYPE PLANTS
function Plant(id, name) {
  this.id = id;
  this.name = name;
  this.status = "ripe";
  this.sizeX = window.plantSizeX;
  this.sizeY = window.plantSizeY;
  this.drawPlant = function(x, y) {
    //тут в кейсах будут перебираться массивы с картинками для анимации каждого состояния
    switch(this.status) {
      case "small":
        ctx.drawImage(imagesMap[7], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "middle":
        ctx.drawImage(imagesMap[8], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "green":
        ctx.drawImage(imagesMap[9], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
      case "ripe":
        ctx.drawImage(imagesMap[10], x, y, plantSizeX*scale, plantSizeY*scale);
        break;
    }
  }
}


//Prototype POTATOES inherited from prototype plants
function Potatoes() {
  var id = 1;
  var name = "potatoes";
  Plant.call(this, id, name);
}
Potatoes.prototype = new Plant();
Potatoes.prototype.constructor = Potatoes;


function Tomato() {
  var id = 2;
  var name = "tomato";
  Plant.call(this, id, name);
}
Tomato.prototype = new Plant();
Tomato.prototype.constructor = Tomato;


function Cabbage() {
  var id = 3;
  var name = "cabbage";
  Plant.call(this, id, name);
}
Cabbage.prototype = new Plant();
Cabbage.prototype.constructor = Cabbage;
