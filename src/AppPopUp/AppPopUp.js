import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Button, Obutton, Textfield}from './PopStyle'
 


class AppPopUp extends Component {

    render(){
      return (
      
          <PostWrapper>
          <Obutton className='position'> Back to Application</Obutton>
            <Card style={{ marginTop: 16 }} type="inner">
                <h1> Add a New Application</h1> 
                    <p>We're excited to see where this takes you!</p>
                    <Textfield className='email'></Textfield>
    
            </Card>
            <Button className='position'>Submit link</Button>
             
             
          </PostWrapper>
     
      )
    }
}
export default AppPopUp;

/*<span className='update'> Update description of application</span>
                <input type="text"/>  */
