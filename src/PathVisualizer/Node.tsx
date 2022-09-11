import React, { Component } from 'react'
import './Pathfinding.css'

interface NodeProps {
    key: number
    row: number
    column: number
    startNode: boolean
    endNode: boolean
}

interface NodeState {
    color: string
}

export default class Node extends Component<NodeProps, NodeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            color: this.props.startNode ? 'green' : this.props.endNode ? 'red' : 'white'
        }
    }

    changeColor = () => {
        let newColor;
        newColor = this.state.color === 'white' ? 'black' : 'white';
        this.setState({color: newColor});
    }

  render() {
    return (
    <>
        <div 
        className="node"
        style={{backgroundColor: this.state.color}}
        onClick={() => { 
            if (!(this.props.startNode) && !(this.props.endNode)) {
                this.changeColor()
            }
        }}
        >
        </div> 
    </>
    )
  }
}