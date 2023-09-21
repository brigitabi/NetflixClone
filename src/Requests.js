// const key = "2b404baab7e7fc7561e3551d16370b4c" do not use the key, already deprecated
const key = process.env.REACT_APP_IMDB_API_KEY


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languague=en-US&page=1`, 
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&languague=en-US&page=1`, 
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languague=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&languague=en-US&page=1`,

    
};

export default requests;





