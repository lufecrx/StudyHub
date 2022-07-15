const darkModeClass = 'dark-mode';
const btn = document.querySelector('#mode-selector');
const title = document.querySelector('#page-title');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

btn.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    btn.classList.toggle(darkModeClass);
	title.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
};

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)) {
        btn.innerHTML = lightMode;
        title.innerHTML = darkMode + ' ON';
        return;
    }

    btn.innerHTML = darkMode;
    title.innerHTML = lightMode + ' ON';        
}