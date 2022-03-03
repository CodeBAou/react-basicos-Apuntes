import {useState, useEffect} from 'react';

//Custom Hook para peticiones a apis

// Importante el nombre debe empezar por "use" = useNAME
/*
    Objecto {
        data:       < datos que devuelve la api >
        isPending:  < boolean esucha >
        err:{
            err: 
            status:
            statusext:
        }
    }
*/
export const useFetch = (url) => {

    const [data,setdata] = useState(null);//controlar los datos que vienen
    const [isPending,setPending] = useState(true);//Estar Pendiente
    const [err,setError] = useState(null);//controlar errores de fetch

    useEffect( ()=> {

            const getData = async (url) => {

                try{
                    let res   = await fetch(url);

                    if(!res.ok){ //Respuesta no tiene estado ok (error)

                        throw {//Este objecto se para como parametro en el catch
                            err:true,
                            status:res.status, 
                            statusext: !res.statusText ? "Ocurrio un error": res.statusText
                        };

                    }

                    let data  = await res.json();
                    setPending(false);//state false , ya no esta pendiente, no hubo errores
                    setdata(data);
                    setError( {err:false});

                //throw
                }catch(err){
                    setPending(true); //Hubo un error se mantiene pendiente
                    setError(err);
                }
            }

            getData(url);
            
    },[url]);

    return { data, isPending, err};
}