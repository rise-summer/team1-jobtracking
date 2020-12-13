import React from 'react';
import './style.css';

class AddComment extends React.Component {
    render() {
        return (
            <div class='container'>
                <div class='side'><b>{this.props.name}</b></div>
                <input class='message' type='text' placeholder='Add a comment here...' />
            </div>
        );
    }
}

export default AddComment;