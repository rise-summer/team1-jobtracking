import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogOut";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, Button}from './style'


class MainFeed extends Component {

    render(){
      return (
        <Fragment>
          <Navigation/>
          <PostWrapper>
            <Card type="inner" title="CREATE TITLE OF POST/UPDATE">
              Here is where the user can update on their application status or talk about their experience.
              <Addition>
                <span className='time'>Time</span>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
              </Addition>
            </Card>
            <Card style={{ marginTop: 16 }} type="inner" title="TITLE OF POST/UPDATE">
              The user can talk about their experience here before being cut off 100 words, then it goes under the fold.
              <Addition>
                <span className='time'>Time</span>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
              </Addition>
            </Card>
          </PostWrapper>
      </Fragment>
      )
    }
}
export default MainFeed





