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
import { Link } from "react-router-dom";
import { routes } from "../../routes";
export default class SignUp extends React.Component {
  state = {
    phone: "",
    password: "",
    gender: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      phone: this.state.phone,
      password: this.state.password,
      gender: this.state.gender,
    };
    axios.post("http://127.0.0.1:8000/register", { data }).then((res) => {});
  };
}
SignUp = () => {
  const [inputType, setInputType] = useState("password");

  const handleInputType = () => {
    if (inputType == "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

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

          <form class="">
            <div className="input-ctn">
              <FaPhoneAlt />
              <input
                type="tel"
                placeholder="Numero de téléphone"
                name="phone"
              />
            </div>

            <div className="input-ctn">
              <FaPhoneAlt />
              <select class="" name="gender">
                <option disabled>Genre</option>
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
                name="password"
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
