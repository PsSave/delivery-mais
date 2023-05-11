import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/logo-pb.png'
import Fundo from "../../assets/fundo-login.jpg"

function Cadastro(){
  return <> 
  <div className='row'>
    <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>
      <form className='cadastro-login mt-5'>
        <h3 className='mb-4'>Crie sua conta e faça seu pedido.</h3>
        <h6 className='mb-3'>Informe seus dados abaixo</h6>

        <div className='form-floating'>
          <input type="text" className='form-control' id='floatingInput' placeholder='Nome completo'/>
          <label htmlFor="floatingInput">Nome completo</label>
        </div>

        <div className='form-floating'>
          <input type="email" className='form-control' id='floatingInput' placeholder='E-mail'/>
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <div className='form-floating'>
              <input type="password" className='form-control' id='floatingInput' placeholder='Senha'/>
              <label htmlFor="floatingInput">Senha</label>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='form-floating'>
              <input type="password" className='form-control' id='floatingInput' placeholder='Senha'/>
              <label htmlFor="floatingInput">Confirmar senha</label>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8'>
            <div className='form-floating'>
              <input type="text" className='form-control' id='floatingInput' placeholder='Endereço'/>
              <label htmlFor="floatingInput">Endereço</label>
            </div>
          </div>
          <div className='col-lg-4'>
          <div className='form-floating'>
            <input type="text" className='form-control' id='floatingInput' placeholder='Complemento'/>
            <label htmlFor="floatingInput">Complemento</label>
          </div>
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-6'>
            <div className='form-floating'>
              <input type="text" className='form-control' id='floatingInput' placeholder='Bairro'/>
              <label htmlFor="floatingInput">Bairro</label>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='form-control mb-2'>
              <select name="cidades" id="cidades">
                <option value="">Cidades</option>
                <option value="">São Paulo - SP</option>
                <option value="">Bauru - SP</option>
                <option value="">Três Lagoas - MS</option>
                <option value="">Sorocaba - SP</option>
              </select>
            </div>
          </div>
        </div>

        <div className='form-floating'>
          <input type="text" className='form-control' id='floatingInput' placeholder='CEP'/>
          <label htmlFor="floatingInput">CEP</label>
        </div>

        <button className='w-100 btn btn-lg btn-danger'>Acessar</button>

        <div className='mt-5'>
          <Link to="/login">Já tenho uma conta. Fazer Login!</Link>
        </div>

        <img src={Logo} alt="" className='mt-5'/>
      </form>
    </div>

    <div className='col-sm-6 px-0 d-none d-sm-block'>
      <img className='background-cadastro' src={Fundo} alt="" />
    </div>
  </div>
  </>
}

export default Cadastro;