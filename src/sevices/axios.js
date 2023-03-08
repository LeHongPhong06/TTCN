import axios from './request';

export const getList = ({ page = 1, pageSize = 10 }) => {
  return axios.get(`/api/leads`, {
    params: {
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
      sort: 'createdAt:desc',
    },
  });
};

export const getInfo = (id) => {
  return axios.get(`/api/leads/${id}`);
};

export const login = (values) => {
  return axios.post(`/api/auth/local`, values);
};

export const createLead = (values) => {
  return axios.post(`/api/leads`, {
    data: values,
  });
};

export const updateLead = (values, id) => {
  return axios.put(`/api/leads/${id}`, {
    data: values,
  });
};

export const deleteLead = (id) => {
  return axios.delete(`/api/leads/${id}`);
};
