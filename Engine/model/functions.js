//with the functions of the file

//FUNCTIONS FOR "Click.js and Touch.js"

//findPosX(for canvas)
function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (1) {
            curleft+=obj.offsetLeft;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.x) {
        curleft+=obj.x;
    }
    return curleft;
}

//findPosY(for canvas)
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (1) {
            curtop+=obj.offsetTop;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.y) {
        curtop+=obj.y;
    }
    return curtop;
}

//functions for game menu
function Tool(img, objName) {
  this.img = img;
  this.objName = objName;
}

function CreateObject(x, y, sizeX, sizeY, img, objName) {
  this.x = x;
  this.y = y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.img = img;
  this.objName = objName;
}

function CreateSeed(img, id, count) {
  this.img = img;
  this.id = id;
  this.count = count;
}

//Functions for zoom and scrolling

function distance (p1, p2) {
  return (Math.sqrt(Math.pow((p1.clientX - p2.clientX), 2) + Math.pow((p1.clientY - p2.clientY), 2)));
}

function zoom() {
  //change the scale
  if(1 < Touch.curr_scale) {
    if(scale >= 1 && scale < 2) {
      scale += 0.05;
    } else if(scale >= 2) {
      scale += 0.08;
    } else {
      scale += 0.02;
    }
  } else {
    if(scale >= 1 && scale < 2) {
      scale -= 0.05;
    } else if(scale >= 2) {
      scale -= 0.08;
    } else {
      scale -= 0.02;
    }
  }
  //set limits
  if(scale < Touch.min_zoom) { scale = Touch.min_zoom }
  if(scale > Touch.max_zoom) { scale = Touch.max_zoom }
  setLimits();
}

//for mousemove and touchmove(scrolling)
function changeScroll(moveX, moveY, x, y) {
  //We interrupt scrolling
  if(smoothScroll !== false) {
    clearInterval(smoothScroll);
  }
  var differenceX = moveX - x;
  var differenceY = moveY - y;
  scrollX += differenceX;
  scrollY += differenceY;
  setLimits();
}

function scrollingJumps(event, startX, startY, timeStart) {
  var timeEnd  = new Date();
  var nowX = event.changedTouches[0].pageX;
  var nowY = event.changedTouches[0].pageY;
  var xAbs = Math.abs(startX - nowX);
  var yAbs = Math.abs(startY - nowY);
  var differenceTime = timeEnd.getTime() - timeStart.getTime();
  if ((xAbs > 20 || yAbs > 20) && (differenceTime < 200)) {
    var differenceX = (nowX - startX) * 2 / scale;
    var differenceY = (nowY - startY) * 2 / scale;
    if(differenceTime < 100) {
      differenceX *= 1.5;
      differenceY *= 1.5;
    }
    //ПРОБУЕМ СДЕЛАТЬ ГЛАДКИЙ СКРОЛЛ
    var scrollCount = 20;
    var intervalPxX;
    var intervalPxY;
    var timeInterval = 50;
    var scrollCountStatus = 0;

    if(differenceX < 100 && differenceY < 100) {
      scrollCount = 10;
    } else if((differenceX > 100 && differenceX < 300) || (differenceY > 100 && differenceY < 300)){
      scrollCount = 15;
    } else {
      scrollCount = 20;
    }
    intervalPxX = differenceX / scrollCount;
    intervalPxY = differenceY / scrollCount;

    //We interrupt scrolling
    if(smoothScroll !== false) {
      clearInterval(smoothScroll);
    }

    smoothScroll = setInterval(function() {
       scrollX += intervalPxX;
       scrollY += intervalPxY;
       scrollCountStatus++;
       setLimits();
       if(scrollCountStatus >= scrollCount) {
         clearInterval(smoothScroll);
         smoothScroll = false;
       }
    }, timeInterval);

  }
}

function setLimits() {
  mapWidthNow = mapWidth*scale;
  mapHeightNow = mapHeight*scale;
  var scrollRightLimit = -(mapWidthNow - canvas.width)/scale;
  var scrollDownLimit = -(mapHeightNow - canvas.height)/scale;
  //set limits
  if(scrollX > scrollLeftLimit) { scrollX = scrollLeftLimit; }
  if(scrollY > scrollTopLimit) { scrollY = scrollTopLimit; }
  if(scrollX < scrollRightLimit) { scrollX = scrollRightLimit; }
  if(scrollY < scrollDownLimit) { scrollY = scrollDownLimit; }
}
