import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition}from './editApp2Style'
 
class editApp2 extends Component {

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
                 
                      <h4 className="add">Edit position Information: </h4>
                      
                      <div className= "post">
                        <input className="position"  placeholder="Software Engineering Intern"/> 
                        <input className="name"  placeholder="Facebook"/> 
                      </div>

                      <div className= "post">
                        <input className="position"  placeholder="Dealine: 10/01/2020"/> 
                        <input className="name"  placeholder="Menlo Park, California"/> 
                      </div>
                      
                      
                      <textarea className="textArea"> As an intern, you'll become an expert on the Facebook Terminal and gain a deeper understanding of technology and finance. 
                      In addition to your projects, you'll participate in coding challenges, attend tech talks and network with other interns.
                      </textarea>

 
                      <span className="complete"><a href="/congrates">Complete Update</a></span>

                      




                  </Addition>
              </Card>
          </PostWrapper>
     </Fragment>
    )
  }
}
export default editApp2;

 