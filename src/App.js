import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './login';
import SignUp from "./SignUp/SignUp";
import MainFeed from "./mainfeed"

//import './App.css';
//import Navigation from "./Navigation/Navigation";

 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path='/' exact component={MainFeed}></Route>
          <Route path='/Login' exact component={Login}></Route>
          <Route path='/SignUp' exact component={SignUp}></Route>
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
