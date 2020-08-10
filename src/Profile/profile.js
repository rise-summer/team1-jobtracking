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
          <PostWrapper>
             
            <Card style={{ marginTop: 16 }} type="inner">
              <progressBar/>
              
              <Addition>
              <div class="nav-container" >
                
                <div><button class="enter"> Enter a new Application </button> </div>
                
                <div> <button class= "archive"> Archive </button></div>

                <div> <button class="edit"> Edit Status </button> </div>

                </div>
           
                </Addition>
               
            </Card>
            <Card style={{ marginTop: 16 }} type="inner" title="Application #1">
              Aplication description
               
            </Card>
            <Card style={{ marginTop: 16 }} type="inner" title="Application #2">
              Application description
               
            </Card>
          </PostWrapper>
      </Fragment>
      )
    }
}
export default Profile;





