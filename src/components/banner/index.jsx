import { Link } from "react-router-dom";
import "./style.css";

function Banner(props) {
  return (
    <div className="banner col-sm-6 col-lg-3 mb-3 ">
      <Link to={`/busca?idBanner=${props.idBanner}$descr=${props.descricao}`}>
        <div>
          <img className="img-banner" src={props.url_imagem} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Banner;
