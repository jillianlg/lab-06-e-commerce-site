// IMPORT MODULES under test here:
import { renderBeanie } from '../product-utils.js';

const test = QUnit.test;

test('should take in a beanie and retun an li with the appropariate contents', (expect) => {
    const beanie = {
        id: 'princess',
        name: 'Princess The Bear',
        year: '1997',
        image: 'bb-princess.png',
        price: 665000,
        description: 'Princess the Bear is considered the Holy Grail of their Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended to be a fundraising model for The Diana, Princess of Wales Memorial Fund. Because of its rarity, the Princess the Bear Beanie baby model is considered to be the most expensive and valuable Beanie Baby.Released in 1997, after the Beanie Babies craze had already hit, Princess the Bear was not part of the original collection.',
        catagory: 'collectable',
    };
    
    
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="beanie"><p class="name">Princess The Bear</p><p class="year">1997</p><p class="price">$665,000.00</p><img class="image" src="../assets/bb-princess.png\" alt="Princess The Bear"><div class="description">Princess the Bear is considered the Holy Grail of their Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended to be a fundraising model for The Diana, Princess of Wales Memorial Fund. Because of its rarity, the Princess the Bear Beanie baby model is considered to be the most expensive and valuable Beanie Baby.Released in 1997, after the Beanie Babies craze had already hit, Princess the Bear was not part of the original collection.</div><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBeanie(beanie);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
