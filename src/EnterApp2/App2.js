import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Style, Button, Obutton, Textfield}from './App2Style'
 
class App2 extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
        <PostWrapper>
             <Card>
               <a href="/userApp1"><span>Back to Application </span></a>
                <Addition >
                      <span className= "header"> <h1> Great!</h1> 
                        <h2>Click to add any parameters!</h2>
                            <input className="text"  placeholder="https://www.linkedin.com/jobs"/> 
                      </span>
                      
                      <div className= "post">
                        <input className="position"  placeholder="Software Engineering Intern"/> 
                        <input className="name"  placeholder="Facebook"/> 
                      </div>
                      
                      <input className="text"  placeholder="Date of the dealine: 10/01/2020"/> 
                      <textarea className="textArea"> As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. 
                      In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns.
                      </textarea>
                      <br></br>

                      <h2 className="whatStage">What stage are you in applying?</h2>
                    
                      <span class="slidecontainer">
                        <p>Submitted</p>
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                      </span>
                      <span className="complete"><a href="/userApp3"><span>Complete entering application</span></a></span>
                  </Addition>
              </Card>
          </PostWrapper>
     </Fragment>
    )
  }
}
export default App2;

 