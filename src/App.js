// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ClassComponent from './components/ClassComponent/ClassComponent.js';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent.jsx';
// import Boton from './components/Boton/Boton';
// import Boton2 from './components/Boton/Boton2';
// import Parent from './componentss/Parent/Parent';
// import Counter from './components/Counter/Counter';
import CicloVida from './components/CicloVida/CicloVida';
import {useState} from 'react'


// const handleClick2 = () =>{
//   alert('Me dieron Click de otra forma');
// }

// const Titulo = () => {
//   return <h1>Hola soy el titulo</h1>
// }

function App() {
  const [ validacion, setvalidacion ] = useState(false)

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {
          validacion === true ? null : <CicloVida validacion={validacion} />
        }
        <ClassComponent />
        
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
