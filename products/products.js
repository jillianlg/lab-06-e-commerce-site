import { seedAndGetBeanie } from '../product-utils.js';
import { renderBeanie } from '../product-utils.js';

const localStorageBeanies = seedAndGetBeanie();

const ul = document.querySelector('#beanie');

for (let i = 0; i < localStorageBeanies.length; i++) {
    const beanieBaby = localStorageBeanies[i];

    const li = renderBeanie(beanieBaby);

    ul.appendChild(li);    
    
}

