'use strict'

function Game(mainScreen){
    var self = this;

    self.player;
    self.mainScreen = mainScreen;
    self.size = 11;
    self.windowHeight = 800;
    self.windowWidth = 800;
    self.gameDiv;

    self.buildGrid();
    self.init();
}

Game.prototype.init = function(){
    var self = this;

    var middle = Math.floor(self.size / 2);
    self.player = new Player(middle, 0, self.gameDiv)
    

    $(document).keypress(function(e){

        
        if(e.keyCode === 115){
            
            self.player.clear();
            self.player.updateTo('down');
            self.player.draw();
        }
        else if (e.keyCode === 97){
            
            self.player.clear();
            self.player.updateTo('left');
            self.player.draw();
        }
        else if (e.keyCode === 100){
            
            self.player.clear();
            self.player.updateTo('right');
            self.player.draw();
        }
        else if (e.keyCode === 119){

            self.player.clear();
            self.player.updateTo('up');
            self.player.draw();
        }
      });
    
}




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

    gameRow = document.querySelectorAll('.game-row');
    gameRow[0].style.border = '1px solid #add8e6';
    gameRow[0].style.borderRadius = '20px'
    gameRow[self.size -1].style.border = '1px solid #bf0000';
    gameRow[self.size -1].style.borderRadius = '20px'
}
