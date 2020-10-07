import { cartTotal, renderTableRow } from '../cart/cart-utils.js';
import { cart } from '../cart/cart-data.js';
import { beanies } from '../product-data.js';
import { findById } from '../product-utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const beanies = cart[i];

    const tr = renderTableRow(beanies);

    table.appendChild(tr);
}

const total = cartTotal(cart, beanies);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: ${total.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;

