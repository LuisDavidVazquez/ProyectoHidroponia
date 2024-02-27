import React from 'react'
import '@/styles/Login.css'; // eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
export default function Login() {
  return (
    <section className='Main-Seccion'>
    <div className='Main-Background'>
     <Image 
      style={{filter: 'blur(5px)'}}
      alt='Imagen de fondo'
      src="/images/Fondo-Login.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="mi-imagen"
      />   
      <div className='div-sobrepuesto'/>
    </div>   
    

    <div className='Formulario'>
      <form className='form-datos' action="#" method="POST">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"/>
        
        <label htmlFor="email">Contraseña</label>
        <input type="password" id="email" name="email"/>
        
        <button type="submit">Ingresar</button>
      </form>

    </div>
    </section>
  )
}

