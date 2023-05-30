import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/index.jsx";
import Busca from "./pages/busca/index.jsx";
import Favoritos from "./pages/favoritos/index.jsx";
import Perfil from "./pages/perfil/index.jsx";
import Enderecos from "./pages/enderecos/index.jsx";
import Pedidos from "./pages/pedidos";
import Sidebar from "./components/sidebar/index.jsx";
import Cardapio from "./pages/cardapio";
import Login from "./pages/login/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";
import TrocarEndereco from "./pages/trocar-endereco/index.jsx";
import PrivateRoute from "./components/privateRoute/index.jsx";

function Rotas() {
  return <>
    <Sidebar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PrivateRoute ><Home /></PrivateRoute>}/>
        <Route exact path="/busca" element={<Busca />}/>
        <Route exact path="/cardapio/:id" element={<Cardapio />}/>
        <Route exact path="/pedidos" element={<Pedidos />}/>
        <Route exact path="/favoritos" element={<Favoritos />}/>
        <Route exact path="/perfil" element={<Perfil />}/>
        <Route exact path="/enderecos" element={<Enderecos />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/cadastro" element={<Cadastro />}/>
        <Route exact path="/trocar-endereco" element={<TrocarEndereco />}/>

      </Routes>
    </BrowserRouter>
  </>;
}

export default Rotas;
