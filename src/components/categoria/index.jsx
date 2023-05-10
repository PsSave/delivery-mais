import { Link } from "react-router-dom";
import "../categoria/style.css"


function Categoria(props) {
  return <>
    <div className="categoria col-4 col-sm-3 col-md-2 col-lg-1 ">
      <Link to="/busca">
        <div>
          <img className="img-categoria" src={props.url_imagem} alt="Categoria" />
        </div>
        <span>Categoria</span>
      </Link>
    </div>
  </>

}

export default Categoria;
