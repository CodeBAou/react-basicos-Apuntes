import React from 'react';
import './estilo.css';
//modulo de estilos
import moduleStyle from "./estilo.module.css";

/* 
Formas de pasar estylos a elmentos:
    - Estilo css desde fichero externo
    - Estilo css en linea
    - Estilo css en un objecto en una variable
*/

/* 
El atributo HTML class en react es className
Los estilos en react se manejan como objectos
*/

export default function Estilos(){

    let myStyle = {
        color:"yellow",
        fontSize:"60px"
    }

    return (
        <section className="estilos">
            <h2 style={{borderRadius:".25rem", margin:"2rem", backgroundColor:"rgb(66, 77, 11 )", color:"white"}}>Estilos CSS en React</h2>
            <h3>Estilos en hoja de estylos externa</h3>
            <h5 style={myStyle}>Estilos a traves de un objecto en una variable</h5>
            <h3>Agregando Normalize con
                <br/>
                <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyle.error}>Estilos con modulos (Error)</h3>
            <h3 className={moduleStyle.success}>Estilos con modulos (success)</h3>
        </section>
    )
}