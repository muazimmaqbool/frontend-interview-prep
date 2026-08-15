import React from 'react'
import useFetch from './useFetch'
/*
Question:
    Build a reusable custom React hook called useFetch that fetches data from an API.

Requirements:
    -> The hook should accept an API URL.
    -> It should make the API request when the component mounts.
    -> Maintain and return:
                            data
                            loading
                            error
    -> Handle API errors properly.
    -> Show loading and error states in the UI.
    -> The hook should refetch when the URL changes.
*/
const Q_Custom_useFetch = () => {
    //using custom useFetch here it's inside useFetch.js file
    const{data:users,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");
    // console.log("users fetched:",users)
    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>Error: {error}</h2>
    }
  return (
    <div>
        <h2>Users</h2>
        {users && users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}
//How the Hook Works:
/*
        useFetch(url)
            ↓
        useEffect runs
            ↓
        fetch(url)
            ↓
    ┌───────────────┐
    │               │
    Success          Error
    ↓               ↓
    setData()       setError()
    │               │
    └───────┬───────┘
            ↓
        setLoading(false)

*/

export default Q_Custom_useFetch