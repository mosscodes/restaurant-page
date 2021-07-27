import MapIMG from './images/mika-baumeister-nDciGidCdQo-unsplash.jpg'

function loadContact() {
    const tabBox = document.querySelector('#tab-box-container')

    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', 'contact-container')
    contactContainer.setAttribute('class', 'child')
    const contactMessage = document.createElement('div')
    contactMessage.setAttribute('id', 'contact-message')
    const contactImage = document.createElement('img')
    contactImage.src = MapIMG;
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
    tabBox.appendChild(contactContainer);
}

export default loadContact