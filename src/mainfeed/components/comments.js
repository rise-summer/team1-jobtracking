import React, { createElement, useState,Component } from 'react';
import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Comments extends Component {
    render(){
        return (
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                I heard that was really crazy, wow, good luck! Thanks for sharing your experience.
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        );
    }
}
export default Comments