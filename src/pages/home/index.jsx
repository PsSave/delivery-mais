import NavBar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Estabelecimento from "../../components/estabelecimento/index.jsx"

function Home() {
  return (
    <>
      <NavBar />
      <Estabelecimento nome="Burguer King" avaliacao="4.7" url_img=""/>      
      <Estabelecimento nome="Mc Donalt's" avaliacao="4.5"/>
      <Estabelecimento nome="Habib's" avaliacao="4.8"/>
      <Estabelecimento nome="Subway" avaliacao="5.0"/>
      <Footer />
    </>
  );
}

export default Home;