import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition,LoadComment}from './style';
import Comments from '../mainfeed/components/comments'
import NewPost from './components/index'

class MainFeed extends Component {

    constructor(props){
      super(props);
      this.state = {
        list:[],
      }
    }

    render(){
      return (
        <Fragment>
          <Navigation/>
          <PostWrapper>
            <NewPost/>
            <div>Most recent posts:</div>
            <Card type="inner" title="Google SWE Experience">
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              <Addition>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
                <span className='time'>Time</span>
              </Addition>
              <ul>{
              this.state.list.map((item,index) => {
                return <li key={index}><Comments/></li>
              })
            }
            </ul>
            </Card>
            <LoadComment onClick={this.getMoreComments.bind(this)}>See the Comments</LoadComment>
            <Card style={{ marginTop: 30 }} type="inner" title="Google SWE Experience">
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              <Addition>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
                <span className='time'>Time</span>
              </Addition>
            </Card>
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









