// currency

var elcurrencyFormBox = document.querySelector('.currency-form__box');

elcurrencyFormBox.addEventListener('submit', function (e) {
  e.preventDefault()

  var elCurrencyInput = document.querySelector('.currency-input');
  var elCurrencySelect = document.querySelector('.currency-select');
  var elCurrencyBtn = document.querySelector('.currency-btn');
  var elCurrencyOvercome = document.querySelector('.currency-overcome');

  elCurrencyOvercome.textContent = Number(elCurrencyInput.value) * Number(elCurrencySelect.value);
});

// FizzBuzz

var elGameFormBox = document.querySelector('.game-form__box');
var elGameInput = document.querySelector('.game-input');
var elGameOvercome = document.querySelector('.game-overcome');

elGameFormBox.addEventListener('keyup', function (e) {
  e.preventDefault();
  var elGameBtn = document.querySelector('.game-btn');

  if (Number(elGameInput.value % 3 === 0) && Number(elGameInput.value % 5 === 0)) {
    elGameOvercome.textContent = 'FizzBuzz'
  } else if (Number(elGameInput.value % 3 === 0)) {
    elGameOvercome.textContent = 'Fizz'
  } else if (Number(elGameInput.value % 5 === 0)) {
    elGameOvercome.textContent = 'Buzz'
  } else {
    elGameOvercome.textContent = elGameInput.value
  }
});

// number JS

var elPlayFormBox = document.querySelector('.play-form__box');
var elPlayResult = document.querySelector('.play-result');
var elPlayInput = document.querySelector('.play-input');

var i = 6;

var randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

elPlayFormBox.addEventListener('submit', function (e) {
  e.preventDefault();

  if (i == 0){
    elPlayResult.textContent = `siz yutkazdingiz. To'g'ri javob ${randomNum} edi.`;
    elPlayInput.value = '';
  } else if ( (i => 1 ) && (Number(elPlayInput.value)) > randomNum){
    i--;
    elPlayResult.textContent = 'kiritilgan son kotta';
    elPlayInput.value = '';
  } else if (Number(elPlayInput.value) < randomNum){
    i--;
    elPlayResult.textContent = 'kiritilgan son kichkina';
    elPlayInput.value = '';
  } else {
    elPlayResult.textContent = 'tabriklaymiz!';
  }
});

