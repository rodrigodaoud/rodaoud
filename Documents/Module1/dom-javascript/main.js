'use strict'

function createCard() {
    var card = document.createElement('div');
    
    var title = document.createElement('h3');
    title.innerText = 'Card';
    card.appendChild(title);

    var button = document.createElement('button');
    button.innerText = 'Button';
    button.setAttribute('disabled', 'disabled');
    button.classList.add('foo');
    card.appendChild(button);
    
    
    return card;
}

var myCard = createCard();
document.body.appendChild(myCard);