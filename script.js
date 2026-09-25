const themeButton = document.getElementById('theme-btn');
const body = document.body;

themeButton.addEventListener('click', () => {
body.classList.toggle('dark-mode');

if(body.classList.contains('dark-mode')){
    themeButton.textContent = 'Switch to Light Mode';
}else {
    themeButton.textContent = 'Switch to Dark Mode';
}
});