import React,{Component, Fragment} from 'react';
//import Navigation from "../Navigation/NavigationLogOut";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Button}from './ConStyle'
import "./Congrats.css"


class CongratsCard extends Component {

    render(){
      return (
        <Fragment>
          <PostWrapper>
            <Card style={{ marginTop: 16 }} type="inner">
            <h1> CONGRATULATIONS!</h1> 
                <p>More encouraging words here. Amajing Job! :)</p>
              
              <Addition>
                <span className='track'>Interview Offered</span>
               </Addition>
                
            </Card>
             
             
          </PostWrapper>
      </Fragment>
      )
    }
}
export default CongratsCard;

/*<span className='update'> Update description of application</span>
                <input type="text"/>  */




