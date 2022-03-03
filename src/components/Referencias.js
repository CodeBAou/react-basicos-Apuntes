import React, { useRef } from 'react';

/*  Referencias
    Este Componente se pone un ejemplo de uso de referencias de react, contiene un boton (se le crea una referencia)
    y una lista de enlaces que simulan un menu (se crea una referencia a su contenedor nav). El boton muestra y oculta el menu
    acediendo a los elementos por referencia de react. 
*/
export default function Referencias(){
    
        //this.myref = createRef();//   Component de Clase
        // {useRef} : this.myref = useRef(); // Component Funcional
        let refMenuBtn = useRef();
        let refMenu    = useRef();

        /*
        Es un objecto con la propiedad current que contiene el elemento,
        si se elimina el component la propiedad current para a null
        */
        console.log(refMenuBtn); 
        console.log(refMenu);

        const handleToggleMenu = (e)  => {
           // Abrir cerrar menu del elemento menu utilizando referencias
            if(refMenuBtn.current.textContent === 'Menu'){
                refMenuBtn.current.textContent = "Cerrar";
                refMenu.current.style.display ="block";
            }else{
                refMenuBtn.current.textContent = "Menu";
                refMenu.current.style.display ="none";
            }
        }

        return(
            <>
                <h2>Referenias</h2>
                <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
                <nav id="menu" ref={refMenu}>
                    <br/>
                    <a href="#">Seccion 1</a>
                    <br/>
                    <a href="#">Seccion 2</a>
                    <br/>
                    <a href="#">Seccion 3</a>
                    <br/>
                    <a href="#">Seccion 4</a>
                    <br/>
                    <a href="#">Seccion 5</a>
                    <br/>
                </nav>
            </>
        );
    }

  
