import "../navbar/style.css"
import Logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {

  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  function Buscar(){
    navigate(`/busca?q=${busca}`)
  }

  function openSidebar(){
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  }

  function Logout(){
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessionCodCidade');
    localStorage.removeItem('sessionCidade');
    localStorage.removeItem('sessionUF');
    localStorage.removeItem('sessionNome');
    navigate('/login');
  };

  return <>
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img className="mt-1" src={Logo} /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ms-auto me-auto mt-1 col-4">
         <div className="input-group">
            <input onChange={(e) => setBusca(e.target.value)} type="text" className="form-control" placeholder="Procurar um restaurante..." aria-label="Search" />
            <button className="btn btn-danger" onClick={Buscar}  type="button" id="button-addon2"><i className="fas fa-search"></i> Buscar</button>
          </div>
        </div>

        <div className="mt-1">
          <Link to="/trocar-endereco" className="btn btn-outline-danger me-3"><i className="fa-solid fa-location-dot"></i> Entrega: {localStorage.getItem('sessionCidade')}</Link>
          {
            //<button className="btn btn-outline-danger me-3"><i className="fa-solid fa-right-to-bracket"></i> Acessar</button>
          }
          <div className="btn-group">
            <button type="button" className="btn btn-outline-danger dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/pedidos">Pedidos</Link></li>
              <li><Link className="dropdown-item" to="/favoritos">Favoritos</Link></li>
              <li><Link className="dropdown-item" to="/perfil">Perfil</Link></li>
              <li><Link className="dropdown-item" to="/enderecos">Meus Endereços</Link></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#" onClick={Logout}> Sair</a></li>
            </ul>
          </div>

          <button onClick={openSidebar} className="btn btn-outline-danger me-3"><i className="fa-solid fa-bag-shopping"></i> Sacola</button>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default NavBar;