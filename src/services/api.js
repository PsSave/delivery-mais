import axios from "axios";

//var sessionToken = localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : null;
  //o token da sessão já é puxado dentro da API

const api = axios.create({
  baseURL: 'http://177.11.52.138:8082/',
  //baseURL: 'http://0.tcp.sa.ngrok.io:14562/',
  //headers: {Authorization: `Bearer ${sessionToken}`} //todas as requisições já vão ter o token necessario
});

api.interceptors.request.use((req) => { // interceptar 
  if(localStorage.getItem('sessionToken')){
    req.headers.Authorization =  `Bearer ${localStorage.getItem('sessionToken')}`
  }

  return req;

}, (err) => {
  console.log(err);
})

api.interceptors.response.use((resp) => {
  return resp;
}, (err) => { // verificação de erro com o status: 401
  if(err.response.status === 401){
    localStorage.removeItem('sessionToken');
    document.location = '/login'; //altera o documento do navegar e redireciona para a /login
  }
  return err;
})

export default api;