document.getElementById('getIpButton').addEventListener('click', function() {
  fetch('https://api.ipify.org?format=json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('ipDisplay').textContent = 'Your IP Address is: ' + data.ip;
      })
      .catch(error => {
          document.getElementById('ipDisplay').textContent = 'Error fetching IP: ' + error;
      });
});
