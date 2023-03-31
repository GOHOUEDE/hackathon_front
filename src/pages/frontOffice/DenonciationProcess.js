import React, { useState } from "react";

const DenonciationProcess = () => {
  const [result, setResult] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setResult(true);
    console.log("result", result);
  };
  return (
    <div className="process-container">
      <div className="process-wraper">
        <div className="process-title">Suivre sa demande</div>

        <form
          onSubmit={submitForm}
          style={result ? { display: "none" } : { display: "block" }}
        >
          <div className="input-ctn">
            <label htmlFor="code">Entrez le code de suivi</label>
            <input type="number" placeholder="Ex:987654" required />
          </div>
          <div className="d-flex align-items-center justify-content-end w-100">
            <div className="w-25">
              <button type="submit" className="yellow-btn">
                Suivant
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="process-result-container" style={!result ? { display: "none" } : { display: "block" }}>
        <div className="ans-ctn">
          <label htmlFor="rs1">Demande Envoyé :</label>
          <span className="checked"></span>
        </div>
        <div className="ans-ctn">
          <label htmlFor="rs2">Demande en cours de traitement : </label>
          <span className="checked"></span>
        </div>
        <div className="ans-ctn">
          <label htmlFor="rs3">Demande traité : </label>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default DenonciationProcess;
