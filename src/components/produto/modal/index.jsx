import Modal from "react-modal/lib/components/Modal";
import CloseIcon from "../../../assets/close.png"
import "./style.css"
import ProdutoItemRadio from "../produto-item-radio";
import ProdutoItemCheckbox from "../produto-item-checkbox";

function ProdutoModal(props){
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
          <img className="img-fluid rounded img-produto-modal" src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=4x3&$p$f=eceb3e7" alt="" />
        </div>

        <div className="col-12 mt-4 ">
          <h4>Pizza 4 queijos</h4>
          <small className="d-block mt-2">
            Descrição 
          </small>

          <small className="mt-3 promocao">R$45,00</small>
          <small className="mt-3 ms-4 preco-antigo">R$60,00</small>
        </div>

        <div className="col-12 mb-4">
          <ProdutoItemRadio titulo="Escolha a borda" obrigatorio/>
          <ProdutoItemCheckbox titulo="Adicionais"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4 d-flex justify-content-end">
          <div>
            <button className="btn btn-outline-danger"><i class="fa-solid fa-minus"></i></button>
            <small className="m-3 button-qtd">01</small>
            <button className="btn btn-outline-danger"><i class="fa-solid fa-plus"></i></button>
            <button className="btn btn-danger ms-4">Adicionar a sacola (R$ 50,00)</button>
          </div>

        </div>
      </div>
    </div>
  </Modal>
}

export default ProdutoModal;