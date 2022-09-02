// import logo from '../logo.svg';
import { useEffect } from "react";
import carro from "../img/carro.png"

const NavBar = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <img
        src="http://www.mafer.com.ar/images/maferparaweb2.png"
        alt="Logo Mafer Electronics"
        style={{
          paddingRight: "30px",
        }}
      />
      Mafer Electronics
      <div style={{ backgroundColor: "red" }}>
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
  );
};

export default NavBar;
