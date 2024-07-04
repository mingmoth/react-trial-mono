import useGame from './useGame';
import "./styles.css";

const App = () => {
    // Initialize board with null values
    const { board, gameDisplayHint, handleCellClick, resetGame } = useGame();

    return (
        <div className="App">
            <h1>Tic-Tac-Toe</h1>
            <h3>{gameDisplayHint()}</h3>
            <div className="board">
                {board.map((cell, index) => (
                    <div className="cell" key={index} onClick={() => handleCellClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <button className='reset-btn' onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default App;