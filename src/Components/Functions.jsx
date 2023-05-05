import React from 'react'
import { Header_Functions } from "./Header_Functions";

export const Functions = () => {
  return (
    <section>
      <Header_Functions/>
      <article className='container_functions'>
        <h1 className='welcome'>Funciones de <span className='span_color'>WIKIDEAS</span></h1>
        <div className='functions_e'>
          <div className="card_f">
            <img src="./img/foco2.png" alt="" className="image_f" />
            <h4 className='subtitle_f'>Función 1</h4>
            <p>Agrega definiciones de temas para que la comunidad aprenda</p>
          </div>
          <div className="card_f">
            <img src="./img/hand2.png" alt="" className="image_f" />
            <h4 className='subtitle_f'>Función 2</h4>
            <p>Edita cualquier definición que no sea asertiva y concreta</p>
          </div>
          <div className="card_f">
            <img src="./img/foco2.png" alt="" className="image_f" />
            <h4 className='subtitle_f'>Función 3</h4>
            <p>Califica la información para felicitar a los que hacen esto posible</p>
          </div>
        </div>
      </article>
    </section>
  )
}
