function Endereco(props) {
  return <div className="col-12 pt-3 pb-3 border-bottom">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <span className="d-block"><b>{props.endereco}
        {props.complemento ? ' - ' + props.complemento : null}</b></span>
        <small className="d-block">{props.bairro} - {props.cidade} - {props.uf}</small>
        <small className="d-inline-block me-3">CEP: {props.cep}</small>
        {
          props.indPadrao === 'S' ?
          <small className="text-danger d-inline-block">Endereço Principal</small>
        : null}
      </div>
      <div>
        { props.indPadrao !== 'S' ?
          <button className="btn btn-outline-secondary me-3 m-2">Tornar Padrão</button>
        : null
        }
        <button className="btn btn-outline-danger me-3 m-2" onClick={(e) => props.onClickEditEndereco(props.idEndereco)}>Editar</button>
        <button className="btn btn-danger m-2">Excluir</button>
      </div>
    </div>
  </div>

}

export default Endereco;