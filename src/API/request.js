import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = 'https://710b-118-70-132-104.ngrok-free.app';
const login_path = '/client/login';

axios.interceptors.request.use((req) => {
  const jwt = Cookies.get('jwt');
  const newUrl = baseUrl + req.url;
  const Authorization = login_path === req.url ? undefined : `Bearer ${jwt}`;

  return {
    ...req,
    url: newUrl,
    headers: {
      ...req.headers,
      Authorization,
      'ngrok-skip-browser-warning': '1',
    },
  };
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
