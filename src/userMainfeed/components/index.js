import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {NewPostWrapper,TitleInput,ContentInput,Addition,Close,CreatePost}from './style';


class NewPost extends Component {

    constructor (props) {
      super(props)
      this.state = {show : true};
      this.togglePost = this.togglePost.bind(this)
    }

    togglePost = () => {
      const { show } = this.state;
      this.setState({show: !show})
    }

    render(){
      if(this.state.show){
      return (
        <NewPostWrapper>
            <Close onClick={this.togglePost}><img src="https://image.flaticon.com/icons/svg/545/545676.svg"></img></Close>
            <TitleInput placeholder="Create title of post/update"/>
            <ContentInput className="content" placeholder="Here is where the user can update on their application status or talk about their experiences"/>
            <Addition>
                <button className='position'>#Position</button>  
                <button className='industry'>#Industry</button>
                <button className='status'>#Status</button>
                <button className='post'>Post</button>  
            </Addition>
      </NewPostWrapper>
      )
    }
    else{
      return (
        <CreatePost onClick={this.togglePost}><button>Create a post</button></CreatePost>
      )
    }
  }
}
export default NewPost









