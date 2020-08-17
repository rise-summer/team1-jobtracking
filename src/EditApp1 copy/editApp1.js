import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import './node_modules/antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition}from './editApp1Style'
 
class editApp1 extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
        <PostWrapper>
             <Card>
               <a href="/userProfile"><img className="crossIcon" src="https://image.flaticon.com/icons/svg/545/545676.svg"></img></a>
               <h1> What step are you at now?</h1> 
                <h2>Click to edit any of the parameters!</h2>
                
                <Addition >
              
                      <span class="slidecontainer">
                        <p>Submitted</p>
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                      </span>
                      
                       
                      
                      
                      <h3 className="add">Add notes to your application log below:</h3>
                      <textarea className="textArea"> add notes here...</textarea>
                      
                      
                      <br></br>
 
                      <span className="complete"><a href="/userApp3"><span>Complete Update</span></a></span>
                  </Addition>
              </Card>
          </PostWrapper>
     </Fragment>
    )
  }
}
export default editApp1;

 