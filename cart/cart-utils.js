// import { cart } from './cart-data.js';
import { beanies } from '../product-data.js';
import { findById } from '../product-utils.js';

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const beanieData = findById(beanies, cartItem.id);

    const price = beanieData.price;
    const name = beanieData.name;

    tdPrice.textContent = `${price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    tdName.textContent = name;

    const total = price * cartItem.quantity;

    tdSubTotal.textContent = `${total.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;

    tr.append(tdName, tdPrice, tdQuantity, tdSubTotal);

    return tr;
}



export function cartTotal(cart, beanies) {

    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        const singleBeanie = findById(beanies, item.id);

        const subtotal = singleBeanie.price * item.quantity;

        totalCost = totalCost + subtotal;
    }

    return totalCost;
}

