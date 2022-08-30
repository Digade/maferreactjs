import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        console.log(this.props);
        return (
        <div>
            <h2>Hola soy un {this.props.titulo}</h2>
        </div>
        );
    }
}

export default ClassComponent;
// import './Classcomponent.styles.css';