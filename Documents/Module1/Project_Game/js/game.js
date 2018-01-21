'use strict'

function Game(mainScreen){
    var self = this;

    self.mainScreen = mainScreen;

    self.size = 11;
    self.windowHeight = 800;
    self.windowWidth = 800;

    var gameDiv = document.querySelector('.game-screen');
    console.log(gameDiv);
    
    for (var i = 0; i < self.size; i++){
        var gameRow = document.createElement('div');
        gameRow.setAttribute('class', 'game-row');
        gameRow.style.height = self.windowHeight / self.size + 'px';
        gameDiv.appendChild(gameRow);

        for (var j = 0; j < self.size; j++){
            var gameColumn = document.createElement('div');
            gameColumn.setAttribute('class', 'game-column');
            gameColumn.style.width = self.windowWidth / self.size + 'px';
            gameRow.appendChild(gameColumn);
        }
    }

    self.palyer = new Player(gameDiv);
    

Game.prototype.destroy = function(){
    var self = this;

    gameDiv.remove();
}

}