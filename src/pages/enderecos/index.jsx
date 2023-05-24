import { useState } from "react";
import Endereco from "../../components/endereco/lista";
import NavBar from "../../components/navbar";
import api from "../../services/api.js";

function Enderecos() {

  const [enderecos, setEnderecos] = useState([]);

  function ListarEndereços(){
    api.get(`v1/usuarios/enderecos`)
  }

  return <div className="container-fluid mt-page">
    <NavBar />

    <div className="row col-lg-6 offset-lg-3">
      <div className="col-12 mt-4 d-flex justify-content-between">
        <h2 className="mt-2">Meus Endereços</h2>
        <button className="btn btn-sm btn-outline-danger">Adicionar Endereço</button>
      </div>

      <div className="row mt-5 ">
        {
          enderecos.map(e => {
            return <Endereco />
          })
        }
      </div>
    </div>
  </div>
  
}

export default Enderecos;