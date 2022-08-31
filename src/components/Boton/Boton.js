import './style.css';

const Boton = () => {
    const handleClick = () =>{
        alert('Me dieron Click');
    }
  return <button className="boton-prueba" onClick={handleClick}>Boton</button>;
  
};


export default Boton;