import React, { Component, Fragment } from 'react';
import Navigation from "../navigation";
import { Card } from 'antd';
import {
  Addition,
  LoadComment,
  Headding,
  TextDiv,
  CommentBtnDiv,
  Text,
  CommentButton,
  My_Card,
  BackgroundDiv
} from './style';
import Comments from './components/comments'




class MainFeed extends Component {



  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  createComment() {
    const item = this.state.list;
    console.log(item)
    const title = '';
    const text = '';
    item.push({ title, text })
    this.setState({ list: item })

  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./CustomCard.js";
    script.async = true;

    document.body.appendChild(script);
  }

  
  render() {
    return (
      <Fragment>
        <Navigation />
        <BackgroundDiv>
          <Headding>
            <TextDiv>
              <Text> Most Recent Posts </Text>
            </TextDiv>
            <CommentBtnDiv>
              <CommentButton onClick={this.createComment.bind(this)}>Create new post</CommentButton>
            </CommentBtnDiv>
          </Headding>
          <div id = 'my-card'></div>
          <My_Card type="inner" >
            {this.state.list.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </My_Card>
          <My_Card type="inner" title="CREATE TITLE OF POST/UPDATE">
            Here is where the user can update on their application status or talk about their experience.
              <Addition>
              <span className='time'>Time</span>
              <span className='position'>#Position</span>
              <span className='status'>#Status</span>
            </Addition>
            <ul>{
              this.state.list.map((item, index) => {
                return <li key={index}><Comments /></li>
              })
            }
            </ul>
          </My_Card>
          <LoadComment onClick={this.getMoreComments.bind(this)}>See the Comments</LoadComment>


          <My_Card style={{ marginTop: 30 }} type="inner" title="TITLE OF POST/UPDATE">
            The user can talk about their experience here before being cut off 100 words, then it goes under the fold.
              <Addition>
              <span className='time'>Time</span>
              <span className='position'>#Position</span>
              <span className='status'>#Status</span>
            </Addition>
          </My_Card>
          <LoadComment><Comments /></LoadComment>
        </BackgroundDiv>
      </Fragment>
    )
  }
  getMoreComments(event) {
    this.setState({
      list: [...this.state.list, 1]
    })
  }
}
export default MainFeed





