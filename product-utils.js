
// id: 'princess',
// name: 'Princess The Bear',
// year: '1997',
// image: 'princess.png',
// price: 665000,
// description: 'Princess the Bear is...
// catagory: 'collectable'

export function renderBeanie(beanie) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const year = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const description = document.createElement('div');
    const button = document.createElement('button');
    
    li.classList.add('beanie');

    name.classList.add('name');
    name.textContent = beanie.name;
    li.appendChild(name);

    year.classList.add('year');
    year.textContent = beanie.year;
    li.appendChild(year);
    
    price.classList.add('price');
    price.textContent = `${beanie.price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    li.appendChild(price);
 
    image.classList.add('image');
    image.src = `../assets/${beanie.image}`;
    image.alt = beanie.name;
    li.appendChild(image);

    description.classList.add('description');
    description.textContent = beanie.description;
    li.appendChild(description);

    button.textContent = 'Add to cart';
    li.appendChild(button);

    return li;
}