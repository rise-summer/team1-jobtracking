import React, { createElement, useState,Component } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Comments extends Component {
    render(){
        return (
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
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