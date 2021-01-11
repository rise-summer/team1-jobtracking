let sql = require('../db');
const uuid = require('uuid');

function Post(post, uid) {
    console.log('post: ' + JSON.stringify(post));
    this.title = post.title;
    this.content = post.content;
    this.tag = post.tag;
    this.created_at = post.created_at;
    this.user_id = uid;
    this.post_id = uuid();
}

Post.createPost = (newPost, result) => {
    let stmt = `INSERT INTO post(title, content, tag, created_at, user_id) VALUES(?, ?, ?, ?)`;
    let info = [newPost.title, newPost.content, newPost.tag, newPost.created_at, newPost.user_id];
    sql.query(stmt, info, (err, res) => {
        if (err) result(err, null);
        else result(null, newPost);
    });
}

Post.getNextGroupOfPosts = (offset) => {
    sql.query('SELECT * FROM post ORDER BY created_at DESC LIMIT 10 OFFSET ?', [offset], (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

Post.getPostById = (postId) => {
    sql.query('SELECT * FROM post WHERE post_id = ? ', postId, (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

Post.getAllPostForUser = (userId, result) => {
    let stmt = `SELECT * FROM post WHERE user_id=?`;
    sql.query(stmt, userId, (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    })
}

Post.removePost = (postId, result) => {
    sql.query('DELETE FROM post WHERE post_id = ?', postId, (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    });
}

module.exports = Post;
