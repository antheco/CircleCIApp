console.log('Client-side code running');

const button = document.getElementById('Button1');
const text = document.getElementById('text1');

button.addEventListener('click', (e) => {
  console.log('button was clicked');
  text.textContent = 'Text updated.'
});
