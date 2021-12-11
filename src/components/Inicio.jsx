import React from 'react'
import imgR from '../img/react.png'

const Inicio = ()=>{
    return(
        <div className='mx-auto'>
            <div className='card-body'>
                <div className='row center'>
                    <div className='col-6'>
                        <img src={imgR} alt="" className='col-4' />
                    </div>
                    <div className='col-6'>
                        <h1>¿Qué es React?</h1>
                        <p>Es una librería open source de JavaScript para desarrollar interfaces de usuario</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Inicio
