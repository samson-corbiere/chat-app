import React from 'react';
import './Contact.css';



function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" src={props.avatar}/>
        <div>
            <div className="name">{props.name}</div>
            <div className="status">
              <i className={props.online ? "status-online" : "status-offline"}></i>
              <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
  );
}

export default Contact;


