import React, {Component} from 'react';

//COMUNICACION ENTRE COMPONENTES

//Comunicacion de componente padre a hijo

/*
export default class Padre extends Component{

    render(){
        return(
          <>
            <h2>Comunicacion entre componentes </h2>
            <h3>De nodo padre a hijo </h3>
            <Hijo mensaje = "Mensaje para nodo Hijo"/>
          </>  
        );
    }

}

function Hijo(props){
    return <p>{props.mensaje}</p>;
}
*/


//Comunicacion de hijo a padre

/*
 React es unidireccional su flujo va siempre de padres a hijos pero existen formas para
 poder midificar el estado de un componente padre a partir de un evento en el  componente 
 hijo.

 En el siguiene ejemplo tenemos 2 componentes, el componente padre con un estado contador, un metodo
 Incremento y el nodo hijo, el nodo hijo contine un boton con el evento onClick que llama al metodo del
 padre.

 */


 export default class Padre extends Component{

    state = {
        contador:0,
    }

    incrementarContador = (e) => {
        this.setState({
            contador:this.state.contador + 1,
        });
    }

    render(){

        return(
          <>
            <h3>Componente padre </h3>
            <p>Contador: <b>{this.state.contador}</b></p>
            <Hijo incrementarContador = {this.incrementarContador} />
          </>  
        );

    }

}

function Hijo(props){
   return(
    <>
        <h2>Componente hijo</h2>
        <button onClick = {props.incrementarContador} > + </button>
    </>
   );
}




