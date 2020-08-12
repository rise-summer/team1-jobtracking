import React,{Component, Fragment} from 'react';
//import Navigation from "../Navigation/NavigationLogOut";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Button}from './ConStyle'
import LocaleProvider from 'antd/lib/locale-provider';
 


class CongratsCard extends Component {

    render(){
      return (
        <Fragment>
          <PostWrapper>
            
               <Card>
               <span className= "header"> <h1> CONGRATS!</h1> 
                    <h2>Onto the next step in this jouney! Amajing Job :)</h2>
              </span>
            
              
                <Addition >
                    <div className= "addNotes">
                    <p > Add Notes to your Application Log? </p>
                    <img className="editIcon" src="https://image.flaticon.com/icons/svg/282/282153.svg"></img>
                    <img className="crossIcon" src="https://image.flaticon.com/icons/svg/748/748122.svg"></img>
                    </div>
                    
                    <input className="text"  placeholder="Current description shows up as greyed out text, user able to edit."/>  
                    
                    
                    
                    <div className= "share">
                      <p> Share your experience in this update as a post? </p>
                      <img className="shareIcon" src="https://image.flaticon.com/icons/svg/638/638862.svg"></img>
                    </div>

                    <div>
                    <label > See similar post here: 
                    <input  className="similar" placeholder="#Facebook Software Engineering Intern"/></label>
                    </div>
                    

                    <span className="backButton"> <button> Back to Your Application</button> </span>
                  
            
                </Addition>
              
              </Card>
           </PostWrapper>
       </Fragment>
      )
    }
}
export default CongratsCard;

 




