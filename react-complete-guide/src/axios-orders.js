import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-cc391.firebaseio.com/'
});

export default instance;