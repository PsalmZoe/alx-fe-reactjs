import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile/details">Go to Profile Details</Link>
    </div>
  );
}

export default Home;
