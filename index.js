const listItems = document.querySelectorAll('.fruit');
listItems.forEach(li => {
    const btn = document.createElement('button');
    btn.textContent = 'Edit';
    li.appendChild(btn);
});

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button>Edit</button>';
    fruits.appendChild(newLi);
});
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn'))
    {
        const fdelete = event.target.parentElement;
        fruits.removeChild(fdelete);
    };
});
