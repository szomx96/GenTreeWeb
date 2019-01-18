import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));
document.getElementById('usernameText').innerHTML = data.username;

document.addEventListener('DOMContentLoaded', function() {
  loadTree();  
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

 var treeData = 



dTree.init(treeData, {
  target: "#graph",
  debug: true,
  height: 800,
  width: 1200,
  callbacks: {
    nodeClick: function(name, extra) {
      console.log(name);
    },
    textRenderer: function(name, extra, textClass) {
    	// THis callback is optinal but can be used to customize
      // how the text is rendered without having to rewrite the entire node
      // from screatch.
    	if (extra && extra.nickname)
      	name = name + " (" + extra.nickname + ")";
    	return "<p align='center' class='" + textClass + "'>" + name + "</p>";
    },
    nodeRenderer: function(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
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