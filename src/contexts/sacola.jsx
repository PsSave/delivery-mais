import { createContext, useEffect, useState } from "react";
import api from "../services/api";

  const SacolaContext = createContext({});

  function SacolaProvider(props){
 
    const [sacola, setSacola] = useState([]);
    const [subtotalSacola, setSubtotalSacola] = useState(0);
    const [descontoSacola, setDescontoSacola] = useState(0);
    const [entregaSacola, setEntregaSacola] = useState(0);  
    const [idCupomSacola, setIdCupomSacola] = useState(0);
    const [cupom, setCupom] = useState('');
    const [msgSacola, setMsgSacola] = useState('');
    const [totalSacola, setTotalSacola] = useState(0);  
    const [idEstabelecimentoSacola, setIdEstabelecimentoSacola] = useState(0);  

    function AddItemSacola(item){
      setSacola([...sacola, item]);
    }

    function RemoveItemSacola(id){
      const novaSacola = sacola.filter((item, index, array) => {
        return item.idCarrinho != id;
      })
  
      setSacola(novaSacola);
    }

    function ValidarCupom(){
      setMsgSacola('');

      api.get(`v1/cupons/validacao`, {
        params: {
          codCupom: cupom,
          valor: Math.trunc(subtotalSacola * 100),
          idEstabelecimento: idEstabelecimentoSacola
        }
      })
      .then(response => {
        if(response.data){
          let porcCupom = response.data.porcCupom;
          let vlCupom = response.data.vlCupom;

          setIdCupomSacola(response.data.idCupom);
          setDescontoSacola(vlCupom + (subtotalSacola + porcCupom / 100));
        } else {
          setIdCupomSacola(0);
          setDescontoSacola(0);
          setMsgSacola('Cupom inválido');
          setTimeout(() => setMsgSacola(''), 3000);

        }
      }).catch(err => {
        setIdCupomSacola(0);
        setDescontoSacola(0);
        setMsgSacola('Cupom inválido');
        setTimeout(() => setMsgSacola(''), 3000);
        console.log(err);
      })

    }

    useEffect(() => {
      if(cupom.length > 0) {
        ValidarCupom();
      }
    }, [subtotalSacola])

    useEffect(() => {
      let soma = sacola.reduce((a, b) => a + (b.vlUnitario * b.qtd), 0);

      setSubtotalSacola(soma);
    }, [sacola]);

    useEffect(() => {
      setTotalSacola(subtotalSacola - descontoSacola + entregaSacola);
    }, [subtotalSacola, descontoSacola, entregaSacola]);

    return <SacolaContext.Provider value={{sacola, setSacola, subtotalSacola, setSubtotalSacola,
                                          descontoSacola, setDescontoSacola, 
                                          entregaSacola, setEntregaSacola, idCupomSacola, setIdCupomSacola, totalSacola, setTotalSacola, idEstabelecimentoSacola, setIdEstabelecimentoSacola, AddItemSacola, RemoveItemSacola, ValidarCupom, cupom, setCupom, msgSacola, setMsgSacola}}>
      {props.children}
    </SacolaContext.Provider>
  };

export {SacolaContext, SacolaProvider};