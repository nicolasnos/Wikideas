import React from "react";
import bitId from "../../public/img/bit_idforideas.jpg";
import IaImg from "../../public/img/IA-Software.png";
import Bombilla from "../../public/img/bombilla.jpg";

export const Footer = () => {
  return (
    <footer>
      <article className="info">
        <div>
          <img src={Bombilla} alt="imagen de bombillo" />
          <p>
            Consejo: ¡Comparte esta pàgina con tus amigos y adquieran
            conociemiento juntos!
          </p>
        </div>
        <article className="enterprise">
          <h2>Empresas</h2>
          <p>
            Estas empresas han hecho realidad este proyecto para nuestra
            comunidad curiosa
          </p>
        </article>
      </article>
      <section className="imagenes">
        <img src={IaImg} alt="Id for ideas logo" className="first" />
        <img src={bitId} alt="Id for ideas logo" />
      </section>
    </footer>
  );
};
