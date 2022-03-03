import React, {useState} from 'react';

/* 
    Cambios de html a React
    - for --> htmlFor
    - change  --> onChange
    - checked --> defaultChecked
    - seleted --> defaultSelected
    - submit  --> onSubmit
*/

/*

//Formulario Simple en este componente tenemos un estado por campo del componente

export default function Formularios(){

    const [nombre,setNombre]     = useState("");
    const [sabor,setSabor]       = useState("");
    const [lenguaje,setLenguaje] = useState("");
    const [terminos,setTerminos] = useState(false);

    const handleSumit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return (
        <>
            <h2>Formularios</h2>

            <form onSubmit={handleSumit}>

               <label htmlFor="nonbre">Nombre: </label>
               <input 
               typel="text" 
               id="nombre" 
               name="nombre" 
               value={nombre} 
               defaultValue="Escribe tu nombre" 
               onChange={(e)=>setNombre(e.target.value)}
               />

                <p>Elige tu sabor JS Favorito: </p>

                <input 
                type="radio" 
                id="react" 
                name="sabor" 
                value="React"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="react">React</label>

                <input 
                type="radio" 
                id="angular" 
                name="sabor" 
                value="Angular"
                onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor="angular">Angular</label>

                <input 
                type="radio" 
                id="vueJS" 
                name="sabor" 
                value="VueJS"
                onChange={(e)=>setSabor(e.target.value)}
                defaultChecked
                />
                <label htmlFor="vuejs">VueJS</label>

                <p> Elige tu lenguaje de programacion favorito:</p>
                <select 
                name="lenguaje" 
                onChange={ (e)=> setLenguaje(e.target.value)} 
                defaultValue="">
                    <option value="" defaultSelected>---</option>
                    <onption value="js">js</onption>
                    <option value="php">php</option>
                    <option value="py">python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>

                <br/>

                <label htmlFor="terminos"  >Acepto términos y condiciones</label>
                <input 
                type="checkbox" 
                id="terminos" 
                name="terminos"  
                onChange={(e)=>setTerminos(e.target.checked)}/>

                <br/>

                <input type="submit" />

            </form>
        </>
    );
    
}
*/

//En este componente controlamo todo el formulario con un solo estado
export default function Formularios(){

    const [form,setForm] = useState({});

    const handleChange = (e) => {
        //Si ya existe la propiedad e.target.name actualiza con e.target.value sino la creas (Desestructuracion)
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleChecked = (e) => {
        //Si ya existe la propiedad e.target.name actualiza con e.target.value sino la creas (Desestructuracion)
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        });
    }

    const handleSumit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return (
        <>
            <h2>Formularios</h2>

            <form onSubmit={handleSumit}>

               <label htmlFor="nonbre">Nombre: </label>
               <input 
               typel="text" 
               id="nombre" 
               name="nombre" 
               value={form.nombre} 
               defaultValue="Escribe tu nombre" 
               onChange={handleChange}
               />

                <p>Elige tu sabor JS Favorito: </p>

                <input 
                type="radio" 
                id="react" 
                name="sabor" 
                value="React"
                onChange={handleChange}/>
                <label htmlFor="react">React</label>

                <input 
                type="radio" 
                id="angular" 
                name="sabor" 
                value="Angular"
                onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>

                <input 
                type="radio" 
                id="vueJS" 
                name="sabor" 
                value="VueJS"
                onChange={handleChange}
                defaultChecked
                />
                <label htmlFor="vuejs">VueJS</label>

                <p> Elige tu lenguaje de programacion favorito:</p>
                <select 
                name="lenguaje" 
                onChange={handleChange} 
                defaultValue="">
                    <option value="" defaultSelected>---</option>
                    <onption value="js">js</onption>
                    <option value="php">php</option>
                    <option value="py">python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>

                <br/>

                <label htmlFor="terminos"  >Acepto términos y condiciones</label>
                <input 
                type="checkbox" 
                id="terminos" 
                name="terminos"  
                onChange={handleChecked}/>

                <br/>

                <input type="submit" />

            </form>
             
        </>
    );
    
}