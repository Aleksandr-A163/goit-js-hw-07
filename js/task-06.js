const inputR = document.querySelector('#validation-input');

const inputBC = (event) => 
    event.target.value.length == inputR.dataset.length
        ? inputR.setAttribute('class', 'valid')
        : inputR.setAttribute('class', 'invalid');

inputR.addEventListener('blur', inputBC);