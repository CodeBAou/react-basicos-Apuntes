import React,{ useState, useEffect } from 'react';

//La peticion con hooks es la misma pero utilizando useState y useEffect(x,[])

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks(){

    const [pokemons,setPokemons] = useState([]);
    let url ="https://pokeapi.co/api/v2/pokemon/";

    useEffect( () => {
       
        let url ="https://pokeapi.co/api/v2/pokemon/";
        
        fetch(url)
        .then(res => res.json()).then(json => {

            console.log(json);

            //Por cada uno de los resultados haz una nueva peticion fetch
            json.results.forEach( (el) => {
                fetch(el.url)
                .then((res) => res.json())
                .then((json) => {

                    console.log(json);  
                    //se crea un objecto pokemon
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };

                  
                    setPokemons( (pokemons) => [...pokemons, pokemon]);
                })
            });

        })
      

    },[]); 

    return(
        <>
            <h2>Ajax Hooks - Peticiones Asíncronas</h2>
            { (pokemons.length === 0 ) ? (
                <h3>Cargando</h3>
            ):(
                pokemons.map( (el) => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
        </>
    );
}




//Peticion Feth Asincrona
export function AjaxHooksAsync(){

    const [pokemons,setPokemons] = useState([]);
    let url ="https://pokeapi.co/api/v2/pokemon/";

    useEffect( () => {

        //Añadir asincronismo
        //Antipatron useEffect( async ()=> {} ) - Es una mala practica añadir asincronismo así, en su lugar:
        const getPokemons = async (url) => {
            let res = await fetch(url),
                json= await res.json();

            console.log(json);

            //Por cada uno de los resultados haz una nueva peticion fetch
            json.results.forEach( async (el) => {
                let res = await fetch(el.url),
                json = await res.json()
               

                    console.log(json);  
                    //se crea un objecto pokemon
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };

                  
                    setPokemons( (pokemons) => [...pokemons, pokemon]);
                })
          
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/");  //Ahora useEffect es asyncrona

       // let url = ; Se quita la url "https://..url" --> getPokemons("https://...url")
        
      
      
    },[]); 

    return(
        <>
            <h2>Ajax Hooks - Peticiones Asíncronas</h2>
            { (pokemons.length === 0 ) ? (
                <h3>Cargando</h3>
            ):(
                pokemons.map( (el) => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
        </>
    );
}