"use strict";

var Map = {

  arrayGardenBeds: [],

  make: function() {
    var gardenBed_0 = new GardenBedBig(0, 100, 100);
    var gardenBed_1 = new GardenBedBig(1, 100, 600);
    Map.arrayGardenBeds.push(gardenBed_0);
    Map.arrayGardenBeds.push(gardenBed_1);
  }

}
