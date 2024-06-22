import { useSynonContext, useFetchContext } from './SynonContext'

export default function SynonList() {
    const { setWord } = useSynonContext()
    const { results, loading, getSynonyms } = useFetchContext()

    async function handleClickItem(search) {
        setWord(search)
        await getSynonyms(search)

    }

    return (
        <>
            {loading && <p>...Loading</p>}
            {results.length > 0 && (
                <ul>
                    {results.map(result => (
                        <li key={result.word} onClick={(() => handleClickItem(result.word))}>{result.word}</li>
                    ))}
                </ul>
            )}
            {results.length < 1 && !loading && <p>No results found</p>}
        </>
    )
}