import "./style.css";
import {Dock} from 'react-dock';
import Produto from '../produto/sacola/index.jsx';
import { useContext, useEffect, useState } from "react";
import { SacolaContext } from "../../contexts/sacola";
import Sacola from "../../assets/bag.png"
function Sidebar(){

  const [show, setShow] = useState(false);
  const {sacola, setSacola, subtotalSacola, descontoSacola, totalSacola, entregaSacola} = useContext(SacolaContext);

  useEffect(() => {
    window.addEventListener('openSidebar', () => {
      setShow(true);
    });
  }, []);

  function ClickRemover(id){
    const novaSacola = sacola.filter((item, index, array) => {
      return item.idCarrinho != id;
    })

    setSacola(novaSacola);
  }

  return <Dock position="right" isVisible={show} onVisibleChange={(visible) => {
    setShow(visible);
  }}>
    {
      sacola.length == 0 ? 
      <div className="d-flex h-100 flex-column justify-content-center align-items-center text-center">
        <img src={Sacola} alt="Sacola vazia" />
        <small className="mt-2 text-secondary">Sua sacola está vazia</small>
      </div> :
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola</h5>

        <div className="row produtos">
          {
            sacola.map(produto => {
              return <Produto key={produto} nome={produto.nome}
                              vlTotal={produto.vlUnitario * produto.qtd}
                              qtd={produto.qtd}
                              vlUnitario={produto.vlUnitario}
                              idCarrinho={produto.idCarrinho}
                              urlFoto={produto.urlFoto}
                              onClickRemover={ClickRemover}/>
            })
          }
        </div>
        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <span>Subtotal</span>
            <span>{new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(subtotalSacola)}</span>
          </div>
          <div className="col-12 d-flex justify-content-between align-items-center mt-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Cupom" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-success" type="button" id="button-addon2">Applicar</button>
            </div>
            <div className="input-group justify-content-end">
              <span className="d-inline-block text-success">- {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(descontoSacola)}</span>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between align-items-center mt-2">
            <span>Taxa de Entrega</span>
            <span>{new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(entregaSacola)}</span>
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center mt-3">
            <b>Total</b>
            <h4>{new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(totalSacola)}</h4>
          </div>

          <button className="btn btn-lg btn-danger rounded-0 align-items-center btn-pedido">Finalizar Pedido</button>
        </div>
      </div>
    }
  </Dock>
}

export default Sidebar;