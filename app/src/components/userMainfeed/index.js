import React,{Component, Fragment} from 'react';
import Navigation from "../Navigation/NavigationLogIn";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {PostWrapper, Addition, NewComment,LoadComment}from './style';
import Comments from '../mainfeed/components/comments'
import NewPost from './components/index'

class MainFeed extends Component {

    constructor(props){
      super(props);
      this.state = {
        open:false,
        inputValue:'',
        list:[]
      }
    }

    render(){
      return (
        <Fragment>
          <Navigation/>
          <PostWrapper>
            <NewPost/>
            <h2>Most recent posts:</h2>

            <Card type="inner" title="Google SWE Experience" onClick={this.toggleCard.bind(this)}>
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              {this.state.open ? (
                <Fragment>
                <Addition>
                  <span className='position'>#Position</span>
                  <span className='status'>#Status</span>
                  <span className='time'>Time</span>
                </Addition>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>

              <ul>{
              this.state.list.map((item,index) => {
              return( <p key={index}>
                <p>UserName</p>
                {item}
                </p>)
              })
            }</ul>
                </Fragment>
              ):null}
              </Card>
              <NewComment><span>UserName</span><input placeholder="add a new post" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input><button onClick={this.addNewComment.bind(this)}>Comment</button></NewComment>

            <Card style={{ marginTop: 30 }} type="inner" title="Google SWE Experience">
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              <Addition>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
                <span className='time'>Time</span>
              </Addition>
            </Card>
            <NewComment><span>UserName</span><input placeholder="add a new post"></input><button>Comment</button></NewComment>

            <Card style={{ marginTop: 30 }} type="inner" title="Google SWE Experience">
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              <Addition>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
                <span className='time'>Time</span>
              </Addition>
            </Card>
            <NewComment><span>UserName</span><input placeholder="add a new post"></input><button>Comment</button></NewComment>

            <Card style={{ marginTop: 30 }} type="inner" title="Google SWE Experience">
              Last summer I interned at Google as a SWE. It was a great experience, and here are some of my key insights.
              <Addition>
                <span className='position'>#Position</span>
                <span className='status'>#Status</span>
                <span className='time'>Time</span>
              </Addition>
            </Card>
            <NewComment><span>UserName</span><input placeholder="add a new post"></input><button>Comment</button></NewComment>

          </PostWrapper>
      </Fragment>
      )
    }
    toggleCard(event){
      this.setState({
        open:!this.state.open
      })
    }
    handleInputChange(event){
      const value = event.target.value;
      this.setState(()=> ({
        inputValue:value
      }))
    }
    addNewComment(event){
      this.setState((prevState) => ({
        list:[...prevState.list, prevState.inputValue], 
        inputValue: ''
    }))
    }
}
export default MainFeed








