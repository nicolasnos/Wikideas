import React from "react";
import { Header } from "./Header";
import circuit from "../assets/AI.png";

export const Home = () => {
  return (
    <section>
      <Header />
      <article className="informacion">
        <h2>
          Información <br /> Destacada
        </h2>
        <h4>¿Que es la tecnologia?</h4>
        <div id="textImg">
          <p>
            ¿Qué es la tecnología? La tecnología (del griego τέχνη téchnē,
            ‘arte’, ‘oficio’ y -λογία -loguía, ‘tratado’, ‘estudio’2​) es la
            suma de técnicas, habilidades, métodos y procesos utilizados en la
            producción de bienes o servicios o en el logro de objetivos, como la
            investigación científica. La tecnología puede ser el conocimiento de
            técnicas, procesos y similares, o puede integrarse en máquinas para
            permitir su funcionamiento sin un conocimiento detallado de su
            funcionamiento. Los sistemas (por ejemplo, máquinas) que aplican
            tecnología tomando una entrada, cambiándola de acuerdo con el uso
            del sistema y luego produciendo un resultado se denominan sistemas
            tecnológicos.
          </p>
          <img src={circuit} alt="inteligencia artificial imagen" />
        </div>
        <p>
          La tecnología tiene muchos efectos. Ha ayudado a desarrollar economías
          más avanzadas (incluida la economía global actual). Muchos procesos
          tecnológicos producen externalidades negativas como la contaminación y
          agotan los recursos naturales, en detrimento del planeta Tierra. Sin
          embargo, la tecnología también puede ser usada para proteger el medio
          ambiente, buscando soluciones para resolver de forma sostenible las
          crecientes necesidades de la sociedad, sin provocar un agotamiento o
          degradación de los recursos materiales y energéticos del planeta o
          aumentar las desigualdades sociales.
        </p>
        <p>
          Las innovaciones influyen en los valores de cada sociedad y cuestiones
          éticas de la tecnología. Los ejemplos incluyen el surgimiento de la
          noción de eficiencia en términos de productividad humana y los
          desafíos de la bioética. El campo interdisciplinario de estudios de
          ciencia, tecnología y sociedad abarca tales efectos culturales, éticos
          y políticos.
        </p>
        <p>
          Han surgido debates filosóficos sobre la tecnología, con desacuerdos
          sobre si la tecnología mejora o empeora la condición humana. El
          neoludismo, el anarco-primitivismo y movimientos similares critican la
          omnipresencia de la tecnología, argumentando que daña el medio
          ambiente y aliena a las personas. Los defensores de ideologías como el
          transhumanismo y el tecnoprogresismo ven el progreso tecnológico
          continuo como beneficioso para la sociedad y la condición humana.
        </p>
      </article>
    </section>
  );
};
