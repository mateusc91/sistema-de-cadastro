import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './usuarios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

export default class Detalhes extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario:[]
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

            // const { id } = this.state
            // axios.put(`http://localhost:8080/api/v1/person/${id}`)
            //     .then(response => {
            //         console.log(response)
            //         this.setState({ usuario: response.data })
            //     })
            //     .catch(error => {
            //         console.log(error)
    
            //     })
    }

    rotaEditar(){
        <Redirect to="/editar" />;
    }

    render() {
        const { usuario } = this.state;
        return usuario.map((usuario, index) => (
            <div className="usuario-detalhes">
                <div key={index}>
                    <h5 className="displayUser">Usuario </h5>
                    <p className="displayUserInfo">ID: {usuario.id}</p>
                    <p className="displayUserInfo">Nome: {usuario.name}</p>
                    <p className="displayUserInfo">Produto: {usuario.produto}</p>
                    <p className="displayUserInfo">Valor: R$ {usuario.valor}</p>
                    

                    <Link to={`/usuario/${usuario.id}`}>
                    <Button className = "button-detalhes-page" variant="primary">Detalhes</Button>
                    </Link>

                   
                    <Button onClick={() => this.rotaEditar()}className = "button-detalhes-page" variant="warning">Alterar</Button>
                   

                    <Link to={`/${usuario.id}`}>
                    <Button className = "button-detalhes-page" variant="danger">Deletar</Button>
                    </Link>
   
                </div>
                
            </div>

        ))
    }
}

// render() {
//     const { usuario } = this.state

//     return usuario.map((usuario, index) => (
//         <div className="usuario-list">
//             <div key={index}>
//                 <h5>{usuario.name}</h5>

//                 <p><Link to = {`/usuarios/${usuario.id}`}>Detalhes</Link></p>
//                 <Button className = "button-main-page" variant="success" onClick="">Cadastrar</Button>{''}
//                 <Button className = "button-main-page" variant="danger" onClick="">Remover</Button>{''}
//                 <Button className = "button-main-page" variant="warning" onClick="">Alterar</Button>{''}
//                 <br/>
//             </div>

//         </div>

//     ))

// }