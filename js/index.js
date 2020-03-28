const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let roundImg = document.querySelector('#cta-img');
roundImg.src = 'img/header-img.png';

let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

const navItem1 = document.querySelectorAll('a');
navItem1[0].textContent = "Services";
navItem1[0].style.color = 'green';

const navItem2 = document.querySelectorAll('a');
navItem2[1].textContent = "Product";
navItem1[1].style.color = 'green';

const navItem3 = document.querySelectorAll('a');
navItem3[2].textContent = "Vision";
navItem1[2].style.color = 'green';

const navItem4 = document.querySelectorAll('a');
navItem4[3].textContent = "Features";
navItem1[3].style.color = 'green';

const navItem5 = document.querySelectorAll('a');
navItem5[4].textContent = "About";
navItem1[4].style.color = 'green';

const navItem6 = document.querySelectorAll('a');
navItem6[5].textContent = "Contact";
navItem1[5].style.color = 'green';

const headline = document.querySelector('h1');
headline.textContent = "Dom Is Awesome";

const startButton = document.querySelector('button');
startButton.textContent = "Get Started";

const features = document.querySelectorAll('h4');
features[0].textContent = 'Features';

const featuresP = document.querySelectorAll('p');
featuresP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const about = document.querySelectorAll('h4');
about[1].textContent = 'About';

const aboutP = document.querySelectorAll('p');
aboutP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const services = document.querySelectorAll('h4');
services[2].textContent = 'Services';

const servicesP = document.querySelectorAll('p');
servicesP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const product = document.querySelectorAll('h4');
product[3].textContent = 'Product';

const productP = document.querySelectorAll('p');
productP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const vision = document.querySelectorAll('h4');
vision[4].textContent = 'Vision';

const visionP = document.querySelectorAll('p');
visionP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contact = document.querySelectorAll('h4');
contact[5].textContent = 'Contact';

const addressP = document.querySelectorAll('p');
addressP[5].textContent = '123 Way 456 Street Somewhere, USA';

const phoneNumberP = document.querySelectorAll('p');
phoneNumberP[6].textContent = '1 (888) 888-8888';

const emailP = document.querySelectorAll('p');
emailP[7].textContent = 'sales@greatidea.io';

const copyrightP = document.querySelectorAll('p');
copyrightP[8].textContent = 'Copyright Great Idea! 2018';








