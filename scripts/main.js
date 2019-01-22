import * as api from './api.js';
class TreeData {
  contructor(value){

  }
}

var rawTree;
var data = JSON.parse(localStorage.getItem('sessionData'));
var treeData;
var treePersons = {};

document.addEventListener('DOMContentLoaded', async function() {
  //loadTree();
  // loadJSON(init(drawTree)); po co to? xD
  // rawTree = await loadRawTree();
  drawTree();
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
  var posY = event.clientY - 80 + "px"; //to nie po bozemu, trzeba naprawic, SAMA SE KURWA NAPRAW
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


//loads tree Data from the server nad returns treeData ready for drawing library
 async function loadTree(){ //should be given id of the tree in the argument

  let idOfFirstTree = await api.getUserTrees(data.id).then(response =>response[0].id);
  let rawTree = await api.getPersonsFromTree(idOfFirstTree); //raw data from server

  //bylo testowane
  //let rawTree = await api.getPersonsFromTree("8e49f432-ca94-4ca9-b7a0-08d678d8e1a9");

  console.log("raw tree (from server): ", rawTree);

  let treeData = genTreeData(rawTree);   //transforms tree data into the one compatible with our lib
  // let treeData = genTreeDataForPerson(rawTree, rawTree[0].id);
  //console.log("persons Data w loadtree: ", treeData);
  return treeData; 
 }

//  async function loadRawTree(id){ 
//   let idOfFirstTree = await api.getUserTrees(data.id).then(response =>response[0].id);
//   let persons = await api.getPersonsFromTree(idOfFirstTree); //raw data from server
//   //transforms tree data into the one compatible with our lib
//   let treeData = genTreeData(persons); 
//   //console.log("persons Data w loadtree: ", persons);
//   return treeData; 
//  }

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

async function init(callback) {

  //   loadJSON(function(response) {
  //    // Parse JSON string into object
  //      treeData = JSON.parse(response);
  //      callback(treeData);
  //  });
  let treeData = await loadTree();
  console.log("tree data w init: ", treeData);
  callback(treeData);

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

//return object adapted to graph
function personForGraph (personData) {

  var person = {
    id: personData.id,
    name: personData.details.name,
    class: personData.details.sex === 'Male'? "man": "woman",
  };
  //console.log(personData, person.class);
  return person;
}

//returns object TreeData for our library on d3 which i forgot the name of ;)
function genTreeData(rawTreeData){

  console.log("persons ktore dostaje tree data: ", rawTreeData);
  //teraz wygenerowac dla dzieci GŁOWY rodziny (koniecznie męskiej)
  let treeData = [genTreeDataForPerson(rawTreeData,rawTreeData[0].id)];
  console.log(JSON.stringify(treeData));

  return treeData;
}

function genTreeDataForPerson(persons, id){
  let treeData;
  let person = persons.find(person => person.id === id);
  console.log(`gentreedata wywolane dla`, person.details.name);

  treeData = personForGraph(person);
  treeData.marriages = [{}];
  treeData.marriages[0].spouse = {};
  treeData.marriages[0].children = [];

  for (var i = 0; i < person.relations.length; i++) { 
    switch (person.relations[i].type) {
      case "Marriage":
        if(person.details.sex === "Male"){
        treeData.marriages[0].spouse = personForGraph(persons.find(person1 => person1.id === person.relations[i].secondPersonId)); 
        }else{
        treeData.marriages[0].spouse = personForGraph(persons.find(person1 => person1.id === person.relations[i].firstPersonId));
        }
        break;
      case "Parent":        
         //treeData.marriages[0].children.push(personForGraph(persons.find(person1 => person1.id === person.relations[i].secondPersonId)));
         treeData.marriages[0].children.push(genTreeDataForPerson(persons,person.relations[i].secondPersonId));

        break;
    }
  }
  return treeData;
}

function nodeOnClick(name, extra){

  document.getElementById("cardHeader").innerHTML=name;
  
}

