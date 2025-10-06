function UserProfile() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
      <img
        src="https://via.placeholder.com/120"
        alt="User Avatar"
        className="rounded-full mx-auto w-32 h-32"
      />
      <h1 className="text-2xl font-bold mt-4 text-orange-600">David Oche Agbidi</h1>
      <p className="text-gray-500">Visual & UX/UI Designer | Full-Stack Developer</p>
      <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
        Edit Profile
      </button>
    </div>
  );
}

export default UserProfile;
