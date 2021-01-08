import React from 'react';
import './style.css';

const Comment = (props) => {
		return (
            <div class='container'>
                <div class='side'>
                    <div><b>{props.name}</b></div>
                    <div>{props.date}</div>
                </div>
                <div class='message'>
                    {props.message}
                </div>
            </div>
        );
}

export default Comment;