const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true;

let count = 5;
const apiKey = 'API_KEY';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

const setAttributes = (el, attr) => {
  for (const key in attr) {
    el.setAttribute(kay, attr[key]);
  }
}

const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach(photo => {
    // Link 
    const item = document.createElement('a');
    // item.setAttribute('href', photo.link.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.link.html,
      target: '_blank'
    });

    // Image 
    const image = document.createElement('img');
    // image.setAttribute('src', photo.urls.regular);
    // image.setAttribute('alt', photo.alt_description);
    // image.setAttribute('title', photo.alt_description);
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    img.addEventListener('load')

    // Adding Image and Link to Image Container 
    item.appendChild(image);
    imageContainer.appendChild(item);
  })
}

const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();

  } catch (err) {

  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
})

getPhotos();