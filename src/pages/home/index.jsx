import NavBar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Categoria from "../../components/categoria/index.jsx"
import Banner from "../../components/banner/index.jsx"
import Estabelecimento from "../../components/estabelecimento/index.jsx"

function Home() {
  return ( 
    <>
      <div className="mt-page">
        <NavBar />

        <div className="row justify-content-center text-center">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) =>{
              return <Categoria url_imagem="https://cardapio.primeirobar.com.br/wp-content/uploads/2023/03/PRIMEIRO-Burger-Icone-300x300.png" />//componente categoria
            })
          }
        </div>

        <div className="row justify-content-center text-center m-2 mt-5">
          {
            [1, 2, 3, 4].map((e) => {
              return <Banner url_imagem="https://static.ifood-static.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-2.png" />
            })
          }
        </div>

        {
          [1, 2].map((destaque) =>{
            return <div className="row mt-5 m-2">
              <h4>Destaque: Entrega Grátis</h4>


            {
              [1, 2, 3, 4, 5, 6, 7, 8].map(estabelecimento => {
                return <Estabelecimento 
                                        url_img="https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/Burger-King-Novo-logo.png?mtime=20210125152539&focal=none&tmtime=20210726130340"
                                        nome="Burguer King" 
                                        avaliacao="4.5" 
                                        categoria="Lanche"/>
              })
            }
            </div>
          })
        }
        
        <Footer />
      </div>
    </>
  );
}

export default Home;