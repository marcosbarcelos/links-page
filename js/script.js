const darkButton = document.getElementById('darkButton');
const bodyElement = document.querySelector('body');

const darkMode = () => {
  bodyElement.classList.toggle('dark');
};

let setDarkMode = localStorage.getItem('dark');
if (setDarkMode === 'on') {
  darkMode();
}

darkButton.addEventListener('click', () => {
  setDarkMode = localStorage.getItem('dark');
  if (setDarkMode !== 'on') {
    darkMode();
    setDarkMode = localStorage.setItem('dark', 'on');
  } else {
    darkMode();
    setDarkMode = localStorage.setItem('dark', 'off');
  }
});
