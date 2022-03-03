import React from 'react';
import styled,{css,keyframes,ThemeProvider} from "styled-components";

/*
    styled-componentes {css}  -> Permite definir otro estilo dentro de un estylo definido de styled-component
    NOTA! las variables "styled-components" empiezan por mayuscula
*/
export default function ComponentesEstilizados(){
   
    //${} interpolar javascript en texto
    let fontSize="28px", colorFondo="#9B0076", colorHover="#370220";
    
    //Animacion
    const setTransitionTime = (time) => `all ${time} ease-in-out`;  
    const fadeIn_Animation = keyframes`
        0%{
            opacity:0.2;
        }

        100%{
            opacity:1;
        }
    `;
    
    //Styled-component <Myh3></Myh3>
    const Myh3 = styled.h3`
        font-size:${fontSize};
        color:green;
        color:${ props => props.color };
        color:${ ({color}) => color || "#000" } 
        background-color:${colorFondo};
        &:hover{
            background-color:${colorHover};
        }
        transition: ${setTransitionTime("1s")};
        animation:${fadeIn_Animation} 5s infinite;

        ${ (props) => props.isButton && css`
            margin:auto;
            max-width:50%;
            border.radius:0.25rem;
            cursor: grabbing;
            background-color:#3D3B3C;
            border-radius:2rem;
            animation:none;
        ` }
    `;
    
    const light={//Esto deberia estar en un fichero independiente
        color:"#222",
        bgColor:"#DDD",
    };

    const dark={//Esto deberia estar en un fichero independiente
        color:"#DDD",
        bgColor:"#222",
    };

    //themeProvider
    const Box =styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme}) => theme.color};
        background-color:${({theme}) => theme.bgColor};
    `;

    //<Myh3></Myh3> styled-component
    return(
        <>
            <h2>Styled-Components</h2>
            
            <Myh3>Soy un h3 estilizado con styled-components</Myh3>
            <Myh3 color="#61dafb">Soy un h3 estilizado con styled-components y propiedades</Myh3>
            <Myh3 isButton>Soy un h3 estilizado como boton</Myh3>
            
            <h2>Styled-Components - themeProvider</h2>
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box> 
            </ThemeProvider>

            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box> 
            </ThemeProvider>

        </>
    )
}