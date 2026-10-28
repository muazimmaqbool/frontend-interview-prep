import React, { useEffect, useState } from "react";

// Implement API response caching using localStorage.
// If the same URL is requested again within 5 minutes,
// return cached data instead of making another API call.

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const getApiResponse = async (url) => {
  // Check if data already exists in localStorage
  const cached = localStorage.getItem(url);

  if (cached) {
    try {
      // Convert stored JSON string back into an object
      const { data, timestamp } = JSON.parse(cached);

      // Check whether cached data is still valid
      // Example: If less than 5 minutes have passed, use cached data
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log("Returning cached data...");
        return data;
      }
    } catch {
      // Remove invalid cached data
      localStorage.removeItem(url);
    }
  }

  // If cache is missing or expired, fetch fresh data
  console.log("Fetching data from API...");

  const res=await fetch(url);
  if(!res.ok){
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data=await res.json()

  // Store API response with current timestamp
  localStorage.setItem(
    url,
    JSON.stringify({
      data,
      timestamp:Date.now(),
    })
  );

  return data;
};

const W_API_Chaching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        setLoading(true);

        // Wait for the cached or fetched API response
        const response = await getApiResponse(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Update state only if component is still mounted
        if (active) {
          setData(response);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>API Response Caching</h2>

      {data?.map((user) => (
        <div key={user.id}>
          <h4>{user.name} : {user.email}</h4>
        </div>
      ))}
    </div>
  );
};

/*
->How caching works:

        Component Mounts
              |
              v
        Check localStorage
              |
              v
        Is cached data available?
              |
            Yes / No
            |     |
            v     v
        Check   Fetch API            //Time-to-Live (TTL)
          TTL       |
          |        v
          |    Store response
          |    + timestamp
          v         |
        Valid?      |
          |         |
          v         v
        Return  cached/fetched data
              |
              v
          Update React UI
*/

export default W_API_Chaching;