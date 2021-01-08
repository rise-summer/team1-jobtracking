import React from 'react';
import './style.css';

import AddComment from './AddComment';
import Comment from './comment';
import moment from 'moment';

class CommentSection extends React.Component {
    render() {
        const test = [
            {
                name: 'Lauren',
                date: moment().format('dddd'),
                message: 'hi'
            },
            {
                name: 'ben',
                date: 'tuesday',
                message: 'ayyyyyyyyyyyyyyy'
            }
        ];

        return (
            <div class='comment-section'>
                {test.map(comment => (
                    <Comment name={comment.name} date={comment.date} message={comment.message} />
                ))}

                <Comment name={'Lauren Yoon'} date={'5:00pm, Monday'} message={'I heard that was crazy! tes st est est es tse ta s df asdf asd f ds jzklxcj vxczlk;vj zxclkvj xczlk;vjzxckl;vjcxklvjzxc;kl kvczjxvklzxj'} />
                <Comment name={'Ben'} date={'7:00pm, Monday'} message={'I heard that was crazy too!'} />
                <AddComment name={'Myself'} />
            </div>
        );
    }
}

export default CommentSection;