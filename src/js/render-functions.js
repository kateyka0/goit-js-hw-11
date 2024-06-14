// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';

// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

// let gallery = new SimpleLightbox('.gallery li a');
// gallery.on('show.simplelightbox', function () {
//   // do something…
// });

// gallery.on('error.simplelightbox', function (e) {
//   console.log(e); // some usefull information
// });
// export function showQueryError(error) {
//   console.log(error);
//   iziToast.show({
//     title: '',
//     icon: 'icon-person',
//     color: 'red', // blue, red, green, yellow
//     position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
//     message:
//       'Sorry, there are no images matching your search query. Please try again!',
//   });
// }
// export function renderPhotoList(photos, container) {
//   console.log(photos);
//   const markup = photos.hits
//     .map(photo => {
//       return `<li>
//                 <a href="${photo.largeImageURL}"><img src='${photo.webformatURL}' alt='${photo.tags}'></a>
//                 <div class="content">
//                     <div class="item"><h3>Likes</h3><p>${photo.likes}</p></div>
//                     <div class="item"><h3>Views</h3><p>${photo.views}</p></div>
//                     <div class="item"><h3>Comments</h3><p>${photo.comments}</p></div>
//                     <div class="item"><h3>Downloads</h3><p>${photo.downloads}</p></div>
//                 </div>
//             </li>`;
//     })
//     .join('');
//   container.textContent = '';
//   container.insertAdjacentHTML('beforeend', markup);
//   gallery.refresh();
// }

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function displayImages(images) {
    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const card = createImageCard(image);
        gallery.appendChild(card);
    });
}

function createImageCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    cardInfo.innerHTML = `
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
    `;

    card.appendChild(imageElement);
    card.appendChild(cardInfo);

    return card;
}

export function showMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight'
    });
}