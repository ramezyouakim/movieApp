themovieBaseUrl = "https://api.themoviedb.org/";

export default {
    // we can create an env variables instead but since we are using one env i just leave it as it is
    themoviedbAPIKey: 'api_key=f9ac59d12d40f21e944a16dd10135860',
    movieImagesBaseUrl: 'https://image.tmdb.org/t/p/w500/',
    movieSearchBaseUrl: `${themovieBaseUrl}3/search/movie`,
    movieGenreBaseUrl: `${themovieBaseUrl}3/genre/movie/list`,
}