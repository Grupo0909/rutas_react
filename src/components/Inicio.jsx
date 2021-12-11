import React from 'react'
import '../style/inicio.css'
import img from '../components/img'

const Inicio = ()=>{
    return(
        
        <div className='card mx-auto F-Card'>
            <div className='card-body'>
                <div className='row center'>
                    <div className='col-6'>
                        <img src={img.img2} alt="" className='col-4' />
                    </div>
                    <div className='col-6 F-Card-Info'>
                        <h1>¿Qué es React?</h1>
                        <p>Es una librería open source de JavaScript para desarrollar interfaces de usuario</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Inicio
