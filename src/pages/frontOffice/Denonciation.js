import React from "react";

const Denonciation = () => {
  return (
    <div className="denonciation-container">
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <h1 class="">Dénoncer un abus</h1>
            <img
              src="../../../public/assets/images/Hand.png"
              alt=""
              class=""
            ></img>
          </div>
          <hr></hr>

          <div class="col">
            <form class="form">
              <div class="input-item">
                <label for="Nom" class="">Nom</label>
                <input type="text" class="" /><br/>
                <span class="">Pas obligatoire , nous respectons votre anonymat</span>
              
              </div>
              <div class="input-item">
                <label for="prenom" class="">Prénom</label>
                <input type="text" class="" /><br/>
                <span class="">Pas obligatoire , nous respectons votre anonymat</span>
              </div>
              <div class="input-item">
                <label for="Sexe" class="">Sexe</label>
                <div class="sexe">
                    <div class="masc">
                        <input type="radio" class="" name="sexe"/>
                        <label for="masculin" class="">Masculin</label>
                    </div>
                    <div class="masc">
                        <input type="radio" class="" name="sexe"/>
                        <label for="feminin" class="">Feminin</label>
                    </div>
                    <div class="masc">
                        <input type="radio" class="" name="sexe"/>
                        <label for="nonBinaire" class="">Non Binaire</label>
                    </div>
                    <div class="masc">
                        <input type="radio" class="" name="sexe"/>
                        <label for="phi" class="">Je ne préfère pas répondre</label>
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
