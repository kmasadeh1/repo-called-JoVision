document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('myButton');
  const resultDiv = document.getElementById('result');

  button.addEventListener('click', function() {
      let sum = 0;
      for (let i = 0; i <= 100; i++) {
          if (i % 2 === 0) {
              sum += i;
          }
      }

      resultDiv.textContent = `The sum of even numbers between 0 and 100 is: ${sum}`;
  });
});
