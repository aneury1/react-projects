/* eslint-disable jsx-a11y/alt-text */
 
import React from 'react';
import './App.css';
//import {StatusBar, PublicationCard, Spacer, FriendSuggestion }from './components';
///import Home from './home';
//import {Route, BrowserRouter} from 'react-router-dom';


export default function TopNavBar() {
  return (

        <div className="fnav">
         
           <h3>
               Feeder
           </h3>

           <div className="search">
               <input placeholder="Search" type="text"></input>
           </div>
 
           <div className="main-top-btn">
               <img src="./bootstrap-icon/house.svg" />
               <div className="tnav-noti"><img src="./bootstrap-icon/compass.svg" /></div>
               <img src="./bootstrap-icon/clock.svg" />
               <img src="./bootstrap-icon/heart.svg" />
               <img src="/mw.jpg" className="me" />
           </div>
        </div>
  );
}