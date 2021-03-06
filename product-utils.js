
import { PRODUCTS } from './constants.js';
import { beanies as hardCodedBeanies } from './product-data.js';

export const CARTDATA = 'CARTDATA';


// findById Function
export function findById(someArray, someId) {

    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        
        if (item.id === someId) {
            return item;
        }
    }
}

// renderBeanie on Product index.html function
export function renderBeanie(beanies) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const year = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const description = document.createElement('div');
    const button = document.createElement('button');
    
    li.classList.add('beanie');

    name.classList.add('name');
    name.textContent = beanies.name;
    li.appendChild(name);

    year.classList.add('year');
    year.textContent = beanies.year;
    li.appendChild(year);
    
    price.classList.add('price');
    price.textContent = `${beanies.price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    li.appendChild(price);
 
    image.classList.add('image');
    image.src = `../assets/${beanies.image}`;
    image.alt = beanies.name;
    li.appendChild(image);

    description.classList.add('description');
    description.textContent = beanies.description;
    li.appendChild(description);

// button listener for renderBeanie function
    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
        const shoppingCart = getFromLocalStorage(CARTDATA) || [];
        const itemInCart = findById(shoppingCart, beanies.id);
        
        if (itemInCart === undefined) {
            
            const newCartItem = {
                id: beanies.id,
                quantity: 1,
            };
            
            shoppingCart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }
        setInLocalStorage(CARTDATA, shoppingCart);
        
    });


    li.appendChild(button);

    return li;
}

// GET localStorage function
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

// SET localStorage function
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

// Add original product data to localStorage and return product data Function
export function seedAndGetBeanie() {

    let localStorageBeanies = JSON.parse(localStorage.getItem(PRODUCTS));
    
    if (!localStorageBeanies) {
        const stringyBeanies = JSON.stringify(hardCodedBeanies);
    
        localStorage.setItem(PRODUCTS, stringyBeanies);
        localStorageBeanies = hardCodedBeanies;
    }

    return localStorageBeanies;
}

// Add new products to localStorage Function
export function addBeanie(newBeanie) {
    const localStorageBeanies = seedAndGetBeanie();

    localStorageBeanies.push(newBeanie);

    const stringyLocalBeanies = JSON.stringify(localStorageBeanies);
    localStorage.setItem(PRODUCTS, stringyLocalBeanies);
}