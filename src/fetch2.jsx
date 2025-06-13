import useFetch from "./fetch";
import { Link } from "react-router-dom";

function Fetch2() {
  const [user, error] = useFetch();

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      {user.map((users) => (
        <div key={users.id}>
          <Link to={`/users/${users.id}`}>{users.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Fetch2;
