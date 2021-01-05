import axios from 'axios';

const pixabayApi = axios.create({
  baseURL: 'https://api.bing.microsoft.com/v7.0/images/search',
  headers: {
    'Ocp-Apim-Subscription-Key': '750797f1269c431c84d6ac344583c65d',
  }
});

export default pixabayApi;