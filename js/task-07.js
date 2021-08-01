const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('span');

inputElement.addEventListener('input', () => {
    textElement.style.fontSize =  `${inputElement.value}px`; 
});