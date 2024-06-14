
// import { renderPhotoList, showQueryError } from './render-functions';

// export function pixabayRequest(searchParams, container) {
//   fetch(`https://pixabay.com/api/?${searchParams}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(photos => renderPhotoList(photos, container))
//     .catch(error => showQueryError(error));
// }

const API_KEY = '44332544-4246296cfd54d81c9e369dca1'; // Замініть 'YOUR_API_KEY' на свій ключ доступу

export async function fetchImages(keyword) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(keyword)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}