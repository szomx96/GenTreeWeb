

createNode = (htmlElement, mEvent) => {

    //console.log("htmlelement" + htmlElement.toSource());

    // htmlElement.addEventListener("click", function(){
    //     console.log("onclick added??");
    //   });


    // Object.addEventListener("click", function(){
    //     console.log("clicked");
    //   });

}




showInfo = (htmlElement, mEvent) => {
    console.log(mEvent);
    //console.log(mEvent.srcElement.offsetParent.data.treenode);


    document.getElementById("cardImage").src=mEvent.srcElement.offsetParent.data.treenode.image;
    document.getElementById("cardHeader").innerHTML=mEvent.srcElement.offsetParent.data.treenode.text.name;
    document.getElementById("cardDesc").innerHTML=mEvent.srcElement.offsetParent.data.treenode.text.desc;
}



var chart_config = {    
    "chart": {
    "container": "#collapsable-example",

    "animateOnInit": true,
    "connectors": {
        "type": "bCurve",

    },
    "scrollbar": "native",
    "callback":{

      "onAfterClickCollapseSwitch": (htmlElement, mEvent) => {showInfo(htmlElement, mEvent)},
      "onTreeLoaded": (htmlElement, mEvent) => {createNode(htmlElement, mEvent)},

    },
    
    "node": {
        "collapsable": true
    },
    "animation": {
        "nodeAnimation": "easeOutBounce",
        "nodeSpeed": 700,
        "connectorsAnimation": "bounce",
        "connectorsSpeed": 700
    }
},
"nodeStructure": {
    "image": "./img/malory.png",
    "text": {
        "name": "Simple node",
        "title": "One of kind",
        "desc": "A basic example",
        "data-foo": " data Attribute for node",
        "contact": { 
            "val": "contact me",
            "href": "http://twitter.com/",
            "target": "_self"
        }
    },
    "children":[
        {
            "image": "./img/lana.png",
            
            "text": {
                "cos": "asdasdsa",
                "name": "Simple node",
                "title": "One of kind",
                "desc": "A basic example",
                "data-foo": " data Attribute for node",
                "contact": { 
                    "val": "contact me",
                    "href": "http://twitter.com/",
                    "target": "_self"
                }
            },
            
            "children": [
                {
                    "image": "./img/figgs.png"
                }
            ]
        },
        {
            "image": "./img/sterling.png",
            "children": [
                {
                    "image": "./img/woodhouse.png"
                }
            ]
        },
        {
            "children": [
                {
                    "image": "./img/cheryl.png"
                },
                {
                    "image": "./img/pam.png"
                }
            ]
        }
    ]
}

}