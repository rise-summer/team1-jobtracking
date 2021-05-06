let Post = require('../model/postModel');
let User = require('../model/userModel');

exports.create_new_post = async(req, res) => {
    User.getUserByEmail(req.body.body.userEmail, (err, result) => {
        if (err) {
            res.status(409).send({
                error: true,
                message: err.message
            });
            return;
        }
        const user_id = result[0].id;
        const newPost = new Post(req.body.body, user_id);
        Post.createPost(newPost, (error,_) => {
            if (error) {
                res.status(409).send({
                    error: true,
                    message: error.message
                })
            } else {
                res.status(200).send({
                    error: false,
                    message: 'Post successfully created.',
                    body: newPost
                });
            } 
        });
    });
};

exports.get_posts = async(req, res) => {
    const offset = parseInt(req.headers.offset);
    Post.getNextGroupOfPosts(offset, (error, posts) => {
        if (error) {
            res.status(409).send({
                error: true,
                message: error.message
            })
        } else {
            res.status(200);
            res.send({
                error: false,
                message: posts,
                body: posts
            });
        }
    });
}

exports.get_post = async(req, res) => {
    User.getUserByEmail(req.body.body.userEmail,(err,result)=>{
        if(err){
            res.status(409).send({ error: true, message: err.message})
            return;
        }
        const user_id=result[0].id;
        const post_id=req.params.post_id;

        Post.getPostById(post_id, (error, post) => {
            if (error == null) {
                if (post[0].user_id == user_id) {
                    res.status(200).send({
                        error: false,
                        message: post
                    });
                    return;
                } else {
                    res.status(403).send('Unauthorized');
                    return;
                }
            } else {
                res.status(409).send({
                    error: true,
                    message: error.message
                });
            }
        });
    });
}


exports.get_posts_of_user = async(req, res) => {
    User.getUserByEmail(req.body.userEmail, (err, result) => {
        if (err) {
            res.status(409).send({
                error: true,
                message: err.message
            });
            return;
        }

        const user_id = result[0].id;
        Post.getAllPostForUser(user_id, (error, posts) => {
            if (error) {
                res.status(409).send({
                    error: true,
                    message: error.message
                })
            } else {
                res.status(200).send({
                    error: false,
                    message: posts
                });
            } 
        });
    });
}

exports.delete_post = async(req, res) => {
    User.getUserByEmail(req.body.userEmail, (err, result) => {
        if (err) {
            res.status(409).send({
                error: true,
                message: err.message
            });
            return;
        }
        const user_id=result[0].id;
        const post_id=req.params.post_id;

        Post.getPostById(post_id, (err, post) => {
            if (err == null) {
                if (result[0].user === user_id) {
                    Post.removePost(post_id, (error, post) => {
                        if (error == null) {
                            res.status(200).send({ 
                                error: false,
                                data: post
                            });
                            return;
                        } else {
                            res.status(409).send({
                                error: true,
                                message: error.message
                            });
                            return;
                        }
                    });
                } else {
                    res.status(403).send('Unauthorized');
                    return;
                }
            }
        });
    });
}