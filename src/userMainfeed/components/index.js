import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {NewPostWrapper,TitleInput,ContentInput,Addition}from './style';


class NewPost extends Component {

    render(){
      return (
        <NewPostWrapper>
            <TitleInput placeholder="Create title of post/update"/>
            <ContentInput class="content" placeholder="Here is where the user can update on their application status or talk about their experiences"/>
            <Addition>
                <button className='position'>Position▼</button>
                <button className='status'>Status▼</button>
            </Addition>

      </NewPostWrapper>
      )
    }
}
export default NewPost









