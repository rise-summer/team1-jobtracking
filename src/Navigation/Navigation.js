import React from "react";
import "./Navigation.css"

class Navigation extends React.Component{
    render() {
        return (
        <div class="nav-container" >


            <div> <button class="nav-sections">Log In </button> </div>  
            
            <div> <button class="nav-sections"> Sign Up </button></div>
            
            <div> <button class= "nav-sections"> Contact Us </button> </div>   

       </div>
    );
  }
}
  
  export default Navigation;