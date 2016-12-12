"use strict";

//PROTOTYPE PLANTS
function Plant(id, name) {
  this.id = id;
  this.name = name;
  this.status = "small";
  this.sizeX = window.plantSizeX;
  this.sizeY = window.plantSizeY;
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
