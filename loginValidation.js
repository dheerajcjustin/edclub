const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const form = document.getElementById("form");
const errorElament = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = []
    if (email.value == '' || email.value == null) {
        message.push("name is reqiured")


    }
    if (message.length > 0) {
        e.preventDefault();
        errorElament.innerText = message.join(', ')

    }

})
