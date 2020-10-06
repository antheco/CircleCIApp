console.log('Client-side code running');

const button = document.getElementById('Button1');
const text = document.getElementById('text1');

function buttonClick() {
  console.log('The button was clicked');
  text.textContent = 'The text was updated.'
  return text.textContent
}

button.addEventListener('click', (e) => {
  buttonClick()
});
