let page = 1;

const photoContainer = document.querySelector('.photo-container');

async function fetchPhotos() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=dsEFiW4EqOzq4zel4BF_wQx9zqbzTCyQd0juWfJ-_0c`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Ошибка при загрузке фотографий:', error);
    return [];
  }
}
    
async function loadMorePhotos() {
  const photos = await fetchPhotos();
  if(photos.length > 0) {
    photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo');
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      photoElement.appendChild(img);
      photoContainer.appendChild(photoElement);
    });
    page++;
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});

loadMorePhotos();