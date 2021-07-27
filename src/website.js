import './style.css';
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector('#content');

function header() {
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
}

function navBar() {
    const tabContainer = document.querySelector('#tab-container')
    
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

    // Event Listeners

    homeTab.addEventListener("click", function () {
        tabBox.removeChild(document.querySelector('.child'));
        loadHome();
    });

    menuTab.addEventListener("click", function () {
        tabBox.removeChild(document.querySelector('.child'));
        loadMenu();
    });

    contactTab.addEventListener("click", function () {
        tabBox.removeChild(document.querySelector('.child'));
        loadContact();
    });

    loadHome();
}

function footer() {
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footer-container');
    const footerText = document.createElement('div');
    footerText.setAttribute('id', 'footer-text');
    content.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerText.innerText = 'Copyright \u00A9 2021 MossCodes'; 
}

function loadWebsite() {
    const content = document.querySelector('#content');
    header();
    navBar();
    footer();
}

export default loadWebsite;