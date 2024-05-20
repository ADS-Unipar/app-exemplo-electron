document.getElementById('fetch-data').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('result').textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => console.error('Error fetching data:', error));
});

document.getElementById('send-message').addEventListener('click', () => {
  window.api.send('toMain', 'Ping');
});

window.api.receive('fromMain', (data) => {
  console.log({p:data}); // 'Pong'
});
