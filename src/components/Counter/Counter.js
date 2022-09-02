// import { useState } from 'react'
import React, { useState } from "react";

const Counter = (props) => {
  //let o var no se renderiza en el dom
  //usestate queda la data en la app
 
  const stock = 10;
  const [items, setItems] = useState(10);

  const sumar = () => items <= stock -1 ? setItems(items + 1) : alert('Se alcanzo el máximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('No hay valores negativos')

    return (
      <>
      <div>Tengo {items} items / Counter</div>
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
