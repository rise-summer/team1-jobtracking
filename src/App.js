import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/login';
import SignUp from "./components/SignUp/SignUp";
import MainFeed from "./components/mainfeed"
import managePosts from "./components/managePost"
import userMain from "./components/userMainfeed"

 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path='/' exact component={MainFeed}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/usermain' exact component={userMain}></Route>
          <Route path='/manageposts' exact component={managePosts}></Route>
        </BrowserRouter>
      </div>
    );  
  } 
}
export default App;





