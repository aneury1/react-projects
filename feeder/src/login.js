 
import React from 'react';
import './App.css';


export function Login() {
   return( 
       <div className="lg-body">
          <div className="lg-box">
            <h3 className="lg-title">
                Feeder
            </h3>
            <div className="lg-textbox">
                <input placeholder="User Name or Email"></input>
            </div>
            <div className="lg-textbox">
                <input placeholder="Password"></input>
            </div>
            <div className="lg-textbox">
                <div className="line" />
                <b> O </b>
                <div className="line" />
            </div>
            <div className="lg-textbox">
                <b>Continue with Private Account</b>
            </div>
            <div className="lg-textbox">
                <kbd>Forgot Password?</kbd>
            </div>
          </div>
       </div>
   );
}