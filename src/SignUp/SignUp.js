import React,{Component, Fragment} from 'react';
import { LoginWrapper,Item,Button,Textfield,LoginBoard} from './SignUpStyle';
 
import Navigation from "../Navigation/NavigationLogOut";



 class signUp extends Component {
     render(){
         return (
            <Fragment>
                <Navigation/>
                    <LoginWrapper>
                        <div className="signUp-container"> 
                             <h1> WELCOME___________</h1>  
                                <input className="name"  placeholder="  create your username"/> 
                                <input className="name"  placeholder="  youremail@email.com"/> 
                                <input className="name"  placeholder="  set your password"/> 
                                <input className="name"  placeholder="  confirm your password"/> 


                                <div className= "signUp">
                                    <h2> <a href="/userMain"> COMPLETE SIGN UP</a></h2>
                                   <h5 className="option"> <a href="/Login"> Have an account? Sign in here. </a></h5>
                                   
                               </div>

                        </div>
                                
                               
              
             
             </LoginWrapper>
             </Fragment>
         )
     }
 }
 export default signUp;