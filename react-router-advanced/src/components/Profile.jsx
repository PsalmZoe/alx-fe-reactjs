import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested route content will appear here */}
    </div>
  );
}

export default Profile;
