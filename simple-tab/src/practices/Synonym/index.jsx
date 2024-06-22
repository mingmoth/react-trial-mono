import "./styles.css";

import React, { useState } from "react";

const App = () => {
    const [word, setWord] = useState("");
    // TODO: Declare your state variables for holding synonyms and loading state

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement fetching synonyms
    };

    return (
        <div className="App">
            <h1>Fetch all synonyms for a given word</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Enter a word"
                />
                <button type="submit">Find Synonyms</button>
            </form>
            {/* TODO: Display loading state or fetched synonyms */}
        </div>
    );
};

export default App;
