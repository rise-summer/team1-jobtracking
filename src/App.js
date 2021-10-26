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
    <div className="App">
      <div>
        <form onSubmit={addEmail}>
          <div style={{ margin: "10vh auto", width: "75%" }}>
            <input 
              placeholder="Your email"
              onChange={updateInput}
              value={email}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">submit email</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
