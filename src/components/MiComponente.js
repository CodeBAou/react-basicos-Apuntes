import React from "react";//{ DESESTRUCTURACION , (para llamar directamente a Component)}
import PropiedadesComponent from "./PropiedadesComponent.js";
import PropTypes from 'prop-types'; // ES6

/*
    import React from "react";     
    class Componente extends React.Component{  }
*/

//Componente expresado______________________
//const MiComponente = props => <h2>{props.msg+" - expresado"}</h2>;

const MiComponente = (props) =>{ 
  return <div>

            <h1>Mi Componente</h1>

            <ul>
              <li>{props.cadena}</li>
              <li>{props.numero}</li>
              <li>{props.booleano}</li>
              <li>{props.objecto.nombre}</li>
              <li>{props.objecto.correo}</li>
              <li>{props.arreglo.join(",")}</li>
              <li>{props.arreglo.map(props.elementoFuncion).join(" . ")}</li>
            </ul>

            <div>
              <h2>Elemento React</h2>
              {props.elementoReact}
            </div>

            <div>
              <h2>Aqui ingresamos el segundo componente</h2>
              {props.pasoComponente}
            </div>
            
            <div>
              <PropiedadesComponent/>
            </div>
        </div>;
}

/*
class Componente extends Component{
    //Recogemos una propiedad
    render(){
      return <h2>{this.props.msg}</h2>;   
    }
}
*/

//Definimos los tipos de dato que deben tener las propiedades
MiComponente.propTypes = {
  cadena:          PropTypes.string,      // Tipo string
  numero:          PropTypes.number,      // Tipo number
  booleano:        PropTypes.bool,        // Tipo bool
  objecto:         PropTypes.object,      // Tipo Object
  arreglo:         PropTypes.array,       // Tipo Array
  elementoFuncion: PropTypes.func         // Tipo Function
}

export default MiComponente;