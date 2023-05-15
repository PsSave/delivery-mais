import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-pb.png";
import Fundo from "../../assets/fundo-login.jpg";
import "./style.css";

import SaltPassword from "../../services/md5";
import api from "../../services/api";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  function ProcessaLogin(e) {
    e.preventDefault();

    setSucesso('');
    setLoading(true);

    api.post('v1/usuarios/login', {
      email: email,
      senha: SaltPassword(senha)
    }).then(response => {
      //salvar no localStorage os dados do usuario
      localStorage.setItem('sessionToken', response.data.token);
      localStorage.setItem('sessionId', response.data.id_usuario);
      localStorage.setItem('sessionEmail', email);
      localStorage.setItem('sessionCodCidade', response.data.cod_cidade);
      localStorage.setItem('sessionCidade', response.data.cidade);
      localStorage.setItem('sessionUF', response.data.uf);
      setSucesso('S')
      navigate('/')
      console.log(response);
    }).catch(err => {
      setSucesso('N');
      setLoading(false);

      console.log(err);
    })
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center align-items-center text-center">
          <form className="form-login mt-5">
            <h3 className="mb-4">Peça seu delivery agora mesmo.</h3>
            <h6 className="mb-3">Acesse sua conta</h6>

            <div className="form-floating">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="E-mail"
              />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                className="form-control"
                id="floatingInput"
                placeholder="Senha"
              />
              <label htmlFor="floatingInput">Senha</label>
            </div>

            <button onClick={ProcessaLogin} className="w-100 btn btn-lg btn-danger">
              {loading ? <div>
                          <span className="spinner-border text-light" role="status"></span>
                          <span className="ms-2">Entrando...</span>
                          </div> : <span className="ms-2">Acessar</span> }
            </button>

            {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválido.</div> : null}

            <div className="mt-5">
              <Link to="/cadastro">Não tenho uma conta. Criar agora!</Link>
            </div>

            <img src={Logo} alt="" className="mt-5" />
          </form>
        </div>

        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img className="background-login" src={Fundo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
