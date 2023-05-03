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
        <div class="ms-auto me-auto mt-1">
          <div className="input-group">
            <input type="text" class="form-control" placeholder="Procurar restaurante" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i> Buscar</button>
          </div>
        </div>

        <div className="mt-1">
          <button className="btn btn-outline-danger me-3"><i class="fa-solid fa-location-dot"></i> Entrega: São Paulo</button>
        </div>

      </div>
    </div>
  </nav>
  </>
}

export default NavBar;