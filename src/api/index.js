const apikey = import.meta.env.VITE_MOVIES_API_KEY
export function getHttp(url){
  return fetch(
    url,
    { 
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
           apikey,
          },
    }
  )
  .then((response) => response.json())
}
export const fetchTopRatedMovies = async () => {
  try {
    const response = await getHttp(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};