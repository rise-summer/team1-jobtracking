import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavProfile";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition} from './profileStyle'
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
                <button class="enter"> Enter a new Application</button>
                <button class= "archive"> Archive </button>
                <button class="search"> Search Apps</button> 
              </Addition>
            </Card>
                     
            <Card style={{ marginTop: 16 }} type="inner" title="Application #1">
              <h1>Facebook</h1>
              <h2>#Software Engineer 2021 Summer Intern</h2>
              <p>The description goes here, the webscraper would ideally take this form the application site so that the user doen't have to manually enter it</p>
              <p> Date Applied:11/01/2020 || Deadline: 12/01/2020</p>
            </Card>
            
            <Card style={{ marginTop: 16 }} type="inner" title="Application #2">
              Application description
            </Card>

          </PostWrapper>
        </div>
         
        <div class="rightcolumn">
             <h1>UXStudent</h1>
             <p> Sharifa Jesmin </p>
             <p> Majoring in Informatics</p>
             <p> Attending University of California, Irvine</p>
             <Addition>
                <span className='position1'>#UX/UI</span>
                <span className='position2'>#UX Research</span>
                <span className='position3'>#Developer</span>
             </Addition>

             <button>View Your Post</button>
             
          </div>
    </Fragment>
    )
  }
}
export default Profile;