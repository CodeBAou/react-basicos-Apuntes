import React from "react";

export default function PropiedadesComponent(props){
    return(
        <div>
            <h2>Propiedades Component</h2>
            <p>{props.nombrePropiedadPorDefecto}</p>
        </div>
    );
}

PropiedadesComponent.defaultProps = {
    nombrePropiedadPorDefecto : "default"
};

