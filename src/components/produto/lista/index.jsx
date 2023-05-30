import { Link } from "react-router-dom";
import "./style.css"

function Produto(props) {
  return (
    <>
      <div className="col-sm-6 mb-3 p-4 produto-lista">
        <Link onClick={(e) => props.onClickProduto(props.idProduto)}>
          <div className="row p-3 ps-0 border-bottom">
            <div className="col-3">
              <img className="img-fluid rounded" src={props.urlFoto} alt="" />
            </div>

            <div className="col-9">
              <span className="d-block"><b>{props.nome}</b></span>
              <small className="d-block">{props.descricao}</small>
              { props.vlPromocao > 0 ? <>
                <small className="d-inline-block mt-3 text-success">
                  {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.vlPromocao)}
                </small>
                <small className="d-inline-block mt-3 ms-4 preco-antigo">
                  {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.vlProduto)}
                </small> </>
              : <small className="d-inline-block mt-3">
                  {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.vlProduto)}
                </small>
              } 
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Produto;