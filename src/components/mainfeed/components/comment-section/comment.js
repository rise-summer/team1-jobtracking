import React from 'react';
import './style.css';

class Comment extends React.Component {
	render() {
		return (
            <div class='container'>
                <div class='side'>
                    <div><b>{this.props.name}</b></div>
                    <div>{this.props.date}</div>
                </div>
                <div class='message'>
                    {this.props.message}
                </div>
            </div>
        );
	}
}

export default Comment;