// IMPORT MODULES under test here:
import { renderBeanie } from '../product-utils.js';

const test = QUnit.test;

test('should take in a beanie and retun an li with the appropariate contents', (expect) => {
    const beanies = {
        id: 'princess',
        name: 'Princess the Bear',
        year: '1997',
        image: 'bb-princess.png',
        price: 665000,
        description: 'Princess the Bear is considered the Holy Grail of their Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended to be a fundraising model for The Diana, Princess of Wales Memorial Fund.',
        catagory: 'collectable',
    };
    
    
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="beanie"><p class="name">Princess the Bear</p><p class="year">1997</p><p class="price">$665,000.00</p><img class="image" src="../assets/bb-princess.png\" alt="Princess The Bear"><div class="description">Princess the Bear is considered the Holy Grail of their Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended to be a fundraising model for The Diana, Princess of Wales Memorial Fund.</div><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBeanie(beanies);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
