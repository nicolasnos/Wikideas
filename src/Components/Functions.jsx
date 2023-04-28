import React from 'react'
import { Header_Functions } from "./Header_Functions";

export const Functions = () => {
  return (
    <section>
      <Header_Functions/>
      <article className='container_functions'>
        <h1 className='welcome'>Funciones de <span className='span_color'>WIKIDEAS</span></h1>
        <div>
          <p src="./icons8-monitor.gif" alt="" />
        </div>
      </article>
    </section>
  )
}
