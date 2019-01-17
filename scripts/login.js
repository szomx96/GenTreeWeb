import * as api from './api.js';

document.getElementById("loginButton").addEventListener("click", function() {
    sendLogin(document.getElementById("name").value, document.getElementById("password").value);
}, false);

document.getElementById("registerButton").addEventListener("click", function() {
    location.replace("./register.html");
}, false);

//                                  old login
// function sendLogin() {
//     console.log('sendLogin sie wywowal');
// let status;

//     api.postLogin(document.getElementById("name").value, document.getElementById("password").value) //no fajna abstrakcja, czy to ten no, boilerplate?
//     .then(res => {status = res.status; return res.json()})
//         .then(response => {
//             console.log('Success:', JSON.stringify(response));
//             if (status == 200) {                                      
//                 localStorage.setItem('sessionData', JSON.stringify(response));
//                 location.replace("./main.html");
//             } else {
//                 document.getElementById("infoLabel").innerHTML = response.message;
//                 clearInput();
//             }
//         })
//         .catch(error => console.error('Error:', error));
    
// }


function sendLogin() {
    console.log('sendLogin sie wywowal');
let status;

    api.postLogin(document.getElementById("name").value, document.getElementById("password").value) //no fajna abstrakcja, czy to ten no, boilerplate?
        .then(response => {
            console.log('Success:', JSON.stringify(response));
                
                localStorage.setItem('sessionData', JSON.stringify(response));
                clearInput();
                location.replace("./main.html");
        })
        .catch(error =>{ 
            document.getElementById("infoLabel").innerHTML = `Błond ty lójó: ${error}`;
            return console.error('Error:', error)});
}

function clearInput(){
    document.getElementById("name").value="";
    document.getElementById("password").value="";
}