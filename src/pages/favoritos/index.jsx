import "./style.css";
import NavBar from "../../components/navbar/index.jsx";
import Estabelecimento from "../../components/estabelecimento";
import api from "../../services/api";
import { useEffect, useState } from "react";


function Favoritos() {

  const[favoritos, setFavoritos] = useState([]);

  function ListarFavoritos(){
    api.get(`v1/estabelecimentos/favoritos`)
    .then(response => setFavoritos(response.data))
    .catch(err => console.log(err));
  }

  function DeletarFavorito(id){
    api.delete(`v1/estabelecimentos/favoritos/${id}`)
    .then(response => ListarFavoritos())
    .catch(err => console.log(err));
  }

  useEffect(() => {
    ListarFavoritos();
  }, [])
  return (
    <div className="container-fluid mt-page">
      <NavBar />

      <div className="row col-lg-8 offset-2">
        <div className="row m-2">
          <h3>Meus Favoritos</h3>
        </div>

        <div className="row m-2">
          {favoritos.map((estabelecimento) => {
            return (
              <Estabelecimento
                key={estabelecimento.idEstabelecimento}
                url_img={estabelecimento.urlLogo}
                nome={estabelecimento.nome}
                avaliacao={estabelecimento.avaliacao}
                categoria={estabelecimento.categoria}
                idEstabelecimento={estabelecimento.idEstabelecimento}
                idFavorito={estabelecimento.idFavorito}
                btnRemoverFavorito
                onClickRemoverFavorito={DeletarFavorito}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favoritos;
