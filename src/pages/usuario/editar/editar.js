import React, { Component } from 'react'
import './editar.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

export class EditarUsuario extends Component {

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


    componentDidMount() {
        const personId = +this.props.match.params.id;
        if(personId){

        }
        
    }

    
    updatePerson = event => {
        event.preventDefault();
    
    const person = {
        id: this.state.id,
        name: this.state.name,
        pedido: this.state.pedido,
        valor: this.state.valor,
    };

    axios.put('http://localhost:8080/api/v1/person', person)
            .then(response => {
                if(response.data != null){
                    this.setState({"show":true});
                    setTimeout(()=>this.setState({"show":false}),3000);
                    //setTimeout(()=>this.setState({"show":false}),3000);

                } else {
                    this.setState({"show":false}),3000);
                }
            //     this.setState({ redirect: true })
            //     console.log(response)
            // })
            // .catch(error => {
            //     console.log(error)
            // })
    
    }

    changeHander = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        const { id } = this.state
        e.preventDefault();
        axios.put(`http://localhost:8080/api/v1/person/${id}`, this.state)
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
                    <form className="form" onSubmit={this.state.id ? this.updatePerson} id="">
                        <fieldset>
                            <legend>Atualizar Usuario</legend>
                            <div className="usuario-update">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="name" placeholder="Digite o novo nome do usuario" minLength="3" maxLength="50" required value={name} onChange={this.changeHander} />
                            </div>

                            <div className="usuario-update">
                                <label htmlFor="produto">Produto</label>
                                <input type="text" id="produto" name="produto" placeholder="Digite o novo produto comprado" minLength="3" maxLength="100" required value={produto} onChange={this.changeHander} />
                            </div>

                            <div className="usuario-update">
                                <label htmlFor="valor">Valor</label>
                                <input type="text" id="valor" name="valor" placeholder="Digite o novo valor" min="1" maxLength="999999999" required value={valor} onChange={this.changeHander} />
                            </div>
                            <Button type="submit" className="button-main-page" variant="success">Atualizar</Button>

                        </fieldset>
                    </form>
                </div>
            );
        }
    }

}

export default EditarUsuario
