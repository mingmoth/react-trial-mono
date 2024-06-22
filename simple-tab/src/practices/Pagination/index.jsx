import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api.js";

function App() {
    const [page, setPage] = useState(1)
    const [users, setUsers] = useState([])
    const [isLastPage, setIsLastPage] = useState(false)
    const [loading, setLoading] = useState(true);

    async function getUsers(page) {
        setLoading(true)
        try {
            const { users, hasMore } = await fetchUsers(page)
            setUsers([...users])
            setIsLastPage(!hasMore)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers(page)
    }, [page])

    return (
        <div>
            <h1>Implement Simple Pagination</h1>
            <h2>User List</h2>
            <button onClick={() => setPage(page - 1)} disabled={page <= 1 || loading} >Previous</button>
            <button onClick={() => setPage(page + 1)} disabled={isLastPage || loading}>Next</button>
            {(loading)
                ? <p>...Loading</p>
                : <ul>
                {users.length > 0 && users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>}
        </div>
    );
}

export default App;