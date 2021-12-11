//import React from 'react'
import React, { useState } from 'react'
import Inicio from './components/Inicio'
import Otro from './components/Otro'

const App = ()=>{
    //estado encargado de nombrar las vistas
    const [pagina, setpagina] = useState('inicio')

    const estado = ()=>{
        if(pagina === 'inicio'){
           return <Inicio />
        }else if(pagina === 'otro'){
            return <Otro />
        }
    }

    return(
        <div>
            
        </div>
        
    )
}

export default App