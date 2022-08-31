import { Component } from 'react';

// class ClassComponent extends Component {
//     render() {
//         console.log(this.props);
//         return (
//         <div>
//             <h2>Hola soy un {this.props.titulo}</h2>
//         </div>
//         );
//     }
// }

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            initialState: 0
        }
        this.estado = 'Estado Inicial'
    }
    suma = () => {
        this.setState({
            initialState: this.state.initialState + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Soy otro componente de clase</h1>
                <h2>{this.state.initialState}</h2>
                <h2>{this.estado}</h2>
                <button onClick={this.suma}>BotonSumador</button>
            </div>
        
        )
    }
}
export default ClassComponent;
// import './Classcomponent.styles.css';