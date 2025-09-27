import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleUser, setSingleUser] = useState(null);

  // 🔹 fetch a single user by username
  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      setError(null);
      setSingleUser(null);

      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setSingleUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 advanced user search
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);
    setSingleUser(null);

    try {
      const data = await advancedUserSearch({ username, location, minRepos });
      setResults(data.items || []);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          GitHub Advanced Search
        </h2>

        <input
          type="text"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />

        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />

        <input
          type="number"
          placeholder="Minimum repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Advanced Search
          </button>

          <button
            type="button"
            onClick={() => username && fetchUserData(username)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Fetch Single User
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* 🔹 Single user result */}
        {singleUser && (
          <div className="p-4 bg-gray-50 rounded-lg shadow-md text-center">
            <img
              src={singleUser.avatar_url}
              alt={singleUser.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="font-bold text-xl mt-2">{singleUser.name || singleUser.login}</h3>
            <p className="text-gray-600">{singleUser.bio || "No bio available"}</p>
            <a
              href={singleUser.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View Profile
            </a>
          </div>
        )}

        {/* 🔹 Advanced search results */}
        <ul className="space-y-4 mt-6">
          {results.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
