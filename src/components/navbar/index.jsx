import "../navbar/style.css"
import Logo from "../../assets/logo.png"

function NavBar() {
  return <>
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className="mt-1" src={Logo} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ms-auto me-auto mt-1 col-4">
         <div className="input-group">
            <input type="text" className="form-control" placeholder="Procurar um restaurante..." aria-label="Search" />
            <button className="btn btn-danger" type="button" id="button-addon2"><i className="fas fa-search"></i> Buscar</button>
          </div>
        </div>

        <div className="mt-1">
          <button className="btn btn-outline-danger me-3"><i className="fa-solid fa-location-dot"></i> Entrega: São Paulo</button>
          {
            //<button className="btn btn-outline-danger me-3"><i className="fa-solid fa-right-to-bracket"></i> Acessar</button>
          }
          <div className="btn-group">
            <button type="button" className="btn btn-outline-danger dropdown-toggle me-3" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Pedidos</a></li>
              <li><a className="dropdown-item" href="#">Favoritos</a></li>
              <li><a className="dropdown-item" href="#">Perfil</a></li>
              <li><a className="dropdown-item" href="#">Meus Endereços</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#"> Sair</a></li>
            </ul>
          </div>

          <button className="btn btn-outline-danger me-3"><i className="fa-solid fa-bag-shopping"></i> Sacola</button>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default NavBar;