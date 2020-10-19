import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/login';
import SignUp from "./components/SignUp/SignUp";
import MainFeed from "./components/mainfeed";
import managePosts from "./components/managePost";
import userMain from "./components/userMainfeed";
import NavigationLogIn from "./components/Navigation/NavigationLogIn";
import NavigationLogOut from "./components/Navigation/NavigationLogOut";
import Profile from "./components/Profile/profile";
import CongratsCard from "./components/CongratsCard/Congrat";
import App1 from "./components/EnterApp1/App1";
import App2 from "./components/EnterApp2/App2";
import Trackr from "./components/trackr"

import {Provider} from 'react-redux';
import store from './store/index.js';


class App extends React.Component{
  render() {
    return(
      <Provider store={store}>
      <div>
        <BrowserRouter> 
          <Route path='/userProfile' exact component={Profile}></Route>
          <Route path='/userApp1' exact component={App1}></Route>
          <Route path='/userApp2' exact component={App2}></Route>
          <Route path='/userApp3' exact component={CongratsCard}></Route>
          <Route path='/NavLogOut' exact component={NavigationLogOut}></Route>
           
          <Route path='/' exact component={MainFeed}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/usermain' exact component={userMain}></Route>
          <Route path='/manageposts' exact component={managePosts}></Route>
          <Route path='/trackr' exact component={Trackr}></Route>
        
        </BrowserRouter>
      </div>
      </Provider>
    );  
  } 
}
export default App;