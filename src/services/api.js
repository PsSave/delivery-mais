import axios from "axios";

var sessionToken = localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : null;
  //o token da sessão já é puxado dentro da API

const api = axios.create({
  baseURL: 'http://177.11.52.138:8082/',
  //baseURL: 'http://0.tcp.sa.ngrok.io:14562/',
  headers: {Authorization: `Bearer ${sessionToken}`} //todas as requisições já vão ter o token necessario
});

export default api;