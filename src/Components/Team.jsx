import React from "react";
import { Header_Functions } from "./Header_Functions";

export const Team = () => {
  return (
    <div>
      <Header_Functions />
      <section className="team">
        <div className="title">
          <img src="" alt="estrella1" />
          <h1>IA Software</h1>
          <img src="" alt="estrella2" />
        </div>
        <article className="members">
          <div className="card">
            <img src="" alt="imagen de miembro" />
            <div className="MInformation">
              <h4>Jesus Moran</h4>
              <p>email@fakeemail.com</p>
            </div>
          </div>
          <div className="card">
            <img src="" alt="imagen de miembro" />
            <div className="MInformation">
              <h4>Jesus Moran</h4>
              <p>email@fakeemail.com</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
