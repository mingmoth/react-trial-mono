import "./styles.css"; // Do not remove this line
import React, { useState, useEffect } from "react";

const App = () => {
    const initialCards = [
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "E",
        "E",
        "F",
        "F"
    ];
    const [cards, setCards] = useState(initialCards);
    const [flipped, setFlipped] = useState(Array(12).fill(false));
    const [check, setCheck] = useState([]);
    const [completed, setCompleted] = useState([]);

    // Shuffle cards on mount
    useEffect(() => {
        setCards(initialCards.sort(() => Math.random() - 0.5));
    }, []);

    const handleFlip = (index) => {
        // TODO: Implement handleFlip
    };

    // TODO: Implement the logic to check for matching cards

    // TODO: Implement the logic to display the game status
    const gameStatus = "";

    return (
        <div className="container">
            {cards.map((card, index) => (
                <div
                    className="card-container"
                    key={index}
                    onClick={() => handleFlip(index)}
                >
                    <div
                        className={`card ${flipped[index] || completed.includes(index) ? "flip" : ""
                            }`}
                    >
                        <div
                            className={`front ${completed.includes(index) ? "matched" : ""}`}
                        ></div>
                        <div
                            className={`back ${completed.includes(index) ? "matched" : ""}`}
                        >
                            {card}
                        </div>
                    </div>
                </div>
            ))}
            {gameStatus}
        </div>
    );
};

export default App;
