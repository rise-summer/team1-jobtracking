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
            
            <Card style={{ marginTop: 16 }} type="inner">
               
               <span className= "header"> <h1> CONGRATS!</h1> 
                    <h2>Onto the next step in this jouney! Amajing Job :)</h2>
              </span>
            
              
                <Addition >

                    <p className="add"> Add Notes to your Application Log? </p>
                    <img className='editIcon'src="https://image.flaticon.com/icons/svg/282/282153.svg"></img>
                    <img className="crossIcon" src="https://image.flaticon.com/icons/svg/748/748122.svg"></img>
                    <input className="text"  placeholder="Current description user able to edit"/>  
                    
                    
                    <span className= "share">
                      <p> Share your experience in this update as a post? </p>
                      <img className="shareIcon" src="https://image.flaticon.com/icons/svg/638/638862.svg"></img>
                    </span>


                    <label className="see" > See similar post here: 
                    <input type="similar" placeholder="#Facebook Software Engineering Intern"/></label>
                    

                    <button className="backButton"> Back to Your Application</button> 
                  
            
                </Addition>
                

               </Card>

           </PostWrapper>
       </Fragment>
      )
    }
}
export default CongratsCard;

 




