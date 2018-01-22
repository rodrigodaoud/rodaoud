'use strict'

function Player(x, y, containerElement){
    var self = this;
    self.x = x;
    self.y = y;
    self.containerElement = containerElement;

    self.size = 21;



    self.init();
}

Player.prototype.init = function () {
    var self = this;

    self.draw();

}

Player.prototype.draw = function() {

    var self = this;

    var cell = self.containerElement.children[self.y].children[self.x];

    cell.style.background = "url('./css/img/chicken.png') no-repeat";
    cell.style.backgroundSize = '100% 100%';

    
}

Player.prototype.updateTo = function(direction) {
    var self = this;

    switch (direction){
        case 'up':
            self.y -= 1;
            break;
        case 'down':
            self.y += 1;
            break;
        case 'right':
            self.x += 1;
            break;
        case 'left':
            self.x -= 1;
            break;   
    }

    if (self.x > self.size -1) {
        self.x = self.size -1;
      }
  
      if (self.x < 0) {
        self.x = 0;
      }
  
      if (self.y > self.size -1) {
        self.y = self.size - 1;
      }
  
      if (self.y < 0) {
        self.y = 0;
      }
  

}



Player.prototype.clear = function(){
    var self = this;
    
    var cell = self.containerElement.children[self.y].children[self.x];

    cell.style.background = 'transparent';
}



