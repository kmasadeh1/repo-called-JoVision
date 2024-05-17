document.getElementById('ipButton').addEventListener('click', function() {
  fetch('https://api.ipify.orgx/') 
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch the IP address. Status: ' + response.status);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('ipDisplay').textContent = 'Your IP Address is: ' + data.ip;
          document.getElementById('errorDisplay').textContent = ''; 
      })
      .catch(error => {
          console.error('Fetch error:', error);
          document.getElementById('errorDisplay').textContent = 'Error: ' + error.message; 
      });
});
