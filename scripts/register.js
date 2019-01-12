document.getElementById("registerButton").addEventListener("click", function() {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var passwordRepeated = document.getElementById("passwordRepeated").value;

    if(password === passwordRepeated){
        createUser(name, password);
    }else{
        document.getElementById("infoLabel").innerHTML = "Passwords do not match";
    }
}, false);


function createUser(name, password){

    var url = 'https://gentreeappapi.azurewebsites.net/api/users/register';
    var data = {name: name, password: password};

    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.status);
          if(response.status == 200){
              document.getElementById("infoLabel").innerHTML = "Account successfully created!";
              clearInput();
          }
        })
      .catch(error => console.error('Error:', error));
}

function clearInput(){
    document.getElementById("name").value="";
    document.getElementById("password").value="";
    document.getElementById("passwordRepeated").value="";
}

document.getElementById("buttonRegLogin").addEventListener("click", function() {
    location.replace("./index.html");
}, false);