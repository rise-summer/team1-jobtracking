import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition} from './style'
 
 


 
class ProfileMini extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
        
          
          <PostWrapper>
            <span className="left">
            <Card style={{ marginTop: 16 }} type="inner">
               

              <Addition> 
                <a href="/userApp1"><button class="enter"> Enter a new Application</button></a>
                <button class= "archive"> Archive </button>
                <button class="search"> Search Apps</button> 
              </Addition>
            </Card>
                     
            <Card style={{ marginTop:16 }} type="inner" title="Application #1" >
           
             
              <Addition>
                  <span class="slidecontainer">
                    <p>Submitted</p>
                    <input type="range" min="1" max="100" value="50"></input>
                  </span>

                  <a href="/editApp1"><img class='editIcon'src="https://image.flaticon.com/icons/svg/282/282153.svg"></img></a>
                  <h1>Facebook</h1>
                  
                  <h2>#Software Engineer 2021 Summer Intern</h2>
                  <p>The description goes here, the webscraper would ideally take this form the application site so that the user doen't have to manually enter it</p>
                  <p> Date Applied:11/01/2020 || Deadline: 12/01/2020</p>
              </Addition>
            </Card>
            
            <Card style={{ marginTop: 16 }} type="inner" title="Application #2">
              <Addition>
                  <span class="slidecontainer">
                    <p>Submitted</p>
                    <input type="range" min="1" max="100" value="50"></input>
                  </span>
                  
                  <a href="/editApp1"><img class='editIcon'src="https://image.flaticon.com/icons/svg/282/282153.svg"></img> </a>
                  <h1>Microsoft</h1>
                  <h2>#Software Engineer 2020 Summer Intern</h2>
                  <p>The description goes here, the webscraper would ideally take this form the application site so that the user doen't have to manually enter it</p>
                  <p> Date Applied:11/01/2019 || Deadline: 12/01/2019</p>
              </Addition>
            </Card>
            </span>

             
              <a href="/userProfile"><img class='profile'src="https://image.flaticon.com/icons/svg/2622/2622309.svg"></img> </a>
             

          </PostWrapper>
        
        
         
    </Fragment>
    )
  }
}
export default ProfileMini;