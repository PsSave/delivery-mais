import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/logo-pb.png'
import Fundo from "../../assets/fundo-login.jpg"

function Login(){
  return <> 
  <div className='row'>
    <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>
      <form className='form-login mt-5'>
        <h3 className='mb-4'>Peça seu delivery agora mesmo.</h3>
        <h6 className='mb-3'>Acesse sua conta</h6>

        <div className='form-floating'>
          <input type="email" className='form-control' id='floatingInput' placeholder='E-mail'/>
          <label htmlFor="floatingInput">E-mail</label>
        </div>
        <div className='form-floating'>
          <input type="password" className='form-control' id='floatingInput' placeholder='Senha'/>
          <label htmlFor="floatingInput">Senha</label>
        </div>

        <button className='w-100 btn btn-lg btn-danger'>Acessar</button>

        <div className='mt-5'>
          <Link to="/cadastro">Não tenho uma conta. Criar agora!</Link>
        </div>

        <img src={Logo} alt="" className='mt-5'/>
      </form>
    </div>

    <div className='col-sm-6 px-0 d-none d-sm-block'>
      <img className='background-login' src={Fundo} alt="" />
    </div>
  </div>
  </>
}

export default Login;