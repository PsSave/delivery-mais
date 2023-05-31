import { createContext, useEffect, useState } from "react";

  const SacolaContext = createContext({});

  function SacolaProvider(props){
 
    const [sacola, setSacola] = useState([]);
    const [subtotalSacola, setSubtotalSacola] = useState(0);
    const [descontoSacola, setDescontoSacola] = useState(0);
    const [entregaSacola, setEntregaSacola] = useState(0);  
    const [idCupomSacola, setIdCupomSacola] = useState(0);  
    const [totalSacola, setTotalSacola] = useState(0);  
    const [idEstabelecimentoSacola, setIdEstabelecimentoSacola] = useState(0);  

    function AddItemSacola(item){
      setSacola([...sacola, item]);
    }

    useEffect(() => {
      let soma = sacola.reduce((a, b) => a + (b.vlUnitario * b.qtd), 0);

      setSubtotalSacola(soma);
    }, [sacola]);

    useEffect(() => {

      setTotalSacola(subtotalSacola - descontoSacola + entregaSacola);
    }, [subtotalSacola, descontoSacola, entregaSacola]);

    return <SacolaContext.Provider value={{sacola, setSacola, subtotalSacola, setSubtotalSacola,
                                          descontoSacola, setDescontoSacola, 
                                          entregaSacola, setEntregaSacola, idCupomSacola, setIdCupomSacola, totalSacola, setTotalSacola, idEstabelecimentoSacola, setIdEstabelecimentoSacola, AddItemSacola}}>
      {props.children}
    </SacolaContext.Provider>
  };

export {SacolaContext, SacolaProvider};