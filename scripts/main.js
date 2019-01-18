import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));
//var treeID;

document.addEventListener('DOMContentLoaded', function() {
  loadTree();  
}, false);


document.getElementById('usernameText').innerHTML = data.username;

 function loadTree(){

  api.getUserTrees(data.id)
  .then(response => {
    //id pierwszego drzewa
    return response[0].id;    
  })
  .then(res => {
    console.log(res);

    api.getPersonsFromTree(res)
    .then(response => {
      console.log(response);
    });

  });
 }
