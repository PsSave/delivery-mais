import { createContext, useState } from "react";

  const SacolaContext = createContext({});

  function SacolaProvider(props){
    const item = [{
      idCarrinho: 1,
      idProduto: 123,
      nome: "Pizza",
      qtd: 2,
      vlUnitario: 45,
      urlFoto: "https://www.habibs.com.br/storage/products/images/12475_grid_fundo_mobile.png",
      detalhes: []
    },
    {
      idCarrinho: 2,
      idProduto: 123,
      nome: "PizzaABC",
      qtd: 3,
      vlUnitario: 35,
      urlFoto: "https://www.habibs.com.br/storage/products/images/12475_grid_fundo_mobile.png",
      detalhes: []
    }]

    const [sacola, setSacola] = useState(item);

    return <SacolaContext.Provider value={{sacola, setSacola}}>
      {props.children}
    </SacolaContext.Provider>
  };

export {SacolaContext, SacolaProvider};