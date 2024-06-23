import React, { useState } from "react";
import "./styles.css";

const App = () => {
    // Initialize board with null values
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    // TODO: Function to handle click on a cell
    const handleClick = (index) => {
        // Implement your code here
    };

    return (
        <div className="App">
            <h1>Tic-Tac-Toe</h1>
            <div className="board">
                {board.map((cell, index) => (
                    <div className="cell" key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;