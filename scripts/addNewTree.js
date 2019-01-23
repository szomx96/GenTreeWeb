import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.getElementById("addNewTreeButton").addEventListener("click", function() {
    
    var name = document.getElementById("treeName").value;

    var person = {
        name: document.getElementById("personName").value,
        surname: document.getElementById("personSurname").value,
        sex: document.getElementById("personSex").value,
        
        events: [
          {
            date: document.getElementById("birthDate").value,
            type: "Birth",
            description: ""
          }
        ]
      }   

      console.log(name);
      console.log(person);


}, false);