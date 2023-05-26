import { useEffect, useState } from "react";
import Endereco from "../../components/endereco/lista";
import NavBar from "../../components/navbar";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

function TrocarEndereco() {
  const navigate = useNavigate();
  const[enderecos, setEnderecos] = useState([]);

  function ListarEndereços(){
    api.get(`v1/usuarios/enderecos`)
    .then(response => setEnderecos(response.data))
    .catch(err => console.log(err))
  };

  useEffect(()=>{
    ListarEndereços();
  }, [])

  function TrocarEndereco(e){
    localStorage.setItem('sessionCidade', e.cidade);
    localStorage.setItem('sessionUF', e.uf);
    localStorage.setItem('sessionCodCidade', e.codCidade);
    navigate('/');

  }
  return <div className="container-fluid mt-page">
    <NavBar />
    <div className="row col-lg-6 offset-lg-3">
      <div className="col-12 mt-4 d-flex justify-content-between">
        <h2 className="mt-2">Selecione o endereço</h2>
      </div>

      <div className="row mt-5 ">
        {
          enderecos.map(e => {
            return <Endereco 
            key={e.idEndereco}
            idEndereco={e.idEndereco}
            endereco={e.endereco}
            bairro={e.bairro}
            cidade={e.cidade}
            uf={e.uf}
            cep={e.cep}
            codCidade={e.codCidade}
            complemento={e.complemento}
            indPadrao={e.indPadrao}
            onClickTrocarEndereco={TrocarEndereco}/>
          })
        }

      </div>
    </div>
  </div>
  
}

export default TrocarEndereco;