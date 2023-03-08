import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = 'http://139.177.184.45:30581';
const login_path = '/api/auth/local';

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
    },
  };
});

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
