 
import React from 'react';
import './App.css';


export function Register() {
   return (
    <div className="lg-body">
    <div className="lg-box">
      <h3 className="lg-title">
          Feeder
      </h3>
      <div className="lg-textbox">
          <input placeholder="Proper Name"></input>
      </div>
      <div className="lg-textbox">
          <input placeholder="User Name or Email"></input>
      </div>
      <div className="lg-textbox">
          <input placeholder="Password"></input>
      </div>
      <div className="lg-textbox">
          <input placeholder="Repeat Password"></input>
      </div>
      <div className="lg-textbox">
          <kbd>Register</kbd>
      </div>
      <div className="lg-textbox">
          <div className="line" />
          <b> O </b>
          <div className="line" />
      </div>
      <div className="lg-textbox">
          <kbd>Used Social Account</kbd>
      </div>
    </div>
 </div>
   );

}