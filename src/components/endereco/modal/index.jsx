import Modal from "react-modal/lib/components/Modal";
import CloseIcon from "../../../assets/close.png"
import "./style.css"
import { useEffect, useState } from "react";
import api from "../../../services/api";

Modal.setAppElement('#root');

function EnderecoModal(props){

  const [idEndereco, setIdEndereco] = useState(0);
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [codCidade, setCodCidade] = useState('');
  const [cidades, setCidades] = useState([]); 
  const [cep, setCEP] = useState(''); 
  const [indPadrao, setIndPadrao] = useState('')
  const [mensagem, setMensagem] = useState("")

  function SalvarCidade(e) {
    const [cid, est] = e.target[e.target.selectedIndex].text.split(" - ");
    setCidade(cid);
    setUF(est);
    setCodCidade(e.target.value);
  }
  function SalvarEndereco(e) {
    setMensagem('');
    if(idEndereco > 0){
      api.patch(`v1/usuarios/enderecos/${idEndereco}`, {
        endereco,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        indPadrao,
        codCidade
      }).then(response => {
        props.onRequestClose(); //fechar o modal após concluido
      }).catch(err => {
        if(err.response) {
          setMensagem(err.response.data.erro);
        }else {
          setMensagem('Ocorreu um erro no salvamento dos dados')
        }
      });
    } else {
      api.post(`v1/usuarios/enderecos`, {
        endereco,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        indPadrao,
        codCidade
      }).then(response => {
        props.onRequestClose(); //fechar o modal após concluido
      }).catch(err => {
        if(err.response) {
          setMensagem(err.response.data.erro);
        }else {
          setMensagem('Ocorreu um erro no salvamento dos dados')
        }
      });
    }
  }
  useEffect(() => {
    setIdEndereco(props.dadosEndereco.idEndereco);
    setEndereco(props.dadosEndereco.endereco);
    setComplemento(props.dadosEndereco.complemento);
    setBairro(props.dadosEndereco.bairro);
    setCidade(props.dadosEndereco.cidade);
    setUF(props.dadosEndereco.uf);
    setCEP(props.dadosEndereco.cep)
    setCodCidade(props.dadosEndereco.codCidade);
    setIndPadrao('N');

    api.get("v1/cidades")
      .then((response) => {
        setCidades(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.isOpen]);

  return <Modal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose} 
                overlayClassName="react-modal-overlay" 
                className="react-modal-content">

    <button type="button" onClick={props.onRequestClose} className="react-modal-close">
      <img src={CloseIcon} alt="" />  
    </button>

    <div className="container-fluid h-100 endereco">
      <div className="col-12 mt-4">
        <h4>Editar Endereço</h4>

        <form>
          <div className="row">
            <div className="mb-3 col-8 d-inline-block">
              <label htmlFor="InputNome" className="form-label mb-1">Endereço</label>
              <input type="text" onChange={(e) => setEndereco(e.target.value)} value={endereco} className="form-control mb-2" id="InputNome" aria-describedby="nome"/>
            </div>

            <div className="mb-3 col-4 d-inline-block">
              <label htmlFor="InputNome" className="form-label mb-1">Compl.</label>
              <input type="text" onChange={(e) => setComplemento(e.target.value)} value={complemento} className="form-control mb-2" placeholder="ex: Ap 63" id="InputNome" aria-describedby="nome"/>
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-12">
              <label htmlFor="InputNome" className="form-label mb-1">Bairro</label>
              <input type="text" onChange={(e) => setBairro(e.target.value)} value={bairro} className="form-control mb-2" id="InputNome" aria-describedby="nome"/>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <label htmlFor="InputNome" className="form-label mb-1">Cidade</label>
                <div className="form-control mb-3">
                  <select name="cidades" id="cidades" onChange={SalvarCidade} value={codCidade}>
                    <option value="00000000">Cidades</option>
                    {cidades.map((cidade) => {
                      return (
                        <option key={cidade.codCidade} value={cidade.codCidade}>
                          {cidade.cidade} - {cidade.uf}
                        </option>
                      );
                    })}
                  </select>
                </div>
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-12">
              <label htmlFor="InputNome" className="form-label mb-1">CEP</label>
              <input type="text" onChange={(e) => setCEP(e.target.value)} value={cep} className="form-control mb-2" id="InputNome" aria-describedby="nome"/>
            </div>
          </div>
        </form>

        <div className="row mb-3">
          <div className="col-12 mt-3 d-flex justify-content-end align-items-center">
            <button onClick={SalvarEndereco} type="button mt-3" className="btn btn-danger btn-lg">Salvar Dados</button>
          </div>
        </div>

        {mensagem.length > 0 ? <div className="alert alert-danger mt-2 text-center">{mensagem}</div> : null}
      </div>
    </div> 
  </Modal>
}

export default EnderecoModal;