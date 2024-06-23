import React, { useState } from "react";
import "./styles.css";
import { useEffect } from "react";

function getEmptyBoard() {
    return Array(9).fill(null)
}

const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const App = () => {
    // Initialize board with null values
    const [board, setBoard] = useState(getEmptyBoard());
    const [isXNext, setIsXNext] = useState(true);
    const [isGameEnd, setIsGameEnd] = useState(false)
    const [winner, setWinner] = useState(null)

    function resetGame() {
        setBoard(getEmptyBoard())
        setIsGameEnd(false)
        setIsXNext(true)
        setWinner(null)
    }

    // TODO: Function to handle click on a cell
    const handleClick = (index) => {
        if(board[index] || isGameEnd) return
        // Implement your code here
        const newBoard = board.map((cell, idx) => {
            if(!cell && idx === index) {
                return cell = isXNext ? 'X' : 'O'
            }
            return cell
        })
        setBoard(newBoard)
        setIsXNext(!isXNext)
    };

    function checkAllOccupy() {
        return board.find(cell => cell === null) === undefined
    }

    function checkWin(player) {
        const playerIndexArray = board.reduce((acc, cell, index) => {
            if(cell === player) {
                acc.push(index)
            }
            return acc
        }, [])
        return winConditions.some(condition => {
            return condition.every(target => {
                return playerIndexArray.includes(target)
            })
        })
    }

    function checkGame() {
        if(checkWin('O')) {
            setWinner('O')
            setIsGameEnd(true)
        }
        if(checkWin('X')) {
            setWinner('X')
            setIsGameEnd(true)
        }
        if(checkAllOccupy()) {
            setIsGameEnd(true)
        }
    }

    function gameDisplayHint() {
        if(isGameEnd) {
            return winner
                ? `Winner: ${isXNext ? 'O' : 'X'}`
                : 'No Winner'
        }
        return `Next Player: ${isXNext ? 'X' : 'O'}`
    }

    useEffect(() => {
        checkGame()
    }, [board])

    return (
        <div className="App">
            <h1>Tic-Tac-Toe</h1>
            <h3>{gameDisplayHint()}</h3>
            <div className="board">
                {board.map((cell, index) => (
                    <div className="cell" key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <button className='reset-btn' onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default App;