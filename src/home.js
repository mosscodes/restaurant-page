import HomeIMG from './images/kama-tulkibayeva-BpugFbwxOfw-unsplash.jpg'

function loadHome() {
    const tabBox = document.querySelector('#tab-box-container')

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
    homeImage.src = HomeIMG;
    homeImage.setAttribute('id', 'home-image');
    const tagline3 = document.createElement('p');
    tagline3.innerText = 'Everybody is welcome in my kitchen';
    tagline3.setAttribute('class', 'tagline-bottom');
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(tagline2);
    homeContainer.appendChild(homeImage);
    homeContainer.appendChild(tagline3);
    tabBox.appendChild(homeContainer)
}

export default loadHome;