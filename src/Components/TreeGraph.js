import React from 'react'
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'

let data = {
    name: 'Parent',
    children: [{
        name: 'Child One'
    }, {
        name: 'Child Two'
    }]
};
 

const TreeGraph = (props) => (
<Tree
    data={data}
    height={400}
    width={400}/>

)

export default TreeGraph;
