const APIKEY = '73f8891cb9ce0ee7e5f8df47ab742b81';

const requests ={
    fetchTrendingAllWeek:`/trending/all/week?api_key=${APIKEY}`,
    fetchNetflixOriginal:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchComedy:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchAnimation:`/discover/movie?api_key=${APIKEY}&with_genres=16`,
    fetchHorror:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomance:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentary:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchCrime:`/discover/movie?api_key=${APIKEY}&with_genres=80`,
    fetchDrama:`/discover/movie?api_key=${APIKEY}&with_genres=18`,
    fetchFamily:`/discover/movie?api_key=${APIKEY}&with_genres=10751`,
    fetchFantasy:`/discover/movie?api_key=${APIKEY}&with_genres=14`,
    fetchHistory:`/discover/movie?api_key=${APIKEY}&with_genres=36`,
    fetchMusic:`/discover/movie?api_key=${APIKEY}&with_genres=10402`,
    fetchScienceFiction:`/discover/movie?api_key=${APIKEY}&with_genres=878`,

    
}

export default requests;