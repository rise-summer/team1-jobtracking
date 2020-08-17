import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavigationLogIn from "./Navigation/NavigationLogIn";
import NavigationLogOut from "./Navigation/NavigationLogOut";
import Login from './login';
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/profile"
import CongratsCard from "./CongratsCard/Congrat"

import MainFeed from "./mainfeed"
import managePosts from "./managePost"
import userMain from "./userMainfeed"
import App1 from "./EnterApp1/App1";
import App2 from "./EnterApp2/App2";
import App3 from "./EnterApp3/App3";

import editApp1 from "./EditApp1/editApp1";
import editApp2 from "./EditApp2/editApp2";



 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter> 
          <Route path='/userProfile' exact component={Profile}></Route>
          <Route path='/userApp1' exact component={App1}></Route>
          <Route path='/userApp2' exact component={App2}></Route>
          <Route path='/userApp3' exact component={App3}></Route>

          <Route path='/congrates' exact component={CongratsCard}></Route>
          <Route path='/NavLogOut' exact component={NavigationLogOut}></Route>

          <Route path='/editApp1' exact component={editApp1}></Route>
          <Route path='/editApp2' exact component={editApp2}></Route>
           
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
