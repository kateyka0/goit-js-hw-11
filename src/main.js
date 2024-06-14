// import { pixabayRequest } from './js/pixabay-api.js';

// const fetchPhotoForm = document.querySelector('form');
// const photoList = document.querySelector('.photo-list');

// let searchParams = new URLSearchParams({
//   key: '44332544-4246296cfd54d81c9e369dca1',
//   q: 'sport',
//   lang: 'en',
//   id: '',
//   image_type: 'all',
//   orientation: 'horizontal',
// });

// fetchPhotoForm.addEventListener('submit', e => {
//   console.log(e.target);
//   e.preventDefault();
//   pixabayRequest(searchParams, photoList);
// });

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, displayImages, showMessage } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const keywordInput = document.querySelector('.keyword');
        const keyword = keywordInput.value.trim();

        if (keyword === '') {
            showMessage('Please enter a search keyword');
            return;
        }

        clearGallery();

        try {
            const images = await fetchImages(keyword);
            if (images.length === 0) {
                showMessage('Sorry, there are no images matching your search query. Please try again!');
            } else {
                displayImages(images);
            }
        } catch (error) {
            console.error('Error searching images:', error);
            showMessage('An error occurred while searching for images. Please try again later.');
        }
    });
});