import React from 'react';
import { Link } from 'react-router-dom';

const Notification = () => {

    const follow = () =>{

    }
    return (
        <div className='notification-container'>
            <div className="notification-wraper">
                <div className="notification-msg"></div>
                <div className="notification-img">
                    <img src="./assets/images" alt="" />
                </div>
                <div className="notification-code">
                votre code de suivie  : 9098
                </div>
                <div className="notification-btn">
                    <div className="yellow-btn"><Link>Suivre sa demande</Link> </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;