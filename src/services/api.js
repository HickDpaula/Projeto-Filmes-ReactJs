//https://api.themoviedb.org/3/movie/550?api_key=58983363b4a7aa3c370129ffee3bdce9


import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;