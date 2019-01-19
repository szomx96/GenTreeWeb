import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));
var treeData;

document.addEventListener('DOMContentLoaded', function() {
  loadTree();
  loadJSON(init(drawTree));
  drawTree(treeData);
}, false);

document.addEventListener("click", function(){
  if (document.getElementById("addRelation").style.visibility === "visible") {
    document.getElementById("addRelation").style.visibility = "hidden";
  }
  if (document.getElementById("addEvent").style.visibility === "visible") {
    document.getElementById("addEvent").style.visibility = "hidden";
  }
  if (document.getElementById("addMedia").style.visibility === "visible") {
    document.getElementById("addMedia").style.visibility = "hidden";
  }
});

document.getElementById("addRelation").addEventListener("click", function(event){ //nie chowa okienka po kliknieciu na div z dodawniem relacji
  event.stopPropagation();
}, false);

document.getElementById("addEvent").addEventListener("click", function(event){ //nie chowa okienka po kliknieciu na div z dodawniem relacji
  event.stopPropagation();
}, false);

document.getElementById("addMedia").addEventListener("click", function(event){ //nie chowa okienka po kliknieciu na div z dodawniem relacji
  event.stopPropagation();
}, false);

document.getElementById("addRelationButton").addEventListener("click", function(event) {

  event.stopPropagation();
  document.getElementById("addRelation").style.visibility = "visible";
  var posX = event.clientX + "px";
  var posY = event.clientY - 80 + "px"; //to nie po bozemu, trzeba naprawic
  document.getElementById("addRelation").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("addEventButton").addEventListener("click", function(event) {

  event.stopPropagation();
  document.getElementById("addEvent").style.visibility = "visible";
  var posX = event.clientX + "px";
  var posY = event.clientY - 80 + "px"; //to nie po bozemu, trzeba naprawic
  document.getElementById("addEvent").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("addMediaButton").addEventListener("click", function(event) {

  event.stopPropagation();
  document.getElementById("addMedia").style.visibility = "visible";
  var posX = event.clientX + "px";
  var posY = event.clientY - 80 + "px"; //to nie po bozemu, trzeba naprawic
  document.getElementById("addMedia").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("deletePersonButton").addEventListener("click", function(event) {

  var decision = confirm("Are you sure?")

  if(decision){
    //wywalic z bazy ziomka i jego wszystkie powiazania
  }
  
}, false);

document.getElementById("addRelationButtonConfirm").addEventListener("click", function(event) {
  //wyslac na serwer
  document.getElementById("addRelation").style.visibility = "hidden";
}, false);

document.getElementById("addEventButtonConfirm").addEventListener("click", function(event) {
  //wyslac na serwer
  document.getElementById("addEvent").style.visibility = "hidden";
}, false);

document.getElementById("addMediaButtonConfirm").addEventListener("click", function(event) {
  //wyslac na serwer
  document.getElementById("addMedia").style.visibility = "hidden";
}, false);


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

      //wygenerowac config.json

    });

  });
 }

 function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', './config/config.json', true);
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

function init(callback) {

  loadJSON(function(response) {
   // Parse JSON string into object
     treeData = JSON.parse(response);
     callback(treeData);
 });
}

function drawTree() {

  init(function (response) {
    dTree.init(response, {
      target: "#graph",
      debug: true,
      height: 800,
      width: 1200,
      callbacks: {
        nodeClick: (name, extra) => {nodeOnClick(name, extra)},
        textRenderer: function (name, extra, textClass) {
          // THis callback is optinal but can be used to customize
          // how the text is rendered without having to rewrite the entire node
          // from screatch.
          if (extra && extra.nickname)
            name = name + " (" + extra.nickname + ")";
          return "<p align='center' class='" + textClass + "'>" + name + "</p>";
        },
        nodeRenderer: function (name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
          // This callback is optional but can be used to customize the
          // node element using HTML.
          let node = '';
          node += '<div ';
          node += 'style="height:100%;width:100%;" ';
          node += 'class="' + nodeClass + '" ';
          node += 'id="node' + id + '">\n';
          node += textRenderer(name, extra, textClass);
          node += '</div>';
          return node;
        }
      }
    });
  });
}

function nodeOnClick(name, extra){

  document.getElementById("cardHeader").innerHTML=name;
  
}