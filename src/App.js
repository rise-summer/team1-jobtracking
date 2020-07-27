import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './login';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Login/>
          {/*<Navbar />*/}
          <Switch>
            {/*<Route exact path="/" component={LandingPage} />
            <Route exact path="/startups" component={Startups} />
            
            <Route path="*" component={NotFoundPage} />*/}
          </Switch>
          {/*<Footer />*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
