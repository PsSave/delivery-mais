import axios from "axios";

var sessionToken = localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : null;

const api = axios.create({
  baseURL: 'http://177.11.52.138:8082/',
  headers: {Authorization: `Bearer ${sessionToken}`}
});

export default api;