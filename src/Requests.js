const key = 'c5b986fca0d87c67d9bc65fda5fb5ae6'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languague=en-US&page=1`, 
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&languague=en-US&page=1`, 
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&languague=en-US&page=2`,
    requestHorror: `https://api.themoviedb.ord/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`, 
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&languague=en-US&page=1`,
};

export default requests;


// https://api.themoviedb.org/3/movie/popular?api_key=c5b986fca0d87c67d9bc65fda5fb5ae6&languague=en-US&page=1