import { renderTableRow, cartTotal } from '../cart/cart-utils.js';
import { beanies } from '../product-data.js';
const test = QUnit.test;

test('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'batty',
        quantity: 2
    };
    
    //Arrange
    const expected = '<tr><td>Batty the Bat</td><td>$125,000.00</td><td>2</td><td>$250,000.00</td></tr>';
    
    //Actual
    const actual = renderTableRow(cartItem);

    //Expect
    expect.equal(actual.outerHTML, expected);
});

test('should take in a cart subtotals and return a tr element total value of items in the cart', (expect) => {
    const cart = [{
        id: 'batty',
        quantity: 2
    }];
    //Arrange
    const expected = 250000;
    
    //Actual
    const actual = cartTotal(cart, beanies);

    //Expect
    expect.equal(actual, expected);
});