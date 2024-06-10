import axios from 'axios';

const  Api = axios.create({
    baseURL: 'http://192.168.15.154:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default Api;
