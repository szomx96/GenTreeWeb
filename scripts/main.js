import * as api from './api.js';
class TreeData {
  contructor(value){

  }
}

var rawTree;
var data = JSON.parse(localStorage.getItem('sessionData'));
var chosenTree = localStorage.getItem('chosenTree');
var treeData;
var treePersons = {};

document.addEventListener('DOMContentLoaded', async function() {
  //loadTree();
  // loadJSON(init(drawTree)); po co to? xD
  // rawTree = await loadRawTree();
  localStorage.setItem('selectedPersonID', 0);
  drawTree(); 
}, false);



async function uploadMedia() {

  var fileInput = document.getElementById('addMediaInput');
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("file", file);
  console.log(file);
  var mediaID = await api.postMedia(formData).then(response => response.id);
  console.log(mediaID);
  var newMedia = {
     mediaId: mediaID
  }
 await api.postPersonMedia(localStorage.selectedPersonID,newMedia);
  //pokazac media na teutadesa
}

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
  if (document.getElementById("gallery").style.visibility === "visible") {
    document.getElementById("gallery").style.visibility = "hidden";
    document.getElementById("gallery").innerHTML = "";    
  }
});

document.getElementById("showGallery").addEventListener("click", async function(event){ //nie chowa okienka po kliknieciu na div z dodawniem relacji
  event.stopPropagation();
  
  var div = document.getElementById("gallery");
  div.style.margin = "0px 0px 0px 300px";
  div.style.visibility = "visible";
  var personMedia = await api.getPersonMedia(localStorage.selectedPersonID);
  console.log(personMedia);
  personMedia.forEach(element => {
    let newPicture = document.createElement("a");
   
    //newPicture.href = element.url;
    let img = document.createElement("img");
    img.src = element.url;
    // img.style.width = "100px";
    // img.style.height = "100px";
    // img.style.margin = "5px";
    newPicture.appendChild(img);
    div.appendChild(newPicture);
  });
  
}, false);

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
  var posY = event.clientY - 80 + "px";
  document.getElementById("addRelation").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("addEventButton").addEventListener("click", function(event) {

  event.stopPropagation();
  document.getElementById("addEvent").style.visibility = "visible";
  var posX = event.clientX + "px";
  var posY = event.clientY - 80 + "px";
  document.getElementById("addEvent").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("addMediaButton").addEventListener("click", function(event) {

  event.stopPropagation();
  document.getElementById("addMedia").style.visibility = "visible";
  var posX = event.clientX + "px";
  var posY = event.clientY - 80 + "px";
  document.getElementById("addMedia").style.margin = posY + " 0px 0px " + posX;

}, false);

document.getElementById("deletePersonButton").addEventListener("click", function(event) {

  var decision = confirm("Are you sure?")

  if(decision){
    //wywalic z bazy ziomka i jego wszystkie powiazania
  }
  
}, false);

document.getElementById("addRelationButtonConfirm").addEventListener("click", async function(event) {
  var firstPersonID = localStorage.selectedPersonID;

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

  var addedPersonID = await api.postPerson(localStorage.currentTree, person).then(response =>response.id);  

  var relation = {
    firstPersonId: firstPersonID,
    secondPersonId: addedPersonID,
    type: document.getElementById("relationType").value
  }

  var tezd = await api.postPersonRelations(relation);
  console.log(addedPersonID);

  document.getElementById("personName").value = "";
  document.getElementById("personSurname").value = "";
  document.getElementById("addRelation").style.visibility = "hidden";
  location.reload();
}, false);

document.getElementById("addEventButtonConfirm").addEventListener("click", function(event) {
  var personID = localStorage.selectedPersonID;

  var event = {
    date: document.getElementById("eventDate").value,
    type: document.getElementById("eventType").value,
    description: document.getElementById("eventDescription").value 
  }

  console.log(event);
  api.postPersonEvent(personID, event); 


  document.getElementById("eventDescription").value = "";
  document.getElementById("addEvent").style.visibility = "hidden";
}, false);

document.getElementById("addMediaButtonConfirm").addEventListener("click", function(event) {
  //wyslac na serwer
  uploadMedia()
  document.getElementById("addMedia").style.visibility = "hidden";
}, false);


//loads tree Data from the server nad returns treeData ready for drawing library
 async function loadTree(){ //should be given id of the tree in the argument

  if(chosenTree !== "empty"){ //z jakiegos powodu z nullem nie dzialalo xdd
    var idOfFirstTree = chosenTree;
    localStorage.chosenTree = "empty";
  }else{
    console.log("czy chosen tree to null? ", localStorage.chosenTree);
    var idOfFirstTree = await api.getUserTrees(data.id).then(response =>response[0].id);
  }
  localStorage.setItem('currentTree', idOfFirstTree);
  let rawTree = await api.getPersonsFromTree(idOfFirstTree); //raw data from server
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
        // function(name, extra, innerIdOfTheNode) {
          //console.log("name: " + name);
          //console.log("id: " + extra.id);
          //console.log(name); nodeOnClick(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer)
        //},
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
    name: personData.details.name + " " + personData.details.surname,
    class: personData.details.sex === 'Male'? "man": "woman",
    extra: {
      id: personData.id,
      events: personData.details.events
    }
  };
  //console.log(personData, person.class);
  return person;
}

//returns object TreeData for our library on d3
function genTreeData(rawTreeData){
  let treeData = [genTreeDataForPerson(rawTreeData,rawTreeData[0].id)];

  return treeData;
}

function genTreeDataForPerson(persons, id){
  let treeData;
  let person = persons.find(person => person.id === id);

  treeData = personForGraph(person);
  treeData.marriages = [{}];
  treeData.marriages[0].spouse = {};
  treeData.marriages[0].children = [];

  for (var i = 0; i < person.relations.length; i++) { 
    switch (person.relations[i].type) {
      case "Marriage":
        if(person.details.sex === "Male"){
        treeData.marriages[0].spouse = personForGraph(persons.find(person1 => person1.id === person.relations[i].secondPersonId)); 
        }
        else{
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

async function nodeOnClick(name, extra){

  document.getElementById("cardImageDiv").style.visibility = "visible";
  
   await api.getPersonAvatar(extra.id).then(response=>{
    document.getElementById('cardImage').src  = response.url;
   }).catch(error=>{
    document.getElementById('cardImage').src  = "./img/unknown.jpg";
   });

  localStorage.setItem('selectedPersonID', extra.id); 
  document.getElementById("cardHeader").innerHTML=name;
  
}
