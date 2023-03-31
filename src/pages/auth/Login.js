import React, { useState } from "react";
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
import { useNavigate } from "react-router";

import AuthService from "../../services/AuthService";

const Login = () => {
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }  
   const handlePassword = (e) =>{
    setPassword(e.target.value)
  } 

  const submitForm = (e) =>{
    e.preventDefault()
    navigate(`${routes.denounce}`)

    // const data = {
    //   email:email,
    //   password:password
    // }
    // AuthService.login(data).then((res)=> {
    //   console.log(res)
    // }).catch((err)=> console.log(err))
  }

  const handleInputType = () => {
    if (inputType == "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-header">
          <img src="./assets/logo/logo.png" alt="logo" />
        </div>
        <div className="login-form-container">
          <div className="heading">Connexion</div>
          <p className="subHeading">Bon retour sur WAYIMI </p>
          <div className="icon-ctn">
            <FaUserCircle />
          </div>

          <form className="" onSubmit={submitForm}>
            <div className="input-ctn">
              <FaPhoneAlt />
              <input type="email" placeholder="Email" onChange={handleEmail} required />
            </div>
            <div className="input-ctn">
              <FaLock />
              <input type={inputType} placeholder="Mot de Passe" onChange={handlePassword} required/>
              <span className="psw" onClick={handleInputType}>
                {inputType == "password" ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="terms">
              En cliquant sur le bouton s’inscrire, vous acceptez nos conditions
              d’utilisations
            </div>
            <button type="submit" className="s-btn">
              connexion
            </button>
          </form>
          <div className="redirect">
            Pas encore inscrit ?{" "}
            <Link to={routes.signup}>
              <span className="signup">Inscrivez vous.</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-wraper">
        <img src="./assets/images/img5.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Login;
