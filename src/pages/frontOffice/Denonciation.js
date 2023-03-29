import React from "react";

const Denonciation = () => {
  return (
    <div className="denonciation-container">
      <div className="container pt-5">
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
            <form className="form">
              <div className="input-item pb-4">
                <label htmlFor="Nom" className="form-label fw-bold">
                  Nom
                </label>
                <input type="text" className="form-control mb-0"  placeholder="Pas obligatoire , nous respectons votre anonymat"/>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="prenom" className="form-label fw-bold">
                  Prénom
                </label>
                <input type="text" className="form-control"  placeholder="Pas obligatoire , nous respectons votre anonymat"/>

              </div>
              <div className="input-item pb-4">
                <label htmlFor="Sexe" className="form-label fw-bold">
                  Sexe
                </label>
                <div className="sexe d-flex align-items-center justify-content-between">
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" />
                    <label htmlFor="masculin" className="form-label">
                      Masculin
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" />
                    <label htmlFor="feminin" className="form-label">
                      Feminin
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" />
                    <label htmlFor="nonBinaire" className="form-label">
                      Non Binaire
                    </label>
                  </div>
                  <div className="masc">
                    <input type="radio" className="mx-1" name="sexe" />
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
                  cols=""
                  className="form-control"
                  placeholder="Description des faits"
                  required
                ></textarea>
              </div>
              <div className="input-item pb-4">
                <label htmlFor="prenom" className="form-label fw-bold">
                  Ajoutez un audio
                </label>
                <div
                  className="w-100 h-25 py-2"
                  style={{ backgroundColor: "rgba(217, 217, 217, 1)" ,borderRadius: "5px"}}
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
                <label htmlFor="prenom" className="form-label fw-bold">
                Ajoutez une image             
                </label>
                <input type="file" className="form-control"  />
              </div>
              <div className="input-item pb-4">
                <label htmlFor="prenom" className="form-label fw-bold">
                Téléphone           
                </label>
                <input type="tel" className="form-control" placeholder="Pas obligatoire , nous respectons votre anonymat" />
              </div>
              <div className="input-item pb-4">
                <label htmlFor="Sexe" className="form-label fw-bold">
                Niveau d’urgence
                </label>
                <div className="sexe d-flex align-items-center justify-content-between">
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" />
                    <label htmlFor="Sémi-urgent" className="form-label">
                    Sémi-urgent
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" />
                    <label htmlFor="Urgent" className="form-label">
                    Urgent
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="urgence" />
                    <label htmlFor="Très urgent" className="form-label">
                    Très urgent
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-item pb-4">
               
                <div className="sexe d-flex align-items-center justify-content-around w-100 h-25 py-2"  style={{ backgroundColor: "rgba(217, 217, 217, 1)" ,borderRadius: "5px"}}>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="temoin" />
                    <label htmlFor="Sémi-urgent" className="form-label">
                    Témoin
                    </label>
                  </div>
                  <div className="urgence">
                    <input type="radio" className="mx-1" name="temoin" />
                    <label htmlFor="Urgent" className="form-label">
                    Victime
                    </label>
                  </div>
                  <div className="urgence">
                   
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denonciation;
