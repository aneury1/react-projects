import React from 'react';
import './App.css';


const SingleStatusPost = (props)=>{

    return <div className="single-status-post">
       <div className="module"></div>
    </div>

}



function StatusBar(props){
  
    return (
        <div className="status-bar">
            <SingleStatusPost />
        </div>
    );

}

 const PublicationCard =(props)=>{
     return <div className="publication-card">
           
           
           <div className="card-header">
                <div className="pright">
                    <div className="profile-image-ctx">
                    <div className="single-status-post">
                        <div className="module"></div>
                        </div>
                    </div>
                    <p className="publication-u-name">
                        UserName
                    </p>
                </div>
                <div className="pleft"> 
                      <b>.</b>
                      <b>.</b>
                      <b>.</b>
                </div>
           </div>
          
           <img src="mw.jpg" alt="profile" />

           <div class="reaction-box">
                  <div class="reaction-buttons">
                      <img src="/bootstrap-icons-1.0.0-alpha5/heart.svg" alt="like" />
                      <img src="/bootstrap-icons-1.0.0-alpha5/chat.svg" alt="comment"/>
                      <img src="/bootstrap-icons-1.0.0-alpha5/share.svg" alt="share"/>
                  </div>
                  <div class="share-reaction">
                      <img src="/bootstrap-icons-1.0.0-alpha5/clipboard.svg" alt="clipboard"/>
                  </div>
            </div>
     </div>
 };


const FriendSuggestion= (props)=>{
    return <div className="sug-ctx">

     <div className="sprima">
        <div className="s-img-ctx">
            <img src="mw.jpg" alt="sug"/>
        </div>
        <div className="s-info">
            <b className="s-n-name">UserName</b>
            <b className="s-r-name">User Name</b>
        </div>
     </div>
     <div className="fw-btn"><b>Follow</b></div>
    </div>;
}




 
const Spacer= ()=>{
    return <div className="spacer"/>
}



export {StatusBar,PublicationCard,Spacer,FriendSuggestion} 