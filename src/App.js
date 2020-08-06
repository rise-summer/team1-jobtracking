import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './login';
import SignUp from "./SignUp/SignUp";
import MainFeed from "./mainfeed"
import managePosts from "./managePost"
import userMain from "./userMainfeed"

 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path='/' exact component={MainFeed}></Route>
          <Route path='/Login' exact component={Login}></Route>
          <Route path='/SignUp' exact component={SignUp}></Route>
          <Route path='/UserMain' exact component={userMain}></Route>
          <Route path='/managePosts' exact component={managePosts}></Route>
        </BrowserRouter>
      </div>
    );  
  } 
}
export default App;





