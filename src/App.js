import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavigationLogIn from "./components/Navigation/NavigationLogIn";
import NavigationLogOut from "./components/Navigation/NavigationLogOut";
import Login from './components/login';
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/profile"
import CongratsCard from "./components/CongratsCard/Congrat"

import MainFeed from "./components/mainfeed"
import managePosts from "./components/managePost"
import userMain from "./components/userMainfeed"
import App1 from "./components/EnterApp1/App1";
import App2 from "./components/EnterApp2/App2";


 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter> 
          <Route path='/userProfile' exact component={Profile}></Route>
          <Route path='/userApp1' exact component={App1}></Route>
          <Route path='/userApp2' exact component={App2}></Route>
          <Route path='/userApp3' exact component={CongratsCard}></Route>
          <Route path='/NavLogOut' exact component={NavigationLogOut}></Route>
           
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
