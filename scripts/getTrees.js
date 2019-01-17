import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  displayList();
}, false);




function displayList(){

  //console.log(api.getUserTrees(data.id));

  api.getUserTrees(data.id)
  .then(response =>{
    console.log('Success:', response);
  });
  

  var table = document.getElementById("treeList");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);

  // var length = Object.keys(data.list[0]).length;
  // console.log(length);

  cell1.innerHTML = "test";
  

}