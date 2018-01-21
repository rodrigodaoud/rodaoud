'use strict'

function Player(mainScreen){
    var self = this;

    self.direction = null;

    self.mapArray = document.querySelectorAll('.game-column');
    self.mapArray[65].style.background = ('blue');
    self.mapArray[55].style.background = ('red');
    self.mapArray[60].style.background = ('yellow');
    self.mapArray[60].style.borderRadius = ('40px');

    self.playerOne = self.mapArray[60];
    self.playerTwo = self.mapArray[65];

Player.prototype.setDirection = function(direction){
    var self = this;

    self.direction = direction;

}

Player.prototype.update = function(){
    var self = this;

    // switch(self.direction){
    //     case 'E':
    //     self.x += 10;

    // }
}


}