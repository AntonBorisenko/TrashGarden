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

//Functions for zoom and scrolling

/*Пишем функцию, которая определяет расстояние меж пальцами*/
function distance (p1, p2) {
  return (Math.sqrt(Math.pow((p1.clientX - p2.clientX), 2) + Math.pow((p1.clientY - p2.clientY), 2)));
}

//for mousemove and touchmove(scrolling)
function changeScroll(moveX, moveY, x, y) {
  if(moveX < x && moveY > y) {
    scrollX -= scrollStep;
    scrollY += scrollStep;
  } else if(moveX > x && moveY > y) {
    scrollX += scrollStep;
    scrollY += scrollStep;
  } else if(moveX > x && moveY < y) {
    scrollX += scrollStep;
    scrollY -= scrollStep;
  } else if(moveX < x && moveY < y) {
    scrollX -= scrollStep;
    scrollY -= scrollStep;
  } else if(moveX < x) {
    scrollX -= scrollStep;
  } else if(moveX > x) {
    scrollX += scrollStep;
  } else if(moveY < y) {
    scrollY -= scrollStep;
  } else if(moveY > y) {
    scrollY += scrollStep;
  }

  mapWidthNow = mapWidth*scale;
  mapHeightNow = mapHeight*scale;
  var scrollRightLimit = -(mapWidthNow - canvas.width)/scale;
  var scrollDownLimit = -(mapHeightNow - canvas.height)/scale;

  //set limits
  if(scrollX > scrollLeftLimit) {
    scrollX = scrollLeftLimit;
  }
  if(scrollY > scrollTopLimit) {
    scrollY = scrollTopLimit;
  }
  if(scrollX < scrollRightLimit) {
    scrollX = scrollRightLimit;
  }
  if(scrollY < scrollDownLimit) {
    scrollY = scrollDownLimit;
  }

}
