// 4.	In a JavaScript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, 
// have JavaScript change the text in the <h1>.HTML page. It should include inputs for a username, email,
//  and password. Also a submit button.
let password = document.getElementById("password").value;
let username = document.getElementById("username").value;

let checkPassword = (password) => {
    if(password == "1"){
        return true;
    }
    else return false;
}

let checkInput = () => {
    if(!checkPassword(password)) alert("password incorrect");

    if(checkPassword(password)){
        document.getElementById("header").innerText = username;
    }
}