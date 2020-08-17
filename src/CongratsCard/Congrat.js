import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Button}from './ConStyle'
import LocaleProvider from 'antd/lib/locale-provider';
 


class CongratsCard extends Component {

    render(){
      return (
        <Fragment>
          <Navigation/>
          <PostWrapper>
            
               <Card>
               <span className= "header"> <h1> CONGRATS!</h1> 
                    <h2>Onto the next step in this jouney! Amajing Job :)</h2>
              </span>
            
              
                <Addition >
      
     
                    
                    <div className= "share">
                      <h3> Share your experience in this update as a post? </h3>
                      <a href="/userApp1"><span className="postButton"> <button> create new post</button> </span></a>
                      <img className="shareIcon" src="https://image.flaticon.com/icons/svg/149/149049.svg"></img>
                    </div>
                    
                    <br></br>

                    <div className="see"> 
                      <p> See what other people have said here: </p>
                      <input  className="similar" placeholder="#Facebook Software Engineering Intern"/>
                    </div>
                    

                    <a href="/userProfile"><span className="backButton"> <button> Back to Your Application</button> </span></a>
                  
            
                </Addition>
              
              </Card>
           </PostWrapper>
       </Fragment>
      )
    }
}
export default CongratsCard;

 




