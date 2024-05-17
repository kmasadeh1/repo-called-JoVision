document.getElementById('ipButton').addEventListener('click', function() {
  fetch('https://api.ipify.org?format=json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('ipButton').textContent = data.ip;
      })
      .catch(error => {
          document.getElementById('ipButton').textContent = 'Failed to fetch IP';
          console.error('Error fetching IP:', error);
      });
});
