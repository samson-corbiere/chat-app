import React from 'react';
import './Contact.css';



function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" src={props.avatar}/>
        <div>
            <div className="name">{props.name}</div>
            <div className="status">
              <p className="status-text">
                <div class="status-online"></div>
                {props.statut ? "online" : "offline"}
                </p>
            </div>
        </div>
    </div>
  );
}

export default Contact;


