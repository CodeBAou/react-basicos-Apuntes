import React,{Component} from "react";

//En este componente probamos el stado (State)

export default class Estado extends Component{

    constructor(props){

        super(props); //Heredar de clase Component
       
        this.state = {
            contador:0
        };
     
        //Actualizamos el estado cada segundo, 
        //para modificar this.state hay que utilizar el objecto this.setState()
        setInterval( 
            () => this.IncrementaInterval() ,1000);

        //Esto esta prohibido 
        //this.state.contador = 2; Siempre hay que utilizar el metodo this.state
    }

   IncrementaInterval(){
   
    this.setState({
        contador: this.state.contador+1
    });
  
   }

    render(){
        return(
            <div>
                <h2>El State</h2>
                <p key="time">{this.state.contador}</p>
            </div>
        );
    }
}