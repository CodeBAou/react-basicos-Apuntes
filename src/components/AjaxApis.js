//APiRest publica para formacion https://pokeapi.co/api/v2/pokemon/
import React, {Component} from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <p>{props.name}</p>
        </figure>
    );
}

export default class AjaxApis extends Component{
    
    state = {
        pokemons:[],
    }
    
    componentDidMount(){

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
                        avatar: json.sprites.front_default
                    };

                    //suma de arrays con spread (...)
                    let pokemons = [...this.state.pokemons, pokemon];
                    //Evitamos poner {pokemons: pokemons} dado que el estado y la variable se llaman igual y esto nos permite simplificarlo
                    this.setState({ pokemons });  
                })
            });
        })
    }

    render(){
        return(
            <>
                <h2>Peticiones Asincronas en componentes de clase</h2>
                {
                this.state.pokemons.lengh === 0 ? <h5>Cargando</h5>: 
                this.state.pokemons.map(el => <Pokemon key = {el.id} name={el.name} avatar={el.avatar}/> )
                }
            </>
        );
    }
}