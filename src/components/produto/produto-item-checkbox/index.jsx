function ProdutoItemCheckbox(props){
  return <div className="card mt-4">
    <div className="card-header d-flex justify-content-between">
      {props.titulo}
      {
      //props.obrigatorio ?<span className="badge bg-secondary d-flex align-items-center">OBRIGATÓRIO</span>: null
      }
    </div>

    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
          <label className="fomr-check-label ms-2" htmlFor="flexCheckDefault1">Bacon</label>
        </div>
        <div>
          <span className="text-danger">+ R$ 3,00</span>
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between">
        <div>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
          <label className="fomr-check-label ms-2" htmlFor="flexCheckDefault2">Cheddar</label>
        </div>
        <div>
          <span className="text-danger">+ R$ 5,50</span>
        </div>
      </li>

      <li className="list-group-item d-flex justify-content-between">
        <div>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
          <label className="fomr-check-label ms-2" htmlFor="flexCheckDefault3">Milho</label>
        </div>
        <div>
          <span className="text-danger">+ R$ 1,00</span>
        </div>
      </li>
    </ul>
  </div>
}

export default ProdutoItemCheckbox;