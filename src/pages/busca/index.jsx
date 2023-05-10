import "./style.css";
import NavBar from "../../components/navbar/index.jsx";
import Estabelecimento from "../../components/estabelecimento";

function Busca() {
  return (
    <div className="container-fluid mt-page">
      <NavBar />

      <div className="row m-2">
        <h3>Lanches</h3>
      </div>

      <div className="row m-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
          return (
            <Estabelecimento
              url_img="https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/Burger-King-Novo-logo.png?mtime=20210125152539&focal=none&tmtime=20210726130340"
              nome="Burguer King"
              avaliacao="4.5"
              categoria="Lanche"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Busca;
