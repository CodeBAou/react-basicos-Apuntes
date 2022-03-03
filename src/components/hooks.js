import React,{useState, useEffect} from 'react';

// useState es el hook para el manejo del estado de los componentes

/* Los hooks es la nueva forma de trabajar con los componentes en react 
* Hook significa "gancho" nos permiten enganchar funciones al componente y añadirle lógica

* hooks

    - Hook basicos mas utilizados
        . useState 
        . useEffect

    - Avanzados (igual en angunos proyectos no lo llegas a uilizar)
        . useContext
        . useRef
        . useReducer
        . userCallback
        . useMemo

    mas hooks en https://es.reactjs.org/docs/hooks-reference.html
*/


//NOTA! En este fichero se encuentran varios componentes para compactar los apuntes 
// pero es una mala practica cada componente debe estar en su propio fichero



//useState ___________________________________________________________________

//import React, {userState} from 'react';

/*Este componte funcional es un contador pero hecho con hooks */
export function HooksUseState(){

    /* Estructura useState:
        enbocamos useState , 
            undefined,  <<<< variable >>>>>>
            fn()    <<<<< funcion actualizar variable >>>>>>
        )

    ver estructura por consola: 
    */

    console.log("metodo useState:")
    console.log(useState());
    console.log("_____________");

    //definimos useState:
    //      1º valor -> nombre de variable
    //      2º valor -> funcion que se usa para actualizar la variable
    const [contador,setContador] = useState(0);

    //utilizamos useState en la arrow function sumar():
    const sumar = () => setContador(contador+1);
    //utilizamos useState en la arrow function restar():
    const restar = () => setContador(contador-1);

    return(
        <>
            <h2>Hooks - useState </h2>
            <p>{contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </>
    );

}







//hook - userEffect _______________________________________________________________

//import React,  {userEffect} from 'react';

//useEffect, nos permite representar el ciclo de vida de los componentes y segun estos 
//Se llama a una funcion pasada
//Se puede tener tantos useEffect como se necesiten

/*
* componentDidMount() (Montaje)
* componentDidUpdate() (Actualizacion)
* componentWillUnmount() (Desmontaje)
*/

//En este ejemplo se detecta el desplazamiento del scroll
export function HooksUserEffect(){

    const [scrollY,setScrollY] = useState(0);

    //Indica que useEffect solo se ejecute en la fase de montaje - FASE DE MONTAJE
    useEffect( () => {
        //Peticion API
        console.log("[]");
    },[]);

    /*
    Cada vez que se necesite renderizar este componente useEffect  - FASE DE ACTUALIZACION
    ejecutara todo lo que este dentro de la funcion,
    */
    useEffect( () => {
        console.log("Fase de Montaje");
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll",detectarScroll);
    } );

    //Solo se ejecuta cuando se produce un cambio en la variable scrollY - FASE ATUALIZACION "PARCIAL"
    useEffect( () => {
        console.log("Se modifico scrollY");
    },[scrollY]);


    //Se ejecua cuando react quita el componente - FASE DE DESMONTAJE
    useEffect(() => {
        //Si react detecta el return dentro de useEffect sabe que quieres ejecutar esto en la fase de desmontaje
        return() =>{
            //Aqui te desconectas de la base de dacto , api, borras escuchas de eventos, intervals etc...
        }

    });
   

    //NOTA!  Por buenas practicas es mejor siempre indicar su segundo prametro

    return(
        <>
            <h2>Hook - useEffect (ciclo de vida)</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    );
}

//userEffect - otra practica de utilizacion de hooks para los ciclos de vida de los componentes

//componente reloj
function Reloj({hora}){
    return <h3>{hora}</h3>;
}

export function HookUseEffectReloj(){
    
    const [hora,setHora]  = useState(new Date().toLocaleTimeString());
    const [visible,setVisible] = useState(false);

    useEffect( () => { 
        //Fase de actualizacion
        let temporizador;

        if(visible){
            temporizador = setInterval( ()=>{
                setHora(new Date().toLocaleTimeString());
            },1000);

        }else{
            clearInterval(temporizador);
            //Al crear un return dentro de useEffect lo que esta dentro se ejecuta en la fase de desmontaje
            return ()=>{
                console.log("Fase de desmontaje");
            }
        }

    },[visible])

    return(
        <>
            <h2>Hook useEffect - Reloj</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick = { () => setVisible(true)  } > Iniciar </button>
            <button onClick = { () => setVisible(false) } > Detener </button>
        </>
    );
}



