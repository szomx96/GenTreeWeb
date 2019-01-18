import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));
var treeData;

document.addEventListener('DOMContentLoaded', function() {
  loadTree();
  loadJSON(init(drawTree));
  drawTree(treeData);
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
        nodeClick: function (name, extra) {
          console.log(name);
        },
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
