import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://react-burger.firebaseio.com/'
    baseURL: 'https://react-burger-81adc.firebaseio.com/'
});

export default instance;