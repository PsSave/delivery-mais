import NavBar from "../../components/navbar";

function Perfil() {
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
              <input type="text" className="form-control" id="InputNome" aria-describedby="nome" autoComplete="off"/>
            </div>
            <div className="mb-5">
              <label htmlFor="InputEmail" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="InputEmail" aria-describedby="email" autoComplete="off"/>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-lg btn-danger">Salvar Dados</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
}

export default Perfil;