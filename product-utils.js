
// id: 'princess',
// name: 'Princess The Bear',
// year: '1997',
// image: 'princess.png',
// price: 665000,
// description: 'Princess the Bear is...
// catagory: 'collectable'

export function renderBeanie(beanies) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const year = document.createElement('p');
    const image = document.createElement('img');
    const price = document.createElement('p');
    const description = document.createElement('div');
    const button = document.createElement('button');
    
    li.classList.add('beanie');

    name.classList.add('name');
    name.textContent = beanies.name;
    li.appendChild(name);

    year.classList.add('year');
    year.textContent = beanies.year;
    li.appendChild(year);
    
    price.classList.add('price');
    price.textContent = `${beanies.price.toLocaleString('en-US', { style:'currency', currency:'USD' })}`;
    li.appendChild(price);
 
    image.classList.add('image');
    image.src = `../assets/${beanies.image}`;
    image.alt = beanies.name;
    li.appendChild(image);

    description.classList.add('description');
    description.textContent = beanies.description;
    li.appendChild(description);

    button.textContent = 'Add to cart';
    li.appendChild(button);

    return li;
}