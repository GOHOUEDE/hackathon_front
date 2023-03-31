import React, { useState } from "react";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaPhone,
  FaPhoneAlt,
  FaUser,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
  
const SignUp = () => {
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate()

  const handleInputType = () => {
    if (inputType == "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  const submitForm = (e) =>{
    e.preventDefault()
    navigate(routes.denounce)
  }


  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-form-header">
          <img src="./assets/logo/logo.png" alt="logo" />
        </div>
        <div className="signup-form-container">
          <div className="heading">Nouveau compte</div>
          <p className="subHeading">Bienvenue sur WAYIMI </p>
          <div className="icon-ctn">
            <FaUserCircle />
          </div>

          <form class="" onSubmit={submitForm}>
            <div className="input-ctn">
              <FaPhoneAlt />
              <input
                type="email"
                placeholder="Email"
                name="email" required
              />
            </div>

            <div className="input-ctn">
              <FaPhoneAlt />
              <select class="" name="gender" required>
                <option >Genre</option>
                <option>Masculin</option>
                <option>Feminin</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="input-ctn">
              <FaLock />
              <input
                type={inputType}
                placeholder="Mot de Passe"
                name="password" required
              />
              <span class="psw" onClick={handleInputType}>
                {inputType == "password" ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div class="terms">
              En cliquant sur le bouton s’inscrire, vous acceptez nos conditions
              d’utilisations
            </div>
            <button type="submit" class="s-btn" name="btnsbm">
              S'inscrire
            </button>
          </form>
          <div class="redirect">
            Déja un compte ?{" "}
            <Link to={routes.login}>
              <span class="signup">Connectez vous</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="signup-wraper">
        <img src="./assets/images/img2.jpeg" alt="" />
      </div>
    </div>
  );
};
export default SignUp;
