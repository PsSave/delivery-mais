function Produto(props) {
  return <div className="col-12">
    <div className="row p-3 ps-0 border-bottom">
      <div className="col-3">
        <img className="img-fluid rounded" src={props.urlFoto} alt="Produto" />
      </div>
      <div className="col-9">
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <b>{props.nome}</b>
          </small>
          <small>
            <b>{new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.vlTotal)}</b>
          </small>
        </div>
        <small>
        {props.qtd.toLocaleString('pt-BR', {minimumIntegerDigits: 2})} x {new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(props.vlUnitario)}
        </small>

        <button onClick={(e) => props.onClickRemover(props.idCarrinho)} className="btn btn-sm btn-outline-danger d-block mt-2"> Remover</button>
      </div>
    </div>
  </div>
}

export default Produto;