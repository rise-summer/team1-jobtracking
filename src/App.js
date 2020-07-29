import React from 'react';
//import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Login from './login';


//import './App.css';
//import Navigation from "./Navigation/Navigation";
import SignUp from "./SignUp/SignUp";
 

class App extends React.Component{
  render() {
    return(
      <div>
      {/*<Navigation />*/}
      <SignUp/>
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
