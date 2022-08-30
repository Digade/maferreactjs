import './styles.css'

// const FunctionalComponent = ({props}) =>{
//     console.log(props)
//     return (
//         <div className="test-css">
//             <h3>Hola soy {props.titulo}</h3>
//         </div>
//     );
// };

const FunctionalComponent = ({titulo, numero, booleano}) =>{
    console.log(titulo, numero, booleano)
    return (
        <div className="test-css">
            <h3>Hola soy {titulo}, con el numero {numero}</h3>
        </div>
    );
};



export default FunctionalComponent;