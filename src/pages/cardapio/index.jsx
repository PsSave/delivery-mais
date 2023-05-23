import NavBar from "../../components/navbar";
import "./style.css";
import Star from "../../assets/star.png"
import Produto from "../../components/produto/lista/index.jsx";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ProdutoModal from "../../components/produto/modal";
import notFav from "../../assets/favorito.png";
import Fav from "../../assets/favorito2.png";

function Cardapio(){

  const {id} = useParams();
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [avaliacao, setAvaliacao] = useState(0);
  const [qtdAvaliacao, setQtdAvaliacao] = useState(0);
  const [vlMinPedido, setVlMinPedido] = useState(0);
  const [vlTaxaEntrega, setVlTaxaEntrega] = useState(0);
  const [favorito, setFavorito ] = useState(false);
  const [idFavorito, setIdFavorito ] = useState(0);

  const [foto, setFoto] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [isProdutoOpen, setIsProdutoOpen] = useState(false);

  useEffect(()=>{
    api.get(`/v1/estabelecimentos/${id}`)
    .then(response => {
      setNome(response.data[0].nome);
      setEndereco(response.data[0].endereco);
      setComplemento(response.data[0].complemento);
      setBairro(response.data[0].bairro);
      setCidade(response.data[0].cidade);
      setUF(response.data[0].uf);
      setAvaliacao(response.data[0].avaliacao);
      setQtdAvaliacao(response.data[0].qtdAvaliacao);
      setFoto(response.data[0].urlFoto);
      setVlMinPedido(response.data[0].vlMinPedido);
      setVlTaxaEntrega(response.data[0].vlTaxaEntrega);
      setFavorito(response.data[0].idFavorito > 0);
      setIdFavorito(response.data[0].idFavorito);
    }).catch(err => {
      console.log(err);
    })

    api.get(`/v1/cardapios/${id}`)
    .then(response => {
      let categoriasUnica = response.data.map(item => item.categoria);

      categoriasUnica = categoriasUnica.filter((itemArray, i, arrayCompleto) => {
          return arrayCompleto.indexOf(itemArray) === i;
        })

        setCategorias(categoriasUnica);
        setProdutos(response.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  function openModalProduto(){
    setIsProdutoOpen(true);

  };

  function closeModalProduto(){
    setIsProdutoOpen(false);
  };

  function Favoritar(){
    api.post('/v1/estabelecimentos/favoritos',{
      id_estabelecimento: id
    }).then(response => {
      setFavorito(true);
      setIdFavorito(response.data.id_favorito)
    }).catch(err => {
      console.log(err);
    })
  }

  function RemoverFavorito(){
    api.delete(`/v1/estabelecimentos/favoritos/${idFavorito}`)
    .then(response => {
      setFavorito(false);
    }).catch(err => {
      console.log(err);
    })
  }

  return <div className="container-fluid mt-page cardapio">
    <NavBar />
    <ProdutoModal isOpen={isProdutoOpen}
                  onRequestClose={closeModalProduto}/>
    <div className="row col-lg-8 offset-lg-2">
      <div className="col-12">
        <img className="img-fluid rounded img-cardapio" src={foto} alt="" />
      </div>

      <div className="col-12 mt-4">
        <div className="d-flex justify-content-between">
          <h2>{nome}</h2>
          <div className="favorito">
            {
              favorito ? <img src={Fav} alt="" onClick={RemoverFavorito}/> : <img src={notFav} alt="" onClick={Favoritar}/>
            } 
          </div>
        </div>

        <div className="classificacao">
          <span>{endereco} {complemento.length > 0 ? ' - ' + complemento : null} - {bairro} - {cidade} - {uf}</span>
        </div>
        <div className="mt-2 classificacao">
          <img src={Star} alt="" />
          <span className="ms-1">{avaliacao.toFixed(1)}</span>
          <span className="ms-3">{qtdAvaliacao} avaliações</span>
        </div>

        <div className="mt-2 classificacao">
          <span className="ms-1"><b>Taxa de entrega:</b> {new Intl.NumberFormat('pt-BR',{ style: 'currency',
          currency: 'BRL'}).format(vlTaxaEntrega)}</span>
          <span className="ms-3"><b>Pedido mínimo:</b> {new Intl.NumberFormat('pt-BR',{ style: 'currency',
          currency: 'BRL'}).format(vlMinPedido)}</span>
        </div>
      </div>
    
    
      {
        categorias.map(categoria => {
          return <div key={categoria} className="row mt-5">
            <div>
              <h5>{categoria}</h5>
            </div>
            {
              produtos.map(p => {
                return p.categoria === categoria ? 
                <Produto  key={p.idProduto} 
                          nome={p.nome}
                          descricao={p.descricao}
                          vlProduto={p.vlProduto}
                          vlPromocao={p.vlPromocao}
                          urlFoto={p.urlFoto}
                          onClickProduto={openModalProduto}/> : null
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