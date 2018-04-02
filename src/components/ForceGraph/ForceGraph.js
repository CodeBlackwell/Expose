import React from 'react';
import { ForceGraph, ForceGraphNode, ForceGraphArrowLink } from 'react-vis-force'

export default ({numberOfNodes, width, height, multiplier = 2}) => {
    function generateNode(id, color){
        return (
            <ForceGraphNode key={id} node={{id: `${id}`}} fill={`${color}`} />
        )
    }
    function generateLink (source, target, id){
        return(
            <ForceGraphArrowLink key={id} link={{ source: `${source}`, target: `${target}`}}/>
        )
    }

    function generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function generateRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // Generate nodes
    const nodes = [];
    for(let i = 0; i < numberOfNodes; i++) {
        nodes.push(generateNode(i, generateRandomColor()))
    }

    // Generate Links
    const links = [];
    for (let i = 0; i < numberOfNodes * multiplier; i++){
        let source = generateRandomInt(0, numberOfNodes - 1),
            target = generateRandomInt(0, numberOfNodes - 1);
        links.push(generateLink(source, target, i))
    }

    return (
        <ForceGraph simulationOptions={{ height, width }}>
            {links}
            {nodes}
        </ForceGraph>
    )

}