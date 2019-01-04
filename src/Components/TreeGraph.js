import React from 'react'
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import faker from 'faker';



const data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two',
		gProps: {
			className: 'red-node',
			onClick: node =>
				alert(`Clicked ${node}!`)
		}
	}]
};


 

const TreeGraph = (props) => (
<Tree
    data={data}
    height={400}
    width={400}
    svgProps={{
		transform: 'rotate(90)',
         
        
	}}
    />
)

export default TreeGraph;
