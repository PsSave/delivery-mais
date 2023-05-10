import NavBar from "../../components/navbar";
import Pedido from "../../components/pedido";
function Pedidos() {
  return (
    <div className="container-fluid mt-page">
      <NavBar />

      <div className="row col-lg-8 offset-lg-2">
        <div className="col-12 mt-4">
          <h2 className="mt-2">Meus Pedidos</h2>
        </div>

        <div className="row mt-5 ">
          {[1, 2, 3, 4].map((e) => {
            return <Pedido 
                          url_img="https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/Burger-King-Novo-logo.png?mtime=20210125152539&focal=none&tmtime=20210726130340"
                          nome="Burguer King"
                          numero_pedido="45525"
                          qtd="2"
                          preco="25,00"
                          data="12/05/2023"/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
