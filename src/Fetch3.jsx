// Posts.jsx
import { useState, useEffect } from "react";

function Fetch3() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
    },5000)
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!posts.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch3;
