import { getToken } from 'services/storage';

const { REACT_APP_ENDPOINT } = process.env;

const http = {
  get: async (url) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      credentials: 'same-origin',
      headers: {
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.json();
  },
  downloadFile: async (url) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      credentials: 'same-origin',
      headers: {
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${getToken()}`,
      },
      responseType: 'blob',
    });
    return response.blob();
  },
  post: async (url, body) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      method: 'post',
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    if (response.status === 400) {
      throw new Error();
    }
    return response.json();
  },
  put: async (url, body) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      method: 'put',
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    return response.json();
  },
  delete: async (url, body) => {
    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      method: 'delete',
      credentials: 'same-origin',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    if (response.status === 400) {
      throw new Error();
    }
    return response.json();
  },
  postFile: async (url, file) => {
    const data = new window.FormData();
    data.append('file', file);

    const response = await fetch(`${REACT_APP_ENDPOINT}${url}`, {
      method: 'POST',
      credentials: 'same-origin',
      body: data,
      headers: {
        referrer: REACT_APP_ENDPOINT,
        Authorization: `Bearer ${window.localStorage.getItem('id_token')}`,
      },
    });
    return response.json();
  },
};

export default http;
