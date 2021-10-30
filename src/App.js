import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import firebase from "./firebase";
import "firebase/compat/firestore";

function App() {
  const [email, setEmail] = useState("");
  console.log(firebase.firestore());

  var updateInput = (e) => {
    setEmail(e.target.value);
  };

  var addEmail = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    // console.log(db);
    // db.settings({
    //   timestampsInSnapshots: true,
    // });
    const emailRef = db.collection("emails").add({
      email: email,
    });
    setEmail("");
    // window.location.reload(false);
  };

  return (
    <div className="outer">
      <div className="header">Pipeline</div>
      <div className="headding">A one-stop-shop for the job search</div>
      <div className="sub-headding">
        The job search can be draining, but Pipeline makes it faster with our
        centralized application tracking and company specific insights.
      </div>

      <div>
        <form onSubmit={addEmail}>
          <div className="input-div">
            <input
              placeholder="Your email"
              onChange={updateInput}
              value={email}
              className="input"
            />
            <button className="submit-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
