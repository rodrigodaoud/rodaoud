'use strict'

function Game(mainScreen){
    var self = this;

    var player;
    self.mainScreen = mainScreen;
    self.size = 21;
    self.windowHeight = 800;
    self.windowWidth = 800;
    self.gameDiv;

    self.buildGrid();

    player = new Player(10, 10);


}

Game.prototype.init = function(){
    var self = this;
    var x = 1; 
    var y = 1;

    self.handleKeyDown = function(event){
        
        var key = event.key.toLowerCase();

        switch (key) {
            case 'a':
                player.setDirection('E');
                break;
            case 's':
                player.setDirection('S');
                break;
            case 'w':
                player.setDirection('N');
                break;
            case 'd':
                player.setDirection('W');
                break;
        }

    }

}

    function doFrame(){
        player.update();
    }

    document.addEventListener('keydown', self.handleKeyDown);


Game.prototype.destroy = function(){
    var self = this;

    self.gameDiv.remove();
}

Game.prototype.buildGrid = function() {
    var self = this;

    self.gameDiv = document.createElement('div');
    self.gameDiv.classList.add('game-screen');
    self.gameDiv.style.display = 'inline-block';
    self.mainScreen.appendChild(self.gameDiv); 
    
    for (var i = 0; i < self.size; i++){
        var gameRow = document.createElement('div');
        gameRow.classList.add('game-row');
        gameRow.style.height = self.windowHeight / self.size + 'px';
        self.gameDiv.appendChild(gameRow);

        for (var j = 0; j < self.size; j++){
            var gameColumn = document.createElement('div');
            gameColumn.classList.add('game-column');
            gameColumn.style.width = self.windowWidth / self.size + 'px';
            gameRow.appendChild(gameColumn);
        }
    }
}
