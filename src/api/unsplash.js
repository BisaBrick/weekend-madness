import axios from 'axios';

export default  axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID f5ab8a1e52207bb45d9f74a441fa85b86daf7576c4dded4bf282b01f124c9b2e',
  },
});