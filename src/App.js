import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup/SignUp";
import MainFeed from "./components/mainfeed";
import ManagePosts from "./components/managepost";
import UserMain from "./components/userMainfeed";
import Profile from "./components/profile";
import Trackr from "./components/trackr";
import Track1 from "./components/trackr/track1";
import Track2 from "./components/trackr/track2";
import Track3 from "./components/trackr/track3";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/userProfile" exact component={Profile}></Route>
          <Route path="/" exact component={MainFeed}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/usermain" exact component={UserMain}></Route>
          <Route path="/manageposts" exact component={ManagePosts}></Route>
          <Route path="/trackr" exact component={Trackr}></Route>
          <Route path="/trackr/track1" exact component={Track1}></Route>
          <Route path="/trackr/track2" exact component={Track2}></Route>
          <Route path="/trackr/track3" exact component={Track3}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
