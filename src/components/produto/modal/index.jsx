import Modal from "react-modal/lib/components/Modal";
import CloseIcon from "../../../assets/close.png"
import "./style.css"
import ProdutoItemRadio from "../produto-item-radio";
import ProdutoItemCheckbox from "../produto-item-checkbox";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { SacolaContext } from "../../../contexts/sacola";
import {v4 as uuidv4} from 'uuid';

function ProdutoModal(props){

  const {sacola, AddItemSacola} = useContext(SacolaContext);

  const [idProduto, setIdProduto] = useState(0);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [vlPromocao, setVlPromocao] = useState('');
  const [vlProduto, setVlProduto] = useState('');
  const [urlFoto, setUrlFoto] = useState('');
  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    api.get(`v1/produtos/${props.idProduto}`)
    .then(response => {
      setIdProduto(props.idProduto);
      setNome(response.data[0].nome);
      setDescricao(response.data[0].descricao);
      setVlPromocao(response.data[0].vlPromocao);
      setVlProduto(response.data[0].vlProduto);
      setUrlFoto(response.data[0].urlFoto);
      setQtd(1);
    }).catch(err => console.log(err));
  }, [props.idProduto])

  function ClickMais(){
    setQtd(qtd + 1);
  }

  function ClickMenos(){
    qtd > 1 ? setQtd(qtd - 1) : setQtd(1);
  }

  function AddItem(){
    const item = {
      idCarrinho: uuidv4(),
      idProduto: idProduto,
      nome: nome,
      qtd: qtd,
      vlUnitario: vlPromocao > 0 ? vlPromocao : vlProduto,
      urlFoto: urlFoto,
      detalhes: []
    }

    AddItemSacola(item);
    props.onRequestClose();
  }

  return <Modal isOpen={props.isOpen} //verifica se está aberto ou não
                onRequestClose={props.onRequestClose} //tratamento de fechar a tela
                overlayClassName="react-modal-overlay" //custon do componente
                className="react-modal-content">
    <button type="button" onClick={props.onRequestClose} className="react-modal-close">
      <img src={CloseIcon} alt="" />  
    </button>              

    <div className="container-fluid h-100 produto-modal">
      <div className="row detalhes-produtos">
        <div>
          <img className="img-fluid rounded img-produto-modal" src={urlFoto} alt="" />
        </div>

        <div className="col-12 mt-4 ">
          <h4>{nome}</h4>
          <small className="d-block mt-2">
            {descricao}
          </small>
          { vlPromocao > 0 ? <>
            <small className="mt-3 promocao">
              {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(vlPromocao)}
            </small>
            <small className="mt-3 ms-4 preco-antigo">
              {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(vlProduto)}
            </small></>
            : <small className="mt-3">
                {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(vlProduto)}
              </small>
          }
        </div>

        <div className="col-12 mb-4">
          <ProdutoItemRadio titulo="Escolha a borda" obrigatorio/>
          <ProdutoItemCheckbox titulo="Adicionais"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4 d-flex justify-content-end">
          <div>
            <button onClick={ClickMenos} className="btn btn-outline-danger"><i class="fa-solid fa-minus"></i></button>
            <span className="m-3 button-qtd">{qtd.toLocaleString('pt-BR', {
              minimumIntegerDigits: 2
            })}</span>
            <button onClick={ClickMais} className="btn btn-outline-danger"><i class="fa-solid fa-plus"></i></button>
            <button onClick={AddItem} className="btn btn-danger ms-4">Adicionar a sacola (
              {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(
                vlPromocao > 0 ? vlPromocao * qtd : vlProduto * qtd
              )}
              )</button>
          </div>

        </div>
      </div>
    </div>
  </Modal>
}

export default ProdutoModal;