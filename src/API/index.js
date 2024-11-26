import axios from 'axios'

const MovieAPI = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2NTc4YzY3MjcxOGRiODcyZTc0NzcwZTZlMTBiNCIsIm5iZiI6MTcyOTc0ODUxOS45NjIxMDgsInN1YiI6IjY3MTlkYmEzNDU0MmUzNzFmZTBhNDcyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v0UZR8wZlPmZxE68dWZHpJtBD5pX2qiHd13NAxf_Ic'

export const movieAPIInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    headers: {
        Authorization: `Bearer ${MovieAPI}`
    },
    responseType: 'json'
})