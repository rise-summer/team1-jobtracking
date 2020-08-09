import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//import AppPopUp from "./AppPopUp/AppPopUp";
import Profile from "./Profile/profile"
//import Login from './login';
//import SignUp from "./SignUp/SignUp";

//import './App.css';
import NavProfile from "./Navigation/NavProfile";


 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter>
           
            <Profile/>
        
        {/*<Route path='/' exact component={AppPopUp}></Route>
          
          <Route path='/SignUp' exact component={SignUp}></Route>
          <Route path='/Login' exact component={Login}></Route>*/}
        </BrowserRouter>
      </div>
    );  
  } 
}
export default App;





/*function App() {
  return (
    <BrowserRouter>
        <div className="App">
         <Login/>
          <Navigation/>
          <Navbar />
          <Switch>
            {/*<Route exact path="/" component={LandingPage} />
            <Route exact path="/startups" component={Startups} />
            
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App; */
