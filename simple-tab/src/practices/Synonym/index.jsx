import "./styles.css";

import React, { useState } from "react";
import useFetch from "./useFetch";

const url = 'https://api.datamuse.com/words?ml='

const App = () => {
    const [word, setWord] = useState("");
    const {
        data: results, loading, fetchUrl
    } = useFetch()
    // TODO: Declare your state variables for holding synonyms and loading state

    async function getSynonyms(search) {
        if(!search) return
        const searchWord = search.trim().split(' ').join('+')
        fetchUrl(`${url}${searchWord}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement fetching synonyms
        await getSynonyms(word)
    };

    async function handleClickItem(search) {
        setWord(search)
        await getSynonyms(search)

    }

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
            {loading && <p>...Loading</p>}
            {results.length > 0 && (
                <ul>
                    {results.map(result => (
                        <li key={result.word} onClick={(() => handleClickItem(result.word))}>{result.word}</li>
                    ))}
                </ul>
            )}
            {results.length < 1 && !loading && <p>No results found</p>}
        </div>
    );
};

export default App;
