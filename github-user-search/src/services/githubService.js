const headers = process.env.REACT_APP_GITHUB_TOKEN
  ? { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` }
  : {};

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  let query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const response = await fetch(
    `https://api.github.com/search/users?q=${query.join("+")}`,
    { headers }
  );
  return response.json();
};
