//import React from 'react'
import React, { useState } from 'react'
import Inicio from './components/Inicio'
import Otro from './components/Otro'

const esty ={
    padding: 5
}

const App = ()=>{
    //estado encargado de nombrar las vistas
    const [pagina, setpagina] = useState('inicio')

    //funcion que verifica el estado
    const estado = ()=>{
        if(pagina === 'inicio'){
           return <Inicio />
        }else if(pagina === 'otro'){
            return <Otro />
        }
    }

    const topage = (page)=>{
        //console.log(page);
        setpagina(page)
    }

    return(
        <div>
           <a href="#" onClick={()=>{topage('inicio')}} style={esty}>Inicio</a> 
           <a href="#" onClick={()=>{topage('otro')}} style={esty}>Otro</a> 
           {estado()}
        </div>
        
    )
}

export default App