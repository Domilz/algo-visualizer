import React, { Component } from 'react'
import './Pathfinding.css'
import Node from './Node';


const rowLength = 10;
const columnLength = 20;
const _startNodeRow = 4;
const _startNodeColumn = 10;
const _endNodeRow = 6
const _endNodeColumn = 17

interface MyProps {
    
}

interface MyState {
    grid: JSX.Element[][],
    
}



export default class Pathfinding extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            grid: [],
        }
    }

    componentDidMount(): void {
        const grid = getGrid();
        this.setState({grid: grid});
    }

    render() {
        const grid = this.state.grid;
        return (
            <>
                <div className="grid">
                    {grid.map((row, rowIdx) => {
                        return(
                            <div key={rowIdx} className='row'>
                                {row.map((square, squareIdx) => {
                                    return (
                                        square
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}


const getGrid = () => {
    const grid = [];
    for (let row = 1; row <= rowLength; row++) {
        const currentRow = [];
        for (let column = 1; column <= columnLength; column++) {
            currentRow.push(<Node 
                key={(row+1)*(column+1)}
                row={row}
                column={column}
                startNode = {(row === _startNodeRow && column === _startNodeColumn) ? true : false}
                endNode = {(row === _endNodeRow && column === _endNodeColumn) ? true : false}
                />);
        }
        grid.push(currentRow);
    }
    return grid;
}
