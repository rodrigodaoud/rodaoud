'use strict'

function main(){


    var mainScreen = document.querySelector('#main-screen');
    var start;
    var game;

    var gameDiv = document.createElement('div');
    gameDiv.setAttribute('class', 'game-screen');
    mainScreen.appendChild(gameDiv);

    // ------------------ START SCREEN
    var bodyBackground = document.querySelector('body');
    var startScreen;
    var startGameButton;
    var startButtonClick = function(){
        var snd = new Audio('./css/sounds/coins.wav');
        snd.play();
        deleteStartScreen();
        buildGameScreen();
        gameDiv.style.display = 'inline-block';
        bodyBackground.style.background = 'black';
    };

    function buildStartScreen (){
        start = 'start-screen';

        startScreen = document.querySelector('.start-screen');
        startGameButton = document.querySelector('.start-button button');

        // eventListener to startButton
        startGameButton.addEventListener('click', startButtonClick);
    }

    function deleteStartScreen(){
        //remove eventListerner from startButton
        startGameButton.removeEventListener('click', startButtonClick);
        // remove startScreen
        startScreen.remove();
    }

    // ------------------ GAME SCREEN

        
        gameDiv = document.querySelector('.game-screen');

    function buildGameScreen(){
        
        start = 'game';
        game = new Game(mainScreen);

        window.setTimeout(function(){
            deleteGameScreen();
            buildGameOverScreen();
        },2000);
    }

    function deleteGameScreen(){
        game.destroy();
    }

    // ---------------- GAME OVER SCREEN

    var gameOverScreen = document.querySelector('.gameover-screen');
    var playAgainButton = document.querySelector('.playagain-button button');
    function playAgainButtonClick(){
        deleteGameOverScreen();
        buildGameScreen();
    }

    function buildGameOverScreen(){
        start = 'gameOver'
        gameOverScreen.style.display = 'flex';
        //eveneListener to playAgainButton
        playAgainButton.addEventListener('click', playAgainButtonClick);
    }

    function deleteGameOverScreen(){

        //remove eventListener from playAgainButton
        playAgainButton.removeEventListener('click', playAgainButtonClick);
        gameOverScreen.remove();
    }


    buildStartScreen();
}
window.onload = main;