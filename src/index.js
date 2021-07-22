import './style.css';

const restaurantHTML = (() => {
    const content = document.querySelector('#content');

    //Header
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'header-container');
    content.appendChild(headerContainer);
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.innerText = "Cairone's Pizzeria";
    headerContainer.appendChild(header);
    const tabContainer = document.createElement('div');
    tabContainer.setAttribute('id', 'tab-container');
    headerContainer.appendChild(tabContainer);

    // Home
    const homeTab = document.createElement('div');
    homeTab.setAttribute('class', 'tab');
    tabContainer.appendChild(homeTab);
    homeTab.innerText = "HOME";

    // Menu
    const menuTab = document.createElement('div');
    menuTab.setAttribute('class', 'tab');
    tabContainer.appendChild(menuTab);
    menuTab.innerText = "MENU";

    // Contact
    const contactTab = document.createElement('div');
    contactTab.setAttribute('class', 'tab');
    tabContainer.appendChild(contactTab);
    contactTab.innerText = "CONTACT";

    // TabBox Container
    const tabBox = document.createElement('div');
    tabBox.setAttribute('id', 'tab-box-container');
    content.appendChild(tabBox);

    // Footer
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footer-container');
    const footerText = document.createElement('div');
    footerText.setAttribute('id', 'footer-text');
    content.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerText.innerText = 'Copyright \u00A9 2021 MossCodes';

    return {
        homeTab,
        menuTab,
        contactTab
    }
})();

const tabHTMLTree = (() => {
    const tabBox = document.querySelector('#tab-box-container');

    // Home

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('class', 'child')
    homeContainer.setAttribute('id', 'home-container');
    const tagline = document.createElement('p');
    tagline.setAttribute('class', 'tagline-top');
    tagline.innerText = 'As my Nonna used to say';
    const tagline2 = document.createElement('p');
    tagline2.innerText = '"Tutti sono i benvenuti nella mia cucina"';
    tagline2.setAttribute('class', 'tagline-middle');
    const homeImage = document.createElement('img');
    homeImage.src = "../src/images/kama-tulkibayeva-BpugFbwxOfw-unsplash.jpg";
    homeImage.setAttribute('id', 'home-image');
    const tagline3 = document.createElement('p');
    tagline3.innerText = 'Everybody is welcome in my kitchen';
    tagline3.setAttribute('class', 'tagline-bottom');
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(tagline2);
    homeContainer.appendChild(homeImage);
    homeContainer.appendChild(tagline3);

    // Default
    tabBox.appendChild(homeContainer)

    // Menu
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
    sandwichImage.src = "../src/images/amy-tran-pTcexK1TB98-unsplash.jpg";
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
    pastaImage.src = "../src/images/nerfee-mirandilla-KxcYYoJZehI-unsplash.jpg";
    pastaImage.setAttribute('id', 'pasta-image');
    italianBox.appendChild(pastaImage)
    const italianMenu = document.createElement('button')
    italianMenu.innerText = "Click for Menu"
    italianMenu.setAttribute('class', 'menu-btn')
    italianBox.appendChild(italianMenu);

    //Contact

    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', 'contact-container')
    contactContainer.setAttribute('class', 'child')
    const contactMessage = document.createElement('div')
    contactMessage.setAttribute('id', 'contact-message')
    const contactImage = document.createElement('img')
    contactImage.src = "../src/images/mika-baumeister-nDciGidCdQo-unsplash.jpg"
    contactImage.setAttribute('id', 'contact-image')
    const address = document.createElement('div');
    address.setAttribute('id', 'address')
    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone')
    contactMessage.innerText = "Contact Us"
    address.innerText = "123 ABC Street, New York, NY"
    phone.innerText = "Phone: (555) 555-5555 \n Fax: (555) 555-5556"
    contactContainer.appendChild(contactMessage);
    contactContainer.appendChild(contactImage);
    contactContainer.appendChild(address);
    contactContainer.appendChild(phone);



    let child;

    function childRemoval() {
        child = document.querySelector('.child');
        tabBox.removeChild(child);
    }

    restaurantHTML.homeTab.addEventListener("click", function () {
        childRemoval();
        tabBox.appendChild(homeContainer);
    });

    restaurantHTML.menuTab.addEventListener("click", function () {
        childRemoval();
        tabBox.appendChild(menuContainer);
    });

    restaurantHTML.contactTab.addEventListener("click", function () {
        childRemoval();
        tabBox.appendChild(contactContainer);
    });
})();