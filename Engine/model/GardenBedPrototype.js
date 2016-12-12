"use strict";

function GardenBedPrototype(id, x, y, sizeX, sizeY, placesCount, places) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.placesCount = placesCount;
  this.places = places;
}

function GardenBedBig(id, x, y) {
  var sizeX = 650;
  var sizeY = 350;
  var placesCount = 8
  var places = [{x:50+x, y:50+y, plant: null}, {x:200+x, y:50+y, plant: null}, {x:350+x, y:50+y, plant: null}, {x:500+x, y:50+y, plant: null},
                {x:50+x, y:200+y, plant: null}, {x:200+x, y:200+y, plant: null}, {x:350+x, y:200+y, plant: null}, {x:500+x, y:200+y, plant: null} ];
  GardenBedPrototype.call(this, id, x, y, sizeX, sizeY, placesCount, places);
}
GardenBedBig.prototype = new GardenBedPrototype();
GardenBedBig.prototype.constuctor = GardenBedBig;
