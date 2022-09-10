// import logo from './logo.svg';
import './App.css';
import '../src/css/5slider.css';
import '../src/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';

// import Slider from './components/sliderMain/Slider';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useEffect, useState} from 'react'


function App() {
  const stock = 10
  const [items, setItems] = useState(10);
  
  const sumar = () => items <= stock -1 ? setItems(items + 1) : alert('Se alcanzo el máximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('No hay valores negativos')
  
  
  
  return (
    <div className="App">
      
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      
      <NavBar items={items}/>
      
      {/* <Slider /> */}

      <header className="App-header">
        
        {/* <ClassComponent /> */}
        <Counter onClick={stock} sumar={sumar} restar={restar} items={items}/>
        
        {/* <Counter /> */}
        <ItemListContainer />
      </header>
      
      <script src="bower_components/aos/dist/aos.js"></script> 
      
      <script>
      AOS.init();
      </script>

    </div>
  );
}

export default App;
