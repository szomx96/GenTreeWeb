import React, { Component}  from 'react';
import Treant from 'treant-js';

const config = {
    container: "#tree-simple"
};
const parent_node = {
    text: { name: "Parent node" }
};
const first_child = {
    parent: parent_node,
    text: { name: "First child" }
};
const second_child = {
    parent: parent_node,
    text: { name: "Second child" }
};
const simple_chart_config = [
    config, parent_node,
    first_child, second_child
];

//const my_chart = new Treant(simple_chart_config);
const My_chart = () => {
return Treant(simple_chart_config,  function() { alert( 'Tree Loaded' ) }) ;
//return <Treant jsonConfig={simple_chart_config} callback={()=>alert("asd")} />
}

class Test extends React.Component{
 render() {return <My_chart />}
}
    
export default Test;