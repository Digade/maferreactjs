// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ClassComponent from './components/ClassComponent/ClassComponent.js';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent.jsx';
// import Boton from './components/Boton/Boton';
// import Boton2 from './components/Boton/Boton2';
// import Parent from './componentss/Parent/Parent';
import Counter from './components/Counter/Counter';
import CicloVida from './components/CicloVida/CicloVida';
import {useEffect, useState} from 'react'


// const handleClick2 = () =>{
//   alert('Me dieron Click de otra forma');
// }

// const Titulo = () => {
//   return <h1>Hola soy el titulo</h1>
// }

function App() {
  const stock = 10
  const [items, setItems] = useState(10);
  const [isRendered, setIsRendered] = useState(false)
  const sumar = () => items <= stock -1 ? setItems(items + 1) : alert('Se alcanzo el máximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('No hay valores negativos')
  const [ validacion, setvalidacion ] = useState(false)
  
  
  //retraso el efecto
  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true)
    }, 100)
  })
  //useEffect se renderiza/actualiza y [visualiza el parametro]. Si queda vacio lee la primera funcion y listo.
  useEffect(() => {
    isRendered && console.log(`tengo: ${items} items`)
  }, [items])

  useEffect(() => {
    console.log(!isRendered ? 'no renderizo' : 'renderizado')
  })

  useEffect(() => {
    console.log('hola, me inicialice!')
  },[])

  useEffect(() => {
    console.log('se actualizo el carrito')
  }, [items])
  

  return (
    <div className="App">
      <NavBar items={items}/>
      
      <header className="App-header">
        {
          validacion === true ? null : <CicloVida validacion={validacion} />
        }
        {/* <ClassComponent /> */}
        <Counter onClick={stock} sumar={sumar} restar={restar} items={items}/>
        <button onClick={()=> setvalidacion(!validacion)}>VALIDACION</button>
        {/* <Counter /> */}
{/*         
        <img src={logo} className="App-logo" alt="logo" />
       <ClassComponent titulo="Prop de componente de clase" numero={5}/>
       {/* <FunctionalComponent 
          titulo="Prop de comp de funcion"
          numero={3}
          booleano={true}
        /> 
        <Boton />
        <Boton2 funcion={handleClick2}/>
        
        <Parent esUnComponente={Titulo}>
          <div>
              <h1>Hello World</h1>
          </div>
          <div>
            <h2>Soy el hermano</h2>
          </div>
        </Parent> */}
      </header>
    </div>
  );
}

export default App;
