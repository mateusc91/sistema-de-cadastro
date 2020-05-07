import React, { Component } from 'react'
import './criar.css';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class CriarUsuario extends Component {
    constructor(props) {
        super(props)

        this.state = {

            id: "",
            name: "",
            produto: "",
            valor: "",

            redirect: false
        }

    }

    changeHander = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/person', this.state)
            .then(response => {
                this.setState({ redirect: true })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { redirect, name, produto, valor } = this.state;
        if (redirect) {
            return <Redirect to="/usuarios" />;
        } else {
            return (
                <div className="container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Criar Usuario</legend>
                            <div className="usuario-criar">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="name" placeholder="Digite o novo nome do usuario" minLength="3" maxLength="50" required value={name} onChange={this.changeHander} />
                            </div>

                            <div className="usuario-criar">
                                <label htmlFor="produto">Produto</label>
                                <input type="text" id="produto" name="produto" placeholder="Digite o novo produto comprado" minLength="3" maxLength="100" required value={produto} onChange={this.changeHander} />
                            </div>

                            <div className="usuario-criar">
                                <label htmlFor="valor">Valor</label>
                                <input type="text" id="valor" name="valor" placeholder="Digite o novo valor" min="1" maxLength="999999999" required value={valor} onChange={this.changeHander} />
                            </div>
                            <Button type="submit" className = "button-main-page" variant="success">Cadastrar</Button>

                        </fieldset>
                    </form>
                </div>
            );
        }
    }

}



export default CriarUsuario
