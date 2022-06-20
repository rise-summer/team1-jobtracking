import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/login";
import SignUp from "./components/signup";
import MainFeed from "./components/mainfeed";
import Trackr from "./components/trackr";
import Track1 from "./components/trackr/components/trackrpages/track1";
import Track2 from "./components/trackr/components/trackrpages/track2";
import Track3 from "./components/trackr/components/trackrpages/track3";
import Edit1 from "./components/trackr/components/editpages/edit1";
import YourPosts from "./components/mainfeed/yourposts";
import LandingPage from "./components/landingpage";
import NotFound from "./components/404/NotFound";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/landingpage" exact component={LandingPage}></Route>
            <PrivateRoute path="/mainfeed">
              <MainFeed />
            </PrivateRoute>
            <PrivateRoute path="/trackr/track1">
              <Track1 />
            </PrivateRoute>
            <PrivateRoute path="/trackr/track2">
              <Track2 />
            </PrivateRoute>
            <PrivateRoute path="/trackr/track3">
              <Track3 />
            </PrivateRoute>
            <PrivateRoute path="/trackr/edit1">
              <Edit1 />
            </PrivateRoute>
            <PrivateRoute path="/trackr">
              <Trackr />
            </PrivateRoute>
            <PrivateRoute path="/yourposts">
              <YourPosts />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
