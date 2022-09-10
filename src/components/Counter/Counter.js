// import { useState } from 'react'
import React, { useState } from "react";

const Counter = (props) => {
  //let o var no se renderiza en el dom
  //usestate queda la data en la app
 
  const [stock, setStock] = useState(10);
  const [items, setItems] = useState(0);
  
  
  const sumar = () => {
    if (stock > 0){
      setItems(items + 1)
      setStock(stock-1)
    }
  }
  const restar = () => {
    if (items > 0) {
      setItems(items - 1)
      setStock(stock + 1)
    }
  }

    return (
      <>
      <div>Tengo {items} items</div>
      <div>Stock {stock}</div>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      </>
    )
  
  };
  //   const [initialState, setInitialState] = useState(0)

  //   console.log('me renderizo de nuevo')

  //   const suma = () => {
  //     setInitialState(initialState+1);
  //   }
  //   return (
  //     <div>
  //         Counter
  //         <h3>{initialState}</h3>
  //         <button onClick={suma}>Otro Boton</button>
  //         </div>
  //   )
  // };

export default Counter;
