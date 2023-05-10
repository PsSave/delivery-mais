import "./style.css"

function Produto() {
  return (
    <>
      <div className="col-sm-6 mb-3 p-4 produto-lista">
        <a href="">
          <div className="row p-3 ps-0 border-bottom">
            <div className="col-3">
              <img className="img-fluid rounded" src="https://www.saboravida.com.br/wp-content/uploads/2019/05/cardapio-burger-king.webp" alt="" />
            </div>

            <div className="col-9">
              <span className="d-block">Combo Burgão</span>
              <small className="d-block">Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, queijo derretido e um suculento hambúrguer de pura carne bovina.</small>
              <small className="d-inline-block mt-3 text-success">R$ 45,00</small>
              <small className="d-inline-block mt-3 ms-4 preco-antigo">R$ 60,00</small>

            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Produto;