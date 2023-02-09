const movies = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
};

export default movies;