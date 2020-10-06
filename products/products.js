import { beanies } from '../product-data.js';
import { renderBeanie } from '../product-utils.js';

const ul = document.querySelector('#beanie');

for (let i = 0; i < beanies.length; i++) {
    const beanieBaby = beanies[i];

    const li = renderBeanie(beanieBaby);

    ul.appendChild(li);    
    
}
