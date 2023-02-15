import { Component } from "react";
import Button from 'react-bootstrap/Button';


class ComposantClass extends Component {
    state = {
        monTexte: "Hello 4TWIN8",
        valeur: 0
    }
    
    handleClick = () => {
        this.setState({
            valeur: this.state.valeur + 1
        })
    }


    render() {
        return (<>
            Ceci est un composant de classe
            <div>Le content de mon texte est:{this.state.monTexte}</div>

            <input type="button" onClick={() => this.handleClick()} value="Incrementer" />
            <Button variant="primary" onClick={() => this.handleClick()}>Incrementer</Button>

            <h2>{this.state.valeur}</h2>
        </>);
    }
}

export default ComposantClass;