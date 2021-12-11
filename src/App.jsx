import React from 'react'
// import React, { useState } from 'react'
import Inicio from './components/Inicio'
import Otro from './components/Otro'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const esty ={
    padding: 5
}

// const App = ()=>{
//     //estado encargado de nombrar las vistas
//     const [pagina, setpagina] = useState('inicio')

//     //funcion que verifica el estado
//     const estado = ()=>{
//         if(pagina === 'inicio'){
//            return <Inicio />
//         }else if(pagina === 'otro'){
//             return <Otro />
//         }
//     }

//     const topage = (page)=>{
//         //console.log(page);
//         window.history.pushState(null,'',`/${page}`)
//         setpagina(page)
//     }

//     return(
//         <div>
//            <a href="#" onClick={()=>{topage('inicio')}} style={esty}>Inicio</a> 
//            <a href="#" onClick={()=>{topage('otro')}} style={esty}>Otro</a> 
//            {estado()}
//         </div>
        
//     )
// }

// export default App

/////////////// Router React ///////////////////////

const App = ()=>{
    
    return(
        <BrowserRouter>
            {/* navbar bootstrap */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="inicio">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="inicio">Inicio</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="otro">Otro</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="otro">Pricing</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='otro' class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

            {/* navbar bootstrap  */}


           <Link to="inicio" style={esty}>Inicio</Link> 
           <Link to="otro" style={esty}>Otro</Link> 
           

            <Routes>
                <Route path='/inicio' element={<Inicio />}/>
                <Route path='/otro' element={<Otro />}/>
            </Routes>
           
        </BrowserRouter>
        
    )
}

export default App