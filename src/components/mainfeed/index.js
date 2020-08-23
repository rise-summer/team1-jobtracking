import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogOut";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition,LoadComment}from './style';
import Comments from './components/comments'

class MainFeed extends Component {

    constructor(props){
      super(props);
      this.state = {
        list:[]
      }
    }

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
              <ul>{
              this.state.list.map((item,index) => {
                return <li key={index}><Comments/></li>
              })
            }
            </ul>
            </Card>
            <LoadComment onClick={this.getMoreComments.bind(this)}>See the Comments</LoadComment>
            <Card style={{ marginTop: 30 }} type="inner" title="TITLE OF POST/UPDATE">
              The user can talk about their experience here before being cut off 100 words, then it goes under the fold.
              <Addition>
                <span className='time'>Time</span>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
              </Addition>
            </Card>
            <LoadComment><Comments/></LoadComment>
          </PostWrapper>
      </Fragment>
      )
    }
    getMoreComments(event){
      this.setState({
        list:[...this.state.list,1]
      })
    }
}
export default MainFeed





