import React from 'react';
import {useFetch} from '../hooks/useFetch';

//El custom Hook que se utiliza en este componente esta en hooks/useFetch.js
export default function CustomHooks(){
    
    let url= "https://pokeapi.co/api/v2/pokemon/";
    console.log( useFetch() );

    //useFetch retorna ->  return { data, isPending, err}; y se aplica desestructuracion javasript
    let {data, isPending, error} = useFetch(url); 

    return(
        <>
            <h2>Custom Hooks </h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark> {JSON.stringify(error)} </mark>
            </h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    );
}