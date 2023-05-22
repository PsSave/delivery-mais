import "./style.css";
import NavBar from "../../components/navbar/index.jsx";
import Estabelecimento from "../../components/estabelecimento";
import api from "../../services/api.js";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


function Busca() {

  const location = useLocation();
    const [searchParams] = useSearchParams();
    const [resultado, setResultado] = useState([]);
    const [verMais, setVerMais] = useState(true);
    const [processando, setProcessando] = useState(false);
    const [pagina, setPagina] = useState(1);    

    var idCategoria = searchParams.get('id_cat');
    var idBanner = searchParams.get('id_banner');
    var descricao = searchParams.get('descr') ?? 'Busca';
    var busca = searchParams.get('q') ?? '';
    var pg = 0;

    function ListarEstabelecimentos(indReset){

        setProcessando(true);        

        pg = indReset ? 1 : pagina + 1;

        api.get('/v1/estabelecimentos', {
            params: {
                codCidade: localStorage.getItem('sessionCodCidade'),
                nome: busca,
                idCategoria: idCategoria,
                idBanner: idBanner,
                pagina: pg
            }
        })
        .then( response => {   
            if (indReset) {
                setResultado(response.data);
                setPagina(1);
            } else {
                setResultado((oldArray) => [...oldArray, ...response.data]);
                setPagina(pagina + 1);
            }
            
            setProcessando(false);            
            setVerMais(response.data.length >= 10);
        })
        .catch(err => {
            console.log(err);
            setProcessando(false);
        });
    }

    useEffect(() => {
      ListarEstabelecimentos(true);
    }, [location]);

  return (
    <div className="container-fluid mt-page">
      <NavBar />

      <div className="row m-2">
        <h3>{descricao}</h3>
        {busca.length > 0 ? <small className="mb-4 text-secondary">Pesquisando por: {busca}</small> : null}
      </div>

      <div className="row m-2">
        {resultado.map((e) => {
          return (
            <Estabelecimento
              key={e.idEstabelecimento}
              url_img={e.urlLogo}
              nome={e.nome}
              avaliacao={e.avaliacao}
              categoria={e.categoria}
              idEstabelecimento={e.idEstabelecimento}
            />
          );
        })}
      </div>
      
      { processando ? <div className="text-center m-5">
        <span className="spinner-grow spinner-grow-sm text-danger" role="status"></span>
        <span className="text-danger ms-2 ">Carregando restaurantes...</span>
      </div> : null}

      { !processando && verMais ? <div className="row m-5">
        <button onClick={(e) => ListarEstabelecimentos(false)} className="btn btn-outline-danger">
          Ver mais restaurantes
        </button>
      </div> : null}
    </div>
  );
}

export default Busca;