import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  displayList();
}, false);

function displayList() {

  var res;

  api.getUserTrees(data.id)
    .then(response => {
      console.log('display:', response);
      res = response;
      var length = Object.keys(response[0]).length;
      return length;

    }).then(length => {

      console.log(length);

      var table = document.getElementById("treeList");
      var rows = [];
      var cells = [];

      for (var i = 0; i < length; i++) {
        rows.push(table.insertRow(i));
        cells.push(rows[i].insertCell(0));
        cells[i].innerHTML = res[i].name;
      }

      for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", showSelectedTree(i, res));
      }

    });
}

function showSelectedTree(i, res) {
  return function() {
      console.log("you clicked region number " + i);
      console.log(res[i].id);
      //przekierowanie do maina i wyswietlenie drzewa z tym id
  };
}