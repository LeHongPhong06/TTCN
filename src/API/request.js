import axios from 'axios';
import Cookies from 'js-cookie';

const jwt = Cookies.get('jwt');
const baseUrl = 'https://d1a3-118-70-132-104.ngrok-free.app';
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['ngrok-skip-browser-warning'] = '1';
axios.defaults.headers.common['Authorization'] = jwt ? `Bearer ${jwt}` : undefined;

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { baseUrl };
export default axios;
