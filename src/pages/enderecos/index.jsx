import { useEffect, useState } from "react";
import Endereco from "../../components/endereco/lista";
import NavBar from "../../components/navbar";
import api from "../../services/api.js";
import EnderecoModal from "../../components/endereco/modal";

function Enderecos() {

  const [enderecos, setEnderecos] = useState([]);
  const [isEnderecoOpen, setIsEnderecoOpen] = useState(false);
  const [dadosEndereco, setDadosEndereco] = useState([]);

  function ListarEndereços(){
    api.get(`v1/usuarios/enderecos`)
    .then(response => setEnderecos(response.data))
    .catch(err => console.log(err))
  }

  function openModalEndereco(id){ //responsavel por abrir o modal tanto no modo de adição ou edição, por isso vamos adicionar o parametro: id para fazer a convensão dos botões

    console.log(id);
    if(id > 0){
      api.get(`v1/usuarios/enderecos/${id}`)
      .then(response => {
        setDadosEndereco(response.data[0])
        setIsEnderecoOpen(true);

      }).catch(err => console.log(err));
    } else {
      setDadosEndereco([])
      setIsEnderecoOpen(true);
    }
  }

  function closeModalEndereco(){
    setIsEnderecoOpen(false);
    ListarEndereços();
  }

  useEffect(()=>{
    ListarEndereços();
  }, [])
  return <div className="container-fluid mt-page">
    <NavBar />
    <EnderecoModal isOpen={isEnderecoOpen}
                  onRequestClose={closeModalEndereco}
                  dadosEndereco={dadosEndereco}/>
    <div className="row col-lg-6 offset-lg-3">
      <div className="col-12 mt-4 d-flex justify-content-between">
        <h2 className="mt-2">Meus Endereços</h2>
        <button className="btn btn-sm btn-outline-danger" onClick={(e) => openModalEndereco(0)}>Adicionar Endereço</button>
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
            complemento={e.complemento}
            indPadrao={e.indPadrao}
            onClickEditEndereco={openModalEndereco}/>
          })
        }
      </div>
    </div>
  </div>
  
}

export default Enderecos;