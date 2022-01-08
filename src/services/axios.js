import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars' ,
})