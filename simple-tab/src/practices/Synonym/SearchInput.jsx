import { useSynonContext, useFetchContext } from './SynonContext'

export default function SearchInput() {
    const { word, setWord } = useSynonContext()
    const { getSynonyms } = useFetchContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getSynonyms(word)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter a word"
            />
            <button type="submit" onClick={handleSubmit}>Find Synonyms</button>
        </form>
    )
}