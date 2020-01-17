
//get REGESTRATION FORM elements
let formReg, userName, userEmail, userPass, formLogin;
formReg = document.forms.namedItem('form-reg');
userName = document.querySelector('#userName');
userEmail = document.querySelector('#userEmail');
userPass = document.querySelector('#userPass');
formLogin = document.forms.namedItem('form-login');


//make REGESTRATION
const makeReg = () => {

    let user = {
        name : userName.value,
        email : userEmail.value,
        pass : userPass.value
    }

    let usersArray;

    localStorage.getItem('user') ? usersArray = JSON.parse(localStorage.getItem('user')) : usersArray = [];

    usersArray.push(user);

    localStorage.setItem('user', JSON.stringify(usersArray));
}

// make LOGIN
const makeLogin = () => {

    let user = {
        email : userEmail.value,
        pass : userPass.value
    }

    if(localStorage.getItem('user')) {

        usersArray = JSON.parse(localStorage.getItem('user'));

        for(let item in usersArray) {

            if(usersArray[item].name === user.email || usersArray[item].email === user.email && usersArray[item].pass === user.pass ) {
                alert('You are login successfully!');
                break;
            } else {
                alert('wrong');
                break;
            }
        }

        
    } else{
        alert('You are not registered yet!');
    }
    
}




//add EVENT LISTENER to submit form
if(formReg) {
    formReg.addEventListener('submit', (e) => {
        e.preventDefault();
        makeReg();
        userName.value = '';
        userEmail.value = '';
        userPass.value = '';
    });
}

if(formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        makeLogin();
        userEmail.value = '';
        userPass.value = '';
    });
}

