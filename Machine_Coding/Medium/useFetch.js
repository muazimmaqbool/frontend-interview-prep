import { useEffect, useState } from "react";

//used inside Q_CUstom_useFetch.jsx component:
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        seterror(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setdata(result);
      } catch (err) {
        seterror(err.message);
      } finally {
        // Runs whether request succeeds or fails
        setloading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
