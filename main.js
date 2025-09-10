const input = document.getElementById('input');
const cards = document.querySelectorAll('.card');
let result = document.getElementById('result');

function emptyInput() {
  input.value = '';
  cards.forEach(card => {
    card.style.display = 'block';
  });
};

function findMedicine() {
  let inputValue = input.value.toLowerCase();

  cards.forEach(card => {
    let name = card.querySelector('h2').innerText.toLowerCase();
    if (name.includes(inputValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

input.addEventListener('keyup', findMedicine);