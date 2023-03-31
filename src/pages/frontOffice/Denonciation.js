import React from "react";
import { routes } from "../../routes";
import { useNavigate } from "react-router";

const Denonciation = () => {
   const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
     navigate(routes.notification);
  };
  return (
    <div className="denonciation-container">
      <div className="container pt-5 w-75">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col d-flex align-align-items-end justify-content-center">
            <h1 className="mx-1">Dénoncer un abus</h1>
            <img
              src="./assets/images/Hand.png"
              alt=""
              className=""
              width="50.62"
              height="50.62"
            ></img>
          </div>
          <hr></hr>

          <div className="col">
            <form className="form" onSubmit={submitForm}>
              <div className="input-item pb-4">
                <label htmlFor="Nom" className="form-label fw-bold">
                  Nom
                </label>
                <input
                  type="text"
                  id="Nom"
                  className="form-control mb-0"
                  placeholder="Pas obligatoire , nous respectons votre anonymat"
                />
              </div>
              <div className="input-item pb-4">
                <label htmlFor="prenom" className="form-label fw-bold">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  className="form-control"
                  placeholder="Pas obligatoire , nous respectons votre anonymat"
                />
              </div>
              <div className="input-item py-4">
                <label htmlFor="Sexe" className="form-label fw-bold">
                  Sexe
                </label>
                <div className="sexe d-flex align-items-center justify-content-between">
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" id="masculin" />
                    <label htmlFor="masculin" className="form-label">
                      Masculin
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe"id="feminin" />
                    <label htmlFor="feminin" className="form-label">
                      Feminin
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" id="nonBinaire" />
                    <label htmlFor="nonBinaire" className="form-label">
                      Non Binaire
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" id="phi" />
                    <label htmlFor="phi" className="form-label">
                      Je ne préfère pas répondre
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="description" className="form-label fw-bold">
                  Décrivez les faits
                </label>
                <textarea
                  rows="6"
                  id="description"
                  cols=""
                  className="form-control"
                  placeholder="Description des faits"
                  required
                ></textarea>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="audio" className="form-label fw-bold">
                  Ajoutez un audio
                </label>
                <div
                  className="w-100 h-25 py-2"
                  style={{
                    backgroundColor: "rgba(217, 217, 217, 1)",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="./assets/images/🦆 icon _microphone_.png"
                    alt=""
                    className="p-2 mx-2"
                    style={{ border: "1px solid black", borderRadius: "100%" }}
                    width="30"
                    height="35"
                  />
                </div>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="imgFile" className="form-label fw-bold">
                  Ajoutez une image
                </label>
                <input type="file" className="form-control" id="imgFile"/>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="phone" className="form-label fw-bold">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Pas obligatoire , nous respectons votre anonymat"
                />
              </div>
              <div className="input-item pb-4">
                <label htmlFor="Lev" className="form-label fw-bold">
                  Niveau d’urgence
                </label>
                <div className="sexe d-flex align-items-center justify-content-between">
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" id="Sémi-urgent" />
                    <label htmlFor="Sémi-urgent" className="form-label">
                      Sémi-urgent
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" id="Urgent" />
                    <label htmlFor="Urgent" className="form-label">
                      Urgent
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" id="Très-urgent" />
                    <label htmlFor="Très-urgent" className="form-label">
                      Très urgent
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-item pb-4">
                <div
                  className="sexe d-flex align-items-center justify-content-around w-100 h-25 py-2"
                  style={{
                    backgroundColor: "rgba(217, 217, 217, 1)",
                    borderRadius: "5px",
                  }}
                >
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="temoin" id="temoinO" />
                    <label htmlFor="temoinO" className="form-label fs-4">
                      Témoin
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="temoin" id="victime" />
                    <label htmlFor="victime" className="form-label fs-4">
                      Victime
                    </label>
                  </div>
                  <div className="urgence"></div>
                </div>
              </div>
              <div className="input-item pb-4 justify-content-end d-flex align-items-center w-100">
                <h6 className="my-3">Ajouter votre emplacement</h6>
                <img
                  src="./assets/images/My Location.png"
                  alt=""
                  className=""
                />
              </div>
              <div className="">
                <button type="submit" className="yellow-btn">
                  Dénoncer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denonciation;
