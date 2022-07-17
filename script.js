// ojects to store details
let userDetailsDatabase = {}

function getUserDetails(){
// UserName
    let userName = prompt("Enter your username");

    if (userName === null){
        return;
    }

    function validateUserName(userName){
        if(userName.length < 10 && userName.length > 0){
            return true;
        }else{
            return false;
        }
    }
   while(validateUserName(userName) === false){
    userName = prompt("Username must be less than 10 and greater than 0")
   }

   userDetailsDatabase[userName] = userName 

// Email Address

    let email = prompt("Enter your email address")

    if (email === null){
        return;
    }

    function validateEmail(email){
        var emailCheck =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult === true){
            return true;
        }else{
            return false;
        }
    }
    while(validateEmail(email) === false){
        email = prompt("Enter a valid email")
    };

    userDetailsDatabase[email] = email

// Phone number

    let phoneNumber = prompt("Enter your phone number")

    if (phoneNumber === null){
        return;
    }

    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length === 11){
            return true;
        }else{
            return false;
        }
    }
    while(validatePhoneNumber(phoneNumber) === false){
        phoneNumber = prompt("Phone number must be 11 digits, try again")
    };

    userDetailsDatabase[phoneNumber] = phoneNumber

//  Password
     
    let password = prompt("Enter your password")

    if (password === null){
        return;
    }
    
    function validatePassword(password){
        if (password.length < 6){
            return true;
        }else{
            return false;
        }
    }
    while(validatePassword(password) === false) {
        password = prompt("Password must not be less than 6 digits")
    };

    userDetailsDatabase[password] = password

// Confirm Password

    let confirmPassword = prompt("Confirm your password")

    if (confirmPassword === null){
        return;
    }

    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password) {
            return false;
        }else{
            return true;
        }
    }
    while(validateConfirmPassword(confirmPassword)){
        confirmPassword = prompt("Confirm password does not match password, try again")
    };

    userDetailsDatabase[confirmPassword] = confirmPassword;
}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.email}`) 

}








