import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getData = async (endpoint) => {
    const { data } = await request.get(endpoint);
    return data;
  };
  

export default request;