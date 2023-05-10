function Produto(props) {
  return <div className="col-12">
    <div className="row p-3 ps-0 border-bottom">
      <div className="col-3">
        <img className="img-fluid rounded" src="https://www.habibs.com.br/storage/products/images/12475_grid_fundo_mobile.png" alt="Produto" />
      </div>
      <div className="col-9">
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <b>{props.nome}</b>
          </small>
          <small>
            <b>{props.valor_total}</b>
          </small>
        </div>
        <small>
          {props.qtd} x {props.valor_unit}
        </small>

        <button className="btn btn-sm btn-outline-danger d-block mt-2"> Remover</button>
      </div>
    </div>
  </div>
}

export default Produto;