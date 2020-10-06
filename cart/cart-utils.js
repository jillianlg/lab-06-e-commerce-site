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

    /* bookData is an object that has: .title, .id, .price, .author */
    const price = beanieData.price;
    const name = beanieData.name;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = name;

    const total = price * cartItem.quantity;

    tdSubTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdSubTotal);

    return tr;
}