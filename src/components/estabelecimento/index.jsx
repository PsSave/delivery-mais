import "./style.css";
import Star from "../../assets/star.png"
function Estabelecimento(props) {
  return (
    <>
      <div className="estabelecimento col-sm-6 col-md-4 col-lg-3 mb-3 pb-3 pt-3">
        <a href="">
          <div className="row">
            <div className="col-3">
              <img className="img-estabelecimento" src={props.url_img} alt="" />
            </div>

            <div className="col-9">
              <span>{props.nome}</span>

              <div className="avaliacao">
                <img src={Star} alt="" />
                <span>{props.avaliacao} - Lanches</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Estabelecimento;
