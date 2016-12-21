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
        if(places[i].plant.status != "ded") {
          places[i].plant.growing();
          places[i].plant.drying();
        }
        places[i].plant.drawPlant((places[i].x+scrollX)*scale, (places[i].y+scrollY)*scale);
      } else {
        if(planting) {
          ctx.drawImage(emptyPlace, (places[i].x+scrollX)*scale, (places[i].y+scrollY + 50)*scale, plantSizeX*scale, (plantSizeY-50)*scale);
        }
      }
    }
  }

}


function GardenBedBig(id, x, y) {
  var sizeX = 650;
  var sizeY = 350;
  var places = [{x:50+x, y:0+y, plant: false}, {x:200+x, y:0+y, plant: false}, {x:350+x, y:0+y, plant: false}, {x:500+x, y:0+y, plant: false},
                {x:50+x, y:150+y, plant: false}, {x:200+x, y:150+y, plant: false}, {x:350+x, y:150+y, plant: false}, {x:500+x, y:150+y, plant: false} ];
  GardenBedPrototype.call(this, id, x, y, sizeX, sizeY, places);
}
GardenBedBig.prototype = new GardenBedPrototype();
GardenBedBig.prototype.constuctor = GardenBedBig;
