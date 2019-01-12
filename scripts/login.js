document.getElementById("loginButton").addEventListener("click", function() {
    sendLogin(document.getElementById("name").value, document.getElementById("password").value);
}, false);

document.getElementById("registerButton").addEventListener("click", function() {
    location.replace("./register.html");
}, false);

function sendLogin(name, password){
    var url = 'https://gentreeappapi.azurewebsites.net/api/users/auth';
    var data = {name: name, password: password};
    var status;

    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => {status = res.status; return res.json()})
      .then(response => {
          console.log('Success:', JSON.stringify(response));
          if (status == 200) {                                       // to moze byc nie po bożemu, można po res.statusie wejsc w then nastepne?
              localStorage.setItem('sessionData', JSON.stringify(response));          // kurwa na chuja jsona do stringa i stringa z powrotem do jsona, no japierdole, działający dopomóż
              location.replace("./main.html");                             //zamiast .replace() spróbować .href lub .assign()
            }
        })
      .catch(error => console.error('Error:', error));
}