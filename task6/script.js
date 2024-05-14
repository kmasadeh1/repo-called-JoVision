document.addEventListener('DOMContentLoaded', function () {
  const btnOne = document.getElementById('btnOne');
  const outputOne = document.getElementById('outputOne');
  const btnTwo = document.getElementById('btnTwo');
  const outputTwo = document.getElementById('outputTwo');
  const btnThree = document.getElementById('btnThree');
  const outputThree = document.getElementById('outputThree');
  const btnFour = document.getElementById('btnFour');
  const outputFour = document.getElementById('outputFour');
  const btnFive = document.getElementById('btnFive');
  const outputFive = document.getElementById('outputFive');

  function generateArray() {
      return Array.from({ length: 101 }, (_, index) => index);
  }

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  btnOne.addEventListener('click', function() {
      const arr = generateArray().filter(x => x % 3 !== 0);
      outputOne.textContent = `Filtered Array (Not Divisible by 3): [${arr.join(', ')}]`;
  });

  btnTwo.addEventListener('click', function() {
      const arr = generateArray().concat(Array.from({ length: 50 }, (_, index) => 101 + index));
      outputTwo.textContent = `Extended Array (0 to 150): [${arr.join(', ')}]`;
  });

  btnThree.addEventListener('click', function() {
      const arr = generateArray().map(x => x + 3);
      outputThree.textContent = `Array After Adding 3 to Each Element: [${arr.join(', ')}]`;
  });

  btnFour.addEventListener('click', function() {
      const arr = generateArray().slice(20, 41);
      outputFour.textContent = `Subarray from Index 20 to 40: [${arr.join(', ')}]`;
  });

  btnFive.addEventListener('click', function() {
      let arr = generateArray();
      shuffleArray(arr);
      outputFive.textContent = `Shuffled Array: [${arr.join(', ')}]`;
      arr.sort((a, b) => b - a);
      outputFive.textContent += `\nSorted Descending: [${arr.join(', ')}]`;
  });
});
