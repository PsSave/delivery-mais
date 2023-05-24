import { useEffect, useState } from "react";
import NavBar from "../../components/navbar";
import api from "../../services/api.js";

function Perfil() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [erro, setErro] = useState('');

  function SalvarDados(){
    api.patch(`/v1/usuarios/`, {
      nome,
      email
    })
    .then(response => {
      setMsg('Dados carregados com sucesso')
      setTimeout(() => setMsg(''), 3000); 
    }).catch(err => {
      if (err.response) {
        setErro(err.response.data.erro);
        setTimeout(() => setErro(''), 3000); 
      } else {
        setErro("Ocorreu um erro na requisição.");
      }
    })
  }

  useEffect(() => {
    api.get(`/v1/usuarios/${localStorage.getItem("sessionId")}`)
    .then(response => {
      setNome(response.data[0].nome);
      setEmail(response.data[0].email);
    }).catch(err => console.log(err))
  }, []);

  return <div className="container-fluid mt-page">
      <NavBar />
      <div className="row col-lg-6 offset-lg-3">
        <div className="row m-2">
            <h3>Meu Perfil</h3>
        </div>
        <div className="row m-2">
          <form>
            <div className="mb-3">
              <label htmlFor="InputNome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="InputNome" aria-describedby="nome" autoComplete="off" onChange={(e) => setNome(e.target.value)} value={nome}/>
            </div>
            <div className="mb-5">
              <label htmlFor="InputEmail" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="InputEmail" aria-describedby="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-lg btn-danger" onClick={SalvarDados}>Salvar Dados</button>
            </div>

            {
              msg.length > 0 ? <div className="alert alert-success mt-4 text-center">{msg}</div> : null
            }

            {
              erro.length > 0 ? <div className="alert alert-danger mt-4 text-center">{erro}</div> : null
            }

          </form>
        </div>
      </div>
    </div>
}

export default Perfil;