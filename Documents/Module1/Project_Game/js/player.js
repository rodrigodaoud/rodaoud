'use strict'

function Player(x, y){
    var self = this;

    self.x = x;
    self.y = y;
    self.direction = null;

}

Player.prototype.setDirection = function(direction){
    var self = this;
    self.direction = direction;
}

Player.prototype.update = function(direction){
    var self = this;

    switch(self.direction){
        case 'E':
            self.x -= 1;
            break;
        case 'S':
            self.y += 1;
            break;
        case 'W':
            self.x += 1;
            break;
        case 'N':
            self.y -= 1;
            break;

    }

    console.log(self.x, self.y);
}



