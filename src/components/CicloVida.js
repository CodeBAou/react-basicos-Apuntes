import React,{Component} from 'react';

export default class CicloVida extends Component{

    //constructor, inicializacion - METODO DEL CICLO DE VIDA
    constructor(props){
        //El componente aun no esta en el DOM
        super(props);
        console.log(0, "El componente se inicializa [Constructor]");
        this.state = {
            hora:new Date().toLocaleTimeString(),
        }

        this.temporizador = null;
    }

    //Cuando se monta el componente - METODO DEL CICLO DE VIDA
    componentDidMount(){
        //El componente ya esta en el DOM, react recomienda que cuando pidamos datos 
        // de una api o trabajemos con una base de datos lo hagamos aqui
        console.log(1,"El componente se incrusto en el DOM");
    }

    //Se actualizo una propiedad o prop - METODO DEL CICLO DE VIDA
    /*
        Puede recibir 2 parametros
            - Las props previas antes de la actualizacion
            - El state previo antes de la actualizacion
    */
    componentDidUpdate(prevProps, prevState){ 
        console.log(2,"El estado o las props del componente se han actualDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDSSizado");
        console.log(prevProps);
        console.log(prevState)
    }

    //Este metodo se ejecuta cuando el componente ya no exista - METODO DEL CICLO DE VIDA
    componentWillUnmount(){
        console.log(3,"El component ha sido eliminado del DOM");
    }

    //Actualiza el reloj cada segundo
    tictac = () => {
        this.temporizador = setInterval( ()=>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        },1000);  
    }

    //Iniciar el Reloj
    iniciar = () => {
        this.tictac();
    };

    //Deter el Reloj
    detener = () => {
        clearInterval(this.temporizador);
    };

    //Redibuja el componente cuando hay una actualizacion - METODO DEL CICLO DE VIDA
    render(){

        console.log(4,"El componente se redibuja [render]");
        return (
            <>
                <h2>Ciclo de Vida de los Componentes</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}