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

/////////////images////////////////////////////
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let roundImg = document.getElementById('cta-img');
roundImg.src = siteContent['cta']['img-src'];
// or, with querySelector and dot notation:
//let roundImg = document.querySelector('#cta-img');
//roundImg.src = 'img/header-img.png';

let midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];
// or,with querySelector and dot.notation:
//let midImg = document.querySelector('#middle-img');
//midImg.setAttribute('src', 'img/mid-page-accent.jpg');

////////nav prepend & append////////////////
let navPrepend = document.createElement('h2');
navPrepend.textContent = 'pre';
navPrepend.style.color = 'green';

let navAppend = document.createElement('h2');
navAppend.textContent = 'post';
navAppend.style.color = 'green';

let navBar = document.querySelector('nav');

navBar.prepend(navPrepend);

navBar.appendChild(navAppend);
//////////////////////////////////////////////

//////////nav bar ///////////////////////////
const navItems = document.querySelectorAll('a');

navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[0].style.color = 'green';

navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[1].style.color = 'green';

navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[2].style.color = 'green';

navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[3].style.color = 'green';

navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[4].style.color = 'green';

navItems[5].textContent = siteContent['nav']['nav-item-6'];
navItems[5].style.color = 'green';


//////////////////////////////////////////////////

//////////// cta section /////////////////////////

const headline = document.querySelector('h1');
headline.textContent = siteContent['cta']['h1'];

const startButton = document.querySelector('button');
startButton.textContent = siteContent['cta']['button'];
//////////////////////////////////////////////////

////////////main content h4s & ps ///////////////
const h4Tags = document.querySelectorAll('h4');

h4Tags[0].textContent = siteContent['main-content']['features-h4'];

h4Tags[1].textContent = siteContent['main-content']['about-h4'];

h4Tags[2].textContent = siteContent['main-content']['services-h4'];

h4Tags[3].textContent = siteContent['main-content']['product-h4'];

h4Tags[4].textContent = siteContent['main-content']['vision-h4'];

const pTags = document.querySelectorAll('p');

pTags[0].textContent = siteContent['main-content']['features-content'];

pTags[1].textContent = siteContent['main-content']['about-content'];

pTags[2].textContent = siteContent['main-content']['services-content'];

pTags[3].textContent = siteContent['main-content']['product-content'];

pTags[4].textContent = siteContent['main-content']['vision-content'];

/////////////////////////////////////////////////

/////////////// contact section ////////////////
h4Tags[5].textContent = siteContent['contact']['contact-h4'];

pTags[5].textContent = siteContent['contact']['address'];

pTags[6].textContent = siteContent['contact']['phone'];

pTags[7].textContent = siteContent['contact']['email'];

/////////////// footer /////////////////////////
pTags[8].textContent = siteContent['footer']['copyright'];









