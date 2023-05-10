import Star from "../../assets/star.png"
import "./style.css"

function Pedido(props) {
  return <div className="col-sm-6 mb-4 p-1 pedido">
    <a href="">
      <div className="row">
        <div className="col-3 ">
          <img className="img-pedido" src={props.url_img} alt="" />
        </div>
        <div className="col-9 p-1">
          <span className="d-block">{props.nome}</span>
          <small className="d-block text-danger">Pedido Nº {props.numero_pedido}</small>
          <small className="d-block">{props.qtd} itens - R$ {props.preco} - {props.data}</small>
          <div>
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />

          </div>
        </div>
      </div>
    </a>

  </div>
}

export default Pedido;