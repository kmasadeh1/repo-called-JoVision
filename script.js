document.addEventListener('DOMContentLoaded', function () {
 
  const button = document.getElementById('myButton');
  const messageDiv = document.getElementById('message');

  button.addEventListener('click', function() {
      if (messageDiv.textContent === 'Hello World') {
          messageDiv.textContent = '';
      } else {
          messageDiv.textContent = 'Hello World';
      }
  });
});
