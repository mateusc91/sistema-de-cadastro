import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


export class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/person')
            .then(response => {
                console.log(response)
                this.setState({ usuario: response.data })
            })
            .catch(error => {
                console.log(error)

            })
    }

    render() {
        return (
            <div className="main-menu">  
                    <h5>Selecione a opcao desejada</h5>
                    <Link to="/usuarios">
                    <Button className = "button-main-page" variant="primary">Mostrar todos os clientes</Button>
                    </Link>
                    
                    <Link to="/criar">
                    <Button className = "button-main-page" variant="success">Cadastrar novo cliente</Button>
                    </Link>
                    
                    
                    
                    
                    <br/>
            </div>

        )

    }

}

export default Main

