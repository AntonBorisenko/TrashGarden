"use strict";

function GardenBedPrototype(id, x, y, sizeX, sizeY, places) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.places = places;
  this.drawPlaces = function() {
    var places = this.places;
    var emptyPlace = imagesMap[6];
    for(var i = 0; i < places.length; i++) {
      if(places[i].plant) {
        places[i].plant.drawPlant((places[i].x+scrollX)*scale, (places[i].y+scrollY)*scale);
      } else {
        ctx.drawImage(imagesPlantsPapper[3], (places[i].x+scrollX)*scale, (places[i].y+scrollY)*scale, plantSizeX*scale, plantSizeY*scale);
      }
    }
  }

}


function GardenBedBig(id, x, y) {
  var sizeX = 650;
  var sizeY = 350;
  var places = [{x:50+x, y:50+y, plant: false}, {x:200+x, y:50+y, plant: new Potatoes()}, {x:350+x, y:50+y, plant: false}, {x:500+x, y:50+y, plant: false},
                {x:50+x, y:200+y, plant: false}, {x:200+x, y:200+y, plant: false}, {x:350+x, y:200+y, plant: false}, {x:500+x, y:200+y, plant: false} ];
  GardenBedPrototype.call(this, id, x, y, sizeX, sizeY, places);
}
GardenBedBig.prototype = new GardenBedPrototype();
GardenBedBig.prototype.constuctor = GardenBedBig;
