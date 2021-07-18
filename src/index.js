import './style.css';

const restaurantHTML = (() => {
    const content = document.querySelector('#content');

    //Header
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'header-container');
    content.appendChild(headerContainer)

    const header = document.createElement('div')
    header.setAttribute('id', 'header');
    header.innerText = "Cairone's Pizzeria";
    headerContainer.appendChild(header);


    //Background
    const background = document.createElement('div')
    background.setAttribute('id', 'pizza-background');
    content.appendChild(background);

    // Menu


    // Contact


    // Footer
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footer-container');
    const footerText = document.createElement('div');
    footerText.setAttribute('id', 'footer-text')
    content.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerText.innerText = 'Copyright MossCodes';

})();