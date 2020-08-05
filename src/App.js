import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CongratsCard from "./CongratsCard/Congrat"
 
 

 

class App extends React.Component{
  render() {
    return(
      <div>
        <BrowserRouter>
         
          <Route path='/' exact component={CongratsCard}></Route>
          
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
