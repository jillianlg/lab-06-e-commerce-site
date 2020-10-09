import { cartTotal, renderTableRow } from '../cart/cart-utils.js';
import { CARTDATA, seedAndGetBeanie, getFromLocalStorage } from '../product-utils.js';


const table = document.querySelector('tbody');
const orderButton = document.querySelector('button');

const shoppingCart = getFromLocalStorage(CARTDATA) || [];

for (let i = 0; i < shoppingCart.length; i++) {
    const beanieItem = shoppingCart[i];

    const tr = renderTableRow(beanieItem);

    table.appendChild(tr);
}

const beanies = seedAndGetBeanie();

const total = cartTotal(shoppingCart, beanies);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: ${total.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;

orderButton.addEventListener('click', () => {
    const stringyCart = JSON.stringify(shoppingCart, true, 2);
    alert(stringyCart);

    localStorage.clear();
    window.location.href = '../';
});