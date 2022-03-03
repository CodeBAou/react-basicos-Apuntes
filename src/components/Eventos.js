import React, {Component,setState} from "react";

/* En este fichero hay 2 componentes para mantener la informacion en el mismo fichero */




/*          Version ES6     */

//Ahora se pueden utilizar los hooks con componentes funcionales (a partir de 16.8 de react)

/*
    El método  bind() crea una nueva función, que cuando es llamada, asigna a su operador   
    this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera 
    entregados cuando la función es llamada. 

    Eventos se escriben igual que los defenido e w3c pero utilizando camel case, onclick =""  == ( React -> onClick={} )

*/

export class EventosES6 extends Component{

    constructor(props){
        
        super(props);
        
        this.state = {
            contador:0,
        };

        //Enlazar el metodo this de la case al contexto de las funciones semar y restar
        this.sumar  = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        //Gracias a bind() ahora podemos llamar a las funciones con this en el render
        // se recomienda utilizar bind() en el constructor
    }

    sumar(e){
        console.log("sumando");
        console.log(this); //si no se utiliza bind() devuelve undefined
        this.setState({
            contador:this.state.contador +1,
        });
    }

    restar(e){
        this.setState({
            contador:this.state.contador -1,
        });
    }

    /*This.state.contador marca undefined en consola, es por el this, this es el contexto
      hace referencia a un contexto, en javascript el contexto se define entre llaves, 
      es necesario utilizar   bind() -> Este metodo enlaza el this a un contexto para poderlo
      llamar en el contexto de la clase mas
    */
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>
               
            </div>
        );
    }
}


/* Version ES7 */

/*  SIMULA UN SEGUNDO COMPONENTE ES7
    se utilizan las Property Initializers 

    - Desaparece el constructor

*/

export class EventosES7 extends Component{

    //En la version ES6 aqui habia el consructor de la clase        
    state = {   //ya no es necesario poner this.state
        contador:0,
    };

   //Para evitar utilizar el bind() en el elemento button cambiamos los metodos por arrow functions
    sumar = (e) => { 
        console.log("sumando");
        console.log(this); //Se muestra el div sin mostrar uilizar bind()
        this.setState({
            contador:this.state.contador +1,
        });
    }

    restar = (e) => {
        this.setState({
            contador:this.state.contador -1,
        });
    }

    /*This.state.contador marca undefined en consola, es por el this, this es el contexto
      hace referencia a un contexto, en javascript el contexto se define entre llaves, 
      es necesario utilizar   bind() -> Este metodo enlaza el this a un contexto para poderlo
      llamar en el contexto de la clase mas
    */
    render(){
        return(
            <div>
                <h2>Eventos En Componentes de clase ES7</h2>
                
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>
               
            </div>
        );
    }

}


//Un componente para el ejemplo eventos personalizados

/*
function Boton(props){
    return <button onClick={props.MyEventoPersonalizado}>Boton hecho componente</button>;
}
*/

//En la arrow function de abajo hace lo mismo que la function comentada de arriba
/*
const Boton = (props) => (
    <button onClick={props.MyEventoPersonalizado}>Boton hecho componente</button>
);
*/

//Se simplifica el objecto de arriba aplicando desestructuracion al objecto props
const Boton = ( {MyEventoPersonalizado} ) => (
    <button onClick={MyEventoPersonalizado}>Boton hecho componente</button>
);

/* Eventos Nativos, Sintéticos & Personalizados*/
export class MasSobreEventos extends Component{
    
    /* Primera Funcion - handle (manejar) , puede poner el nombre del metodo que quieras 
       un manejador de eventos solo recibe el evento como parametro
    */
    handleClick = (e) => {
        console.log(e);
        console.log(e.target);
    }

    /* Segunda Funcion - Pasar parametros al manejador de eventos .
        para pasar un parametro en el navegador puedes utilizar una arrow function para manejar el evento y llamar al metodo 
    */
    handle2Click = (e, mensaje) => {
        console.log(mensaje);
    }

    render(){
        return(
            <div>
                <h2>Nativos, Sintéticos Personalizados</h2>

                <button onClick={this.handleClick}></button>
                <br/>
                <button onClick={ (e) => this.handle2Click(e,"parametro prueba")}>evento 2</button>
                <br/>
                <p> Evento personalizado,  se pasa el manejador como props al componente y se le asigna en el evento onClick la props pasadas</p>
                <br/>
                <Boton MyEventoPersonalizado ={ (e) => this.handle2Click(e,"parametro prueba") } />

            </div>
        );
    }
}