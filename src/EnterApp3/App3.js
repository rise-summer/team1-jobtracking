import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Style, Button, Obutton, Textfield}from './App3Style'
 
class App3 extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
          <PostWrapper>
             <Card>
              
               <Addition>
                     <h1> Great Job Applying!</h1> 
                      <h3>You have successfully added Facebook Software Engineering Intern to your tracked applications.!</h3>
                      <br></br>
                   
                      <h3>See what other people are saying here:</h3>
                      <input className="position"  placeholder="#Software Engineering Intern"/> 
                     
                     
                  </Addition>

                  <a href="/userProfile"><span>Back to your application </span></a>
                  
              </Card>
          </PostWrapper>
     </Fragment>
    )
  }
}
export default App3;

 