const form = document.querySelector('form');
const fruitsInput = document.getElementById('fruit-to-add');
const fruitsList = document.getElementsByClassName('fruits')[0];
const existingItems = fruitsList.querySelectorAll('li');


existingItems.forEach(item => {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    item.appendChild(editBtn);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitName = fruitsInput.value.trim();
    if (fruitName === ' ')
        return;
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = `
    ${fruitName}
    <button class="delete-btn">x</button> 
    <button class="edit-btn'>Edit</button>
    `;

    fruitsList.appendChild(newLi);
    fruitsList.value = '';
});
fruitsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn'))
    {
        const li = event.target.parentElement;
        fruitsList.removeChild(li);
    }
});
