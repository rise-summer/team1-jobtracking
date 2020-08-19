import React,{Component, Fragment} from 'react';
import { LoginWrapper} from './style';
 
import Navigation from "../Navigation/NavigationLogOut";



 class Login extends Component {
     render(){
         return (
            <Fragment>
                <Navigation/>
                    <LoginWrapper>
                        <div className="logIn-container"> 
                             <h1> WELCOME___________</h1>  
                                <input className="name"  placeholder="   username/email"/> 
                                <input className="name"  placeholder="  password"/> 
                            
                                <div className= "signUp">
                                    <h2> <a href="/userMain"> LOG IN</a></h2>
                                   <h5 className="option"> <a href="/SignUp"> Don't have an account? Sign up here. </a></h5>
                                   
                               </div>

                        </div>
                                
                               
              
             
             </LoginWrapper>
             </Fragment>
         )
     }
 }
 export default Login;