/* eslint-disable jsx-a11y/alt-text */
 
import React from 'react';
import './App.css';
///import {StatusBar, PublicationCard, Spacer, FriendSuggestion }from './components';
import Home from './home';
import {Route, BrowserRouter} from 'react-router-dom';
import TopNavBar from './topbar';
import { Login } from './login';
import { Register } from './register';
import { Profile } from './profile';
import { Explore } from './explore';


function App() {
  return (
    <BrowserRouter>
     <>
        <TopNavBar />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/register" exact={true} component={Register}/>
        <Route path="/profile" exact={true} component={Profile}/>
        <Route path="/explore" exact={true} component={Explore}/>
        
     </>
     </BrowserRouter>
  );
}

export default App;
