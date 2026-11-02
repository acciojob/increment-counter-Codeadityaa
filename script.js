const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
let count = 0;
incrementButton.addEventListener('click', () => {
	  alert(count);
	   count++;
   counterElement.textContent = count;
});