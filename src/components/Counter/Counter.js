import { useState } from 'react'

const Counter = () => {
  const [initialState, setInitialState] = useState(0)
    
  console.log('me renderizo de nuevo')

  const suma = () => {
    setInitialState(initialState+1);
  }  
  return (
    <div>
        Counter
        <h3>{initialState}</h3>
        <button onClick={suma}>Otro Boton</button>
        </div>
  )
}

export default Counter