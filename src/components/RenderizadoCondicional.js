import React, {Component} from "react";

/*En este ejemplo se muestra como utilizar una estructura condicional que muestre 
    un compones Login (si no esta logueado) o un componente Logaut (si esta logueado)

 En este archivo se utiliza 3 componentes en el mismo fichero pero es para este ejemplo
 una buena practica es tener cada componente en un archivo diferente.
*/

//Simula boton Login
function Loin(){
    return (
        <div><h3>Login</h3></div>
    );
}

//Simula boton logueado
function Logout(){
    return (
        <div><h3>Logout</h3></div>
    );
}

export default class RenderizadoCondicional extends Component{
    
    constructor(props){

        super(props);
        
        this.state = {
            session:true,
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                
                { this.state.session ? <Loin/> : <Logout/> }
            
            </div>
        );
    }

}