import NavBar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Categoria from "../../components/categoria/index.jsx";
import Banner from "../../components/banner/index.jsx";
import Estabelecimento from "../../components/estabelecimento/index.jsx";
import { useEffect, useState } from "react";
import api from "../../services/api.js";

function Home() {
  const [categorias, setCategorias] = useState([]);
  const [banners, setBanners] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    api.get('v1/categorias?cod_cidade=' + localStorage.getItem("sessionCodCidade"))
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    api.get('v1/banners?cod_cidade=' + localStorage.getItem("sessionCodCidade"))
      .then((response) => {
        setBanners(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    api.get('v1/destaques?cod_cidade=' + localStorage.getItem("sessionCodCidade"))
      .then((response) => {
        let gruposUnicos = response.data.map(grupo => grupo.descricao);

        gruposUnicos = gruposUnicos.filter((itemArray, i, arrayCompleto) => {
          return arrayCompleto.indexOf(itemArray) === i;
        })

        setGrupos(gruposUnicos);
        setDestaques(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="mt-page">
        <NavBar />

        <div className="row justify-content-center text-center">
          {categorias.map((categoria) => {
            return (
              <Categoria
                key={categoria.idCategoria}
                url_imagem={categoria.foto}
                descricao={categoria.categoria}
                idCategoria={categoria.idCategoria}
              />
            );
            //componente categoria
          })}
        </div>

        <div className="row justify-content-center text-center m-2 mt-5">
          {banners.map((banner) => {
            return (
              <Banner key={banner.idBanner} 
                      url_imagem={banner.foto}
                      descricao={banner.descricao}
                      idBanner={banner.idBanner} />
            );
          })}
        </div>

        {grupos.map((grupo) => {
          return (
            <div key={grupo} className="row mt-5 m-2">
              <h4>{grupo}</h4>

              {destaques.map((destaque) => {
                return destaque.descricao === grupo ? (
                  <Estabelecimento
                    key={destaque.idEstabelecimento}
                    url_img={destaque.urlLogo}
                    nome={destaque.nome}
                    avaliacao={destaque.avaliacao}
                    categoria={destaque.categoria}
                    idEstabelecimento={destaque.idEstabelecimento}
                  />
                ) : null;
              })}
            </div>
          );
        })}

        <Footer />
      </div>
    </>
  );
}

export default Home;
