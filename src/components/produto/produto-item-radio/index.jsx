function ProdutoItemRadio(props){
  return <div className="card mt-4">
    <div className="card-header d-flex justify-content-between">
      {props.titulo}
      {props.obrigatorio ?<span className="badge bg-secondary d-flex align-items-center">OBRIGATÓRIO</span>: null}
    </div>

    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="fomr-check-input ms-2" htmlFor="flexRadioDefault1">Borda fina</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label className="fomr-check-input ms-2" htmlFor="flexRadioDefault2">Borda com recheio de catupiry</label>
      </li>
      <li className="list-group-item">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
        <label className="fomr-check-input ms-2" htmlFor="flexRadioDefault3">Borda com cheddar</label>
      </li>
    </ul>
  </div>
}

export default ProdutoItemRadio;