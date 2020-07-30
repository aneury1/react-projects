/* eslint-disable jsx-a11y/alt-text */
 
import React from 'react';
import './App.css';
import {StatusBar, PublicationCard, Spacer, FriendSuggestion }from './components';

function Home() {
  return (
    <div>
       <div className="site-body-wh">
          <div className="publication-area">
                <StatusBar />        
                <PublicationCard/>
                <PublicationCard/>
                <Spacer/>
          </div>
          <div className="new-user-area">
             <div className="uprofile-name">
               <div className="me-image-ctx">
                   <img src="mw.jpg" alt="me" />
               </div>
               <div className="me-info-ctx">
                   <p className="username">Username</p>
                   <p className="realname">User Name</p>
               </div>
             </div>
             

             <div className="friend-sug">
                       <b className="sug-1">Suggestions For you</b>
                       <b className="seeall">See All</b>
             </div>

             <FriendSuggestion />
             <FriendSuggestion />
             <FriendSuggestion />
             <FriendSuggestion />
             <FriendSuggestion />

          </div>
       </div>


    </div>
  );
}

export default Home;
