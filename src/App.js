import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ClassComponent from './components/ClassComponent/ClassComponent.js';
// import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent.jsx';
import Boton from './components/Boton/Boton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
       <ClassComponent titulo="Prop de componente de clase" numero={5}/>
       {/* <FunctionalComponent 
          titulo="Prop de comp de funcion"
          numero={3}
          booleano={true}
        /> */}
        <Boton />
      </header>
    </div>
  );
}

export default App;
