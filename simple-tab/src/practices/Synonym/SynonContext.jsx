import { createContext, useContext, useState } from 'react'
import useFetch from './useFetch'

const SynonContext = createContext()
const FetchContext = createContext(null)

export function useSynonContext() {
    return useContext(SynonContext)
}

export function useFetchContext() {
    return useContext(FetchContext)
}

export default function SynonFetchProvider({ children }) {
    const url = 'https://api.datamuse.com/words?ml='
    const [word, setWord] = useState("")
    const {
        data: results, loading, fetchUrl
    } = useFetch()

    async function getSynonyms(search) {
        if(!search) return
        const searchWord = search.trim().split(' ').join('+')
        fetchUrl(`${url}${searchWord}`)
    }

    return (
        <SynonContext.Provider value={{ word, setWord }}>
            <FetchContext.Provider value={{ results, loading, getSynonyms }}>
                { children }
            </FetchContext.Provider>
        </SynonContext.Provider>
    )
}