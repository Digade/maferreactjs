// import logo from '../logo.svg';
import { useEffect } from "react";
import carro from "../img/carro-blanco.png"
import logomafer from "../img/maferparaweb2.webp"
import '../css/5slider.css';
import '../css/main.css';


const NavBar = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
       <div className="sticky-top p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img 
                    src={logomafer} 
                    className="bi me-2" 
                    alt="Logo Mafer Electronics" 
                    style={{
                      paddingRight: "30px",
                    }}
                    />
                
                </a>
        
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="#contacto" className="nav-link px-2 text-white">Contacto</a></li>
                
                </ul>
        
                <div>
                    <img
                      src={carro}
                      alt="Logo Mafer Electronics"
                      style={{ 
                        height: "30px",
                        paddingRight: "30px",
                      }}
                    />{" "}
                    Carrito: {props.items}
                </div>
            </div>
      
              
          </div>
        </div>
      </div>

  );
};

export default NavBar;
