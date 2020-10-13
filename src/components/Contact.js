import React from 'react';
import './Contact.css';

const nom = "Samson";
const statut = true;
const avatar = <img className="avatar" src="https://randomuser.me/api/portraits/women/79.jpg"/>

function Contact() {
  return (
    <div className="Contact">
        <div>{avatar}</div>
        <div>
            <div className="name">{nom}</div>
            <div className="status">
              <p className="status-text">
                <div class="status-online"></div>
                {statut ? "online" : "offline"}
                
                </p>

            </div>
            
        </div>
    </div>
  );
}

export default Contact;


