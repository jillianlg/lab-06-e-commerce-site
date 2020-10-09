const form = document.querySelector('form');
// import { PRODUCTS } from '../constants.js';
import { addBeanie } from '../product-utils.js';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const year = data.get('year');
    const price = data.get('price');
    const image = data.get('image');
    const description = data.get('description');

    const newBeanie = {
        id: id,
        name: name,
        year: year,
        price: Number(price),
        image: image,
        description: description,
    };

    addBeanie(newBeanie);

    // form.rest();
});