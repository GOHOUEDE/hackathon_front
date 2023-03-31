import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Notification = () => {
  const follow = () => {};
  return (
    <div className="notification-container">
      <div className="notification-wraper">
        <div className="notification-msg">
          Votre denonciaciation a été recue avec <span>succès !</span>{" "}
        </div>
        <div className="notification-img">
          <img src="./assets/images/success.png" alt="success" />
        </div>
        <div className="notification-code">votre code de suivie : 9098</div>
        <div className="notification-btn">
          <div>
            <div className="yellow-btn">
              <Link to={routes.process}>Suivre sa demande</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
