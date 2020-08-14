import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Button, Obutton, Textfield}from './App1Style'
 
class App1 extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
        <PostWrapper>
           <Card>
              <a href="/userProfile"><span>Back to Application </span></a>
                <Addition >
                    <span className= "header"> <h1> Add a new application!</h1> 
                      <h2>We're excited to see where this takes you!</h2>
                      <input className="text"  placeholder="Current description shows up as greyed out text, user able to edit."/> 
                    </span>

                    <a href="/userApp2"> <span className="submitButton"> <button> Submit link</button> </span></a>
                </Addition>
            </Card>
         </PostWrapper>
     </Fragment>
    )
  }
}
export default App1;

 