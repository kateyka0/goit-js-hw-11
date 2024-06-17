const refs = {
imageForm: document.querySelector('.form'),
imageInput: document.querySelector('.input'),
submitButton: document.querySelector('.btn'),
imageList: document.querySelector('.images-list'),
}

export function getImages(request) {
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';
const PARAMS = new URLSearchParams({
        key: '44332544-4246296cfd54d81c9e369dca1',
        q:  request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 30,
    });

const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
console.log(url);

const options = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content - Type': 'application/json',

            'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': '99',
            'X-RateLimit-Reset': '0.6',
    },
}

return fetch(url)
.then(res => {
if (res.ok) {
return res.json();
} else {
throw new Error(res.status);
}
});
}