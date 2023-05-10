import NavBar from "../../components/navbar";
import "./style.css";
import Star from "../../assets/star.png"
import Produto from "../../components/produto/lista/index.jsx";
import Footer from "../../components/footer";

function Cardapio(){
  return <div className="container-fluid mt-page cardapio">
    <NavBar />

    <div className="row col-lg-8 offset-lg-2">
      <div className="col-12">
        <img className="img-fluid rounded img-cardapio" src="https://www.nit.pt/wp-content/uploads/2021/03/dcfcd07e645d245babe887e5e2daa016.jpg" alt="" />
      </div>

      <div className="col-12 mt-4">
        <h2>Burguer King</h2>

        <span>R Coelho Lisboa, 365 - Cidade de Bauru - São Paulo - SP</span>

        <div className="mt-2 classificacao">
          <img src={Star} alt="" />
          <span className="ms-1">4.0</span>
          <span className="ms-3">18 avaliações</span>
        </div>

        <div className="mt-2 classificacao">
          <span className="ms-1"><b>Taxa de entrega:</b> R$ 5,00</span>
          <span className="ms-3"><b>Pedido mínimo:</b> R$ 25,00</span>
        </div>
      </div>
    
    
      {
        [1, 2, 3].map(e => {
          return <div className="row mt-5">
            <div>
              <h5>Destaque</h5>
            </div>
            {
              [1, 2, 3, 4, 5].map(p => {
                return <Produto />
              })
            }
          </div>
        })
      }
    </div>

    <Footer />
  </div>
}

export default Cardapio;