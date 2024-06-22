import React from "react";
import "./style.css";
import useFetch from "./useFetch";


function App() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const { data, loading, error } = useFetch(url)

    return (
        <div className="App">
            <h1>Creating a custom hook for data fetching</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <h2>User Info</h2>
                    <p>Name: {data.name}</p>
                    <p>Username: {data.username}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Website: {data.website}</p>

                    <h3>Address</h3>
                    <p>Street: {data.address.street}</p>
                    <p>Suite: {data.address.suite}</p>
                    <p>City: {data.address.city}</p>
                    <p>Zipcode: {data.address.zipcode}</p>

                    <h3>Company</h3>
                    <p>Name: {data.company.name}</p>
                    <p>Catch Phrase: {data.company.catchPhrase}</p>
                    <p>BS: {data.company.bs}</p>
                </div>
            )}
        </div>
    );
}

export default App;
