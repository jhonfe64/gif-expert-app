import React, {useState, useEffect} from 'react';
import GftGriditem from './GftGriditem';
import getGif from '../helpers/getGifs';

import useFetchGifs from '../hooks/useFetchGifs';



function GiftGrid({categories}){

 
    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(categories);
   
   
    
   
    //La función que hace el fetch está en helpers/getGifs es una funcion asycn await, esta funcion tiene un retorno, cuando se hace retornod e una funcion asycn esta retorna una promesa


    //====> Aquí usamos un helper

    // useEffect(()=>{
    //     const gifs = getGif(categories);
    //     gifs.then((imgs)=>{
    //         setImages(imgs);
    //     })
    // },[categories])

    //====> Aquí un custom hook

   


    return (
        <>
         {loading && "Cargando......"}
        <h1>{categories}</h1>
        <div className="card-grid">
            {
                images.map((img)=>{
                    return(
                        <GftGriditem img={img}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default GiftGrid
