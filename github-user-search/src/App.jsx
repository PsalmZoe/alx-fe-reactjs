import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error(error.message);
      setUserData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search fetchUserData={fetchUserData} />

      {userData && (
        <div className="mt-6 p-4 bg-white rounded shadow text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{userData.name || userData.login}</h2>
          <p className="text-gray-600">{userData.bio || "No bio available"}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 mt-2 inline-block"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
