document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('myButton');
  const resultDiv = document.getElementById('result');

  button.addEventListener('click', function() {
      let numbers = [];
      for (let i = 0; i <= 100; i++) {
          numbers.push(i);
      }

      let sum = numbers.reduce((total, num) => total + num, 0);

      resultDiv.textContent = `The sum of numbers between 0 and 100 is: ${sum}`;
  });
});
