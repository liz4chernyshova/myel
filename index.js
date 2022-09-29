let inputError = document.querySelector('.input-error');

document.getElementById('form-button').onclick = function() {
    if ( document.getElementById('email').value === "") {
        inputError.classList.add('active');
        inputError.textContent = 'Заполните это поле!';
    } else {
        inputError.classList.remove('active');
        form.reset();
    }
};


