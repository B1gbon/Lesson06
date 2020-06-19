'use strict';


const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


const guessingGame = function() {

  let guessedNumber = Math.floor(Math.random() * 99 + 1); 
  let attempts = 10; 

  
  function guessNumber() {
    let number;

    
    function cancelGame(str) {
      if (confirm(str)) {
        guessingGame();
      } else {
        alert('Игра окончена! До новых встреч!');
      }
    }
    
  
    if (attempts === 0) {
      cancelGame('Попытки закончились, хотите сыграть еще?');
    } else {
      
      number = prompt('Угадай число от 1 до 100. У вас ' + attempts + ' попыток');
      
      if (number === null) {
        alert('Игра окончена!');
      
      } else if (!isNumber(number)) {
        alert('Введите число!');
        guessNumber();
      
      } else if (+number > guessedNumber) {
        attempts--;
        alert('Загаданное число меньше, осталось ' + attempts + ' попыток');
        guessNumber();
      
      } else if (+number < guessedNumber) {
        attempts--;      
        alert('Загаданное число больше, осталось ' + attempts + ' попыток');
        guessNumber();
      
      } else if (+number === guessedNumber) {
        cancelGame('Поздравляю, ты выиграл! Хотел бы сыграть еще?');
      }
    }
  }

  guessNumber();
  
};

guessingGame();
