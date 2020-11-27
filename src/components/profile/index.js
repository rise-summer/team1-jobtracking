import React,{Component, Fragment} from 'react';
import Navigation from "../navigation";
//import '../userMainfeed/components/node_modules/antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition} from './style'
import "./profile.css"
 


 
class Profile extends Component {

  render(){
    return (
      <Fragment>
        <Navigation/>
        <div class="leftcolumn">
         
          <PostWrapper>
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

                  <img class='editIcon'src="https://image.flaticon.com/icons/svg/282/282153.svg"></img>
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
                  
                  <img class='editIcon'src="https://image.flaticon.com/icons/svg/282/282153.svg"></img>
                  <h1>Microsoft</h1>
                  <h2>#Software Engineer 2020 Summer Intern</h2>
                  <p>The description goes here, the webscraper would ideally take this form the application site so that the user doen't have to manually enter it</p>
                  <p> Date Applied:11/01/2019 || Deadline: 12/01/2019</p>
              </Addition>
            </Card>

          </PostWrapper>
        </div>
         
        <div class="rightcolumn">
             <h1>UXStudent</h1>
             <h2> Sharifa Jesmin </h2>
             <p> Majoring in Informatics</p>
             <p> Attending University of California, Irvine</p>
             <Addition>
                <span className='position1'>#UX/UI </span>
                <span className='position2'>#UX Research</span>
                <span className='position3'>#Developer</span>
                
                <button className='view'> View Your Post</button>
                
             </Addition>

             
          </div>
    </Fragment>
    )
  }
}
export default Profile;