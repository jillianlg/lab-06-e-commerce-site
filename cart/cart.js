import { cartTotal } from '../cart/cart-utils.js';
import { cart } from '../cart/cart-data.js';
import { beanies } from '../product-data.js';


const total = cartTotal(cart, beanies);

const totalCell = document.querySelector('.total');

totalCell.textContent = `Total: ${total.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;