import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import MainFeed from "./components/mainfeed";
import Trackr from "./components/trackr";
import Track1 from "./components/trackr/components/trackrpages/track1";
import Track2 from "./components/trackr/components/trackrpages/track2";
import Track3 from "./components/trackr/components/trackrpages/track3";
import Edit1 from "./components/trackr/components/editpages/edit1";
import YourPosts from "./components/mainfeed/yourposts"
import LandingPage from "./components/landingpage"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/mainfeed" exact component={MainFeed}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/trackr" exact component={Trackr}></Route>
          <Route path="/trackr/track1" exact component={Track1}></Route>
          <Route path="/trackr/track2" exact component={Track2}></Route>
          <Route path="/trackr/track3" exact component={Track3}></Route>
          <Route path="/trackr/edit1" exact component={Edit1}></Route>
          <Route path='/yourposts' exact component={YourPosts}></Route>
          <Route path='/landingpage' exact component={LandingPage}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
