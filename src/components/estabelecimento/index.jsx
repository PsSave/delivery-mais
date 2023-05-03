function Estabelecimento(Props) {
  return (
    <>
      <img src={Props.url_img} alt="" />
      <br />
      <b>{Props.nome}</b><br />
      <i className="fa-solid fa-star"></i><p>{Props.avaliacao} - Lanches</p>
      <br /><br />
    </>
  );
}

export default Estabelecimento;