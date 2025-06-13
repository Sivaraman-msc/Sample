import { useEffect, useState } from "react";

function useFetch() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => setUser(data))
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return [user, error];
}

export default useFetch;
