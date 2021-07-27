import Sandwich from './images/amy-tran-pTcexK1TB98-unsplash.jpg'
import Pasta from './images/nerfee-mirandilla-KxcYYoJZehI-unsplash.jpg'


function loadMenu() {
    const tabBox = document.querySelector('#tab-box-container');

        //Container
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'child');
    menuContainer.setAttribute('id', 'menu-container');
    const pizzaBox = document.createElement('div');
        // pizza
    pizzaBox.setAttribute('id', 'pizza-box');
    menuContainer.appendChild(pizzaBox);
    const pizzaText = document.createElement('p');
    pizzaText.innerText = "Pizza & Sandwiches"
    pizzaBox.appendChild(pizzaText);
    const sandwichImage = document.createElement('img');
    sandwichImage.src = Sandwich;
    sandwichImage.setAttribute('id', 'sandwich-image')
    pizzaBox.appendChild(sandwichImage)
    const pizzaMenu = document.createElement('button');
    pizzaMenu.innerText = "Click for Menu"
    pizzaMenu.setAttribute('class', 'menu-btn')
    pizzaBox.appendChild(pizzaMenu);
        // div
    const divider = document.createElement('div');
    divider.setAttribute('id', 'divider')
    menuContainer.appendChild(divider)
        // italian
    const italianBox = document.createElement('div');
    italianBox.setAttribute('id', 'italian-box');
    menuContainer.appendChild(italianBox);
    const italianText = document.createElement('p')
    italianText.innerText = "Entrees & Sides"
    italianBox.appendChild(italianText);
    const pastaImage = document.createElement('img');
    pastaImage.src = Pasta;
    pastaImage.setAttribute('id', 'pasta-image');
    italianBox.appendChild(pastaImage)
    const italianMenu = document.createElement('button')
    italianMenu.innerText = "Click for Menu"
    italianMenu.setAttribute('class', 'menu-btn')
    italianBox.appendChild(italianMenu);

    tabBox.appendChild(menuContainer)
}

export default loadMenu;