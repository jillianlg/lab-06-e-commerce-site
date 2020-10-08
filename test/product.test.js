// IMPORT MODULES under test here:
import { renderBeanie } from '../product-utils.js';

const test = QUnit.test;

test('should take in a beanies and retun an li with the appropariate contents', (expect) => {
    const beanies = {
        id: 'princess',
        name: 'Princess the Bear',
        year: '1997',
        image: 'bb-princess.png',
        price: 650000,
        description: 'Princess the Bear is considered the Holy Grail of the Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended as a fundraising model for The Diana, Princess of Wales Memorial Fund. Initial production was limited to only 12 bears per vendor (they can be identified by "P.V.C Pellets" noted on the back of the tag.)',
        catagory: 'collectable',
    };
    
    
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="beanie"><p class="name">Princess the Bear</p><p class="year">1997</p><p class="price">$650,000.00</p><img class="image" src="../assets/bb-princess.png\" alt="Princess the Bear"><div class="description">Princess the Bear is considered the Holy Grail of the Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended as a fundraising model for The Diana, Princess of Wales Memorial Fund. Initial production was limited to only 12 bears per vendor (they can be identified by "P.V.C Pellets" noted on the back of the tag.)</div><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBeanie(beanies);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// ADD PRODUCT test
test('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newBeanie = {
        id: 'patti',
        name: 'Patti the Platapus',
        year: '1995',
        image: 'bb-patti.png',
        price: 50000,
        description: 'the magenta Patti is one of the original 5 Beanie Babies.',
    };
    const expectation = [
        {
            id: 'princess',
            name: 'Princess the Bear',
            year: '1997',
            image: 'bb-princess.png',
            price: 650000,
            description: 'Princess the Bear is considered the Holy Grail of the Beanie Baby collection. The a purple bear with a white rose embroidered on its chest, was intended as a fundraising model for The Diana, Princess of Wales Memorial Fund. Initial production was limited to only 12 bears per vendor (they can be identified by "P.V.C Pellets" noted on the back of the tag.)',
            catagory: 'collectable',
        },
        {
            id: 'peanut',
            name: 'Peanut the Elephant',
            year: '1997',
            image: 'bb-peanut.png',
            price: 250000,
            description: 'Peanut the royal-blue elephant is the Beanie Baby that helped catapult the brand to prominence. After a few months of poor sales, the company changed the color to a lighter shade, and its popularity skyrocketed. Today the royal-blue Peanut is one of the most sought-after Beanie Babies around.',
            catagory: 'collectable',
        },
        {
            id: 'batty',
            name: 'Batty the Bat',
            year: '1997',
            image: 'bb-batty.jpg',
            price: 125000,
            description: 'If you managed to snag one of the original brown Batty The Bats with an extra foot you could strike it rich.',
            catagory: 'collectable',
        },
        {
            id: 'scoop',
            name: 'Scoop the Pelican',
            year: '1996',
            image: 'bb-scoop.jpg',
            price: 100000,
            description: 'The limited 2 year run meant there were fewer Scoop\'s in the market. Add that to having one of a handful of blank tag Scoop\'s and you\'ve hit the jackpot.',
            catagory: 'collectable',
        },
        {
            id: 'valentino',
            name: 'Valentino the Bear',
            year: '1999',
            image: 'bb-valentino.jpg',
            price: 100000,
            description: 'Valentino the Bear is one of the most well known and classic Beanie Babies. Its red embroidered heart and its faded white look are very iconic. The average Valentino the Bear Beanie baby is not very valuable as they are so common; however the ones with the misspelled tag are worth a whole lot of money.',
            catagory: 'collectable',
        },
        {
            id: 'patti',
            name: 'Patti the Platapus',
            year: '1995',
            image: 'bb-patti.png',
            price: 50000,
            description: 'the magenta Patti is one of the original 5 Beanie Babies.',
        },
    ];

    addProduct(newBeanie);

    const localStorageAfter = JSON.parse(localStorage.getItem('beanies'));

      //Expect
    expect.deepEqual(expectation, localStorageAfter);
});