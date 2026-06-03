const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Sona'; 
const nextPageUrl = 'main.html'; 

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl;
	} else {
		resultDiv.innerHTML = 'Who Are You? You Are Not My Love';
	}
});

document.addEventListener('contextmenu', event => event.preventDefault());
            document.onkeydown = function(e) {
            if (e.keyCode == 123 || (e.ctrlKey && e.key == 'u') || (e.ctrlKey && e.shiftKey && e.key == 'I')) {
                return false;
              }
            }