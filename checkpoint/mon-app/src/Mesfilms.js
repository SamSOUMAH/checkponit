
import './App.css';
import React from 'react'
import {ListeFilm} from './ListeFilm'

 

function Mesfilms() {
   
    
    return(
        
         <div>
               {ListeFilm.map((film)=>(
                <div className='images'>
                <h2>{film.name}</h2>
                <p>{film.description}</p>
                <p>{film.rating}</p>
                <img src={film.posterURL} alt=""></img>
                <iframe src={film.video} ></iframe><hr/>
                </div>))
               }     
         </div>
      
    )
}

export default Mesfilms;