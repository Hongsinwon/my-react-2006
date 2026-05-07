import axios from 'axios';

// Axios 인스턴스 생성(공통 함수)
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default apiClient;
