import { useState } from 'react'

export default function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchUrl(url) {
        setLoading(true)
        setData([])
        try {
            const response = await fetch(`${url}&max=10`)
            const result = await response.json()
            setData(result)
        } catch (error) {
            console.error(error)
            setError(error)
            setData([])
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        error,
        fetchUrl,
    }
}