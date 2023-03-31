import React from "react";

import { FaBullhorn, FaUser } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero-container">
        <div>
          Bienvenue sur <span>WAYIMI</span>
        </div>
        <p>
          Main dans la main luttons contre l’atteinte aux droits humains aux
          Bénin.
        </p>
      </div>
      <div className="redirect-container">
        <div className="redirect-btn">
          <div>
            {" "}
            <div className="yellow-btn">
              {" "}
              <FaBullhorn /> Dénoncer un abus
            </div>
          </div>
          <div>
            {" "}
            <div className="yel-btn">Suivre sa demande</div>
          </div>
        </div>
      </div>
      <div className="home-about-container">
        <div className="home-about-wraper">
          <div className="home-about-section">
            <div className="home-about-title">WAYIMI, c’est quoi?</div>
            <div className="home-about-img">
              <img src="./assets/images/about1.png" alt="desc" />
            </div>
            <div className="home-about-desc">
              <span className="chart">WAYIMI</span> est une application qui vous
              permettra de <span className="chart">denoncer</span> les faits
              attentatoires aux droits humains
            </div>
          </div>
          <div className="home-about-section">
            <div className="home-about-title">Quel est son role ?</div>
            <div className="home-about-img">
              <img src="./assets/images/about2.png" alt="desc" />
            </div>
            <div className="home-about-desc">
              WAYIMI, a pour rôle d’aider la population à dénoncer un abus un
              seul clic et suivre sa demande ,tout cela dans la sécurité et le
              respect de leurs désir d’anonymat ou non
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats-container">
        <div className="home-stats-wraper">
          <div className="home-stats-box">
            <div className="home-stats-num">10980</div>
            <div className="home-stats-title">Dossiers traités</div>.
          </div>
          <div className="home-stats-box">
            <div className="home-stats-num">280</div>
            <div className="home-stats-title">
              Dossiers en cours de traitement
            </div>
            .
          </div>
          <div className="home-stats-box">
            <div className="home-stats-num">31000</div>
            <div className="home-stats-title">Dossiers envoyés</div>.
          </div>
        </div>
      </div>
      <div className="home-partner-container">
        <div className="home-partner-wraper">
          <div className="home-partner-img">
            <img src="./assets/images/amnesty.png" alt="amnesty" />
          </div>
          <div className="home-partner-desc">
            Nous sommes une association nationale convaincue que lorsque les
            droits humains sont en jeu, chaque combat mérite une victoire.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
