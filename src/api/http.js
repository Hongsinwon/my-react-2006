import apiClient from './apiClient';

// 요청 함수 분리
export const get = async (url, params = {}) => {
  return apiClient.get(url, { params }).then((res) => res.data);
};

export const post = async (url, body) => {
  return apiClient.post(url, body).then((res) => res.data);
};

export const put = async (url, body) => {
  return apiClient.put(url, body).then((res) => res.data);
};

export const deleteRequest = async (url) => {
  return apiClinet.delete(url).then((res) => res.data);
};
