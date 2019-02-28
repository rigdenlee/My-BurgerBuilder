import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactmyburgerbuilder.firebaseio.com'
});

export default instance;