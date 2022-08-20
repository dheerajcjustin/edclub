const form = document.getElementById("form");
const fname = document.getElementById("fname");
const password = document.getElementById("password");
const Email = document.getElementById("Email")
const password2 = document.getElementById("password2")
console.log('dfsad;fsd')
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInput = () => {

    const fnameValue = fname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const EmailValue = Email.value.trim();
    if (fnameValue === '') {
        setError(fname, 'Name is reqiured')
        // red

    }
    else {
        // green
        setSuccess(fname);
    }
    if (EmailValue === '') {
        setError(Email, 'email is reqiured')
        // red

        // }
        // else if (EmailValue !== '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/') {
        //     setError(Email, 'enter valid email');
    }
    else {
        // green
        setSuccess(Email);
    }
    if (passwordValue === '') {
        setError(password, 'password is reqiured')
        // red

    } else if (passwordValue.length < 9) {
        setError(password, 'password length more than 8 charactor');

    }
    else {
        // green
        setSuccess(password);
    }
    if (password2Value === '') {
        setError(password2, 'password is reqiured')
        // red
    } else if (passwordValue !== password2Value) {
        setError(password2, 'password is not match')
    }
    else {
        // green
        setSuccess(password2);
    }
}

