let Post = require('../model/postModel');
let User = require('../model/userModel');

exports.create_new_post = async(req, res) => {
    console.log(req);
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
    // TODO: get certain amount of posts each time
    const offset = 0;
    Post.getNextGroupOfPosts(offset, (error, posts) => {
        if (error) {
            res.status(409).send({
                error: true,
                message: error.message
            })
        } else {
            res.status(200).send({
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
        user_id=result[0].id;
        post_id=req.params.post_id;

        Post.getPostById(post_id, (error, post) => {
            if (error) {
                res.status(409).send({
                    error: true,
                    message: error.message
                })
            } else {
                res.status(200).send({
                    error: false,
                    message: post
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

        user_id = result[0].id;
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
        user_id=result[0].id;
        post_id=req.params.post_id;

        Post.removePost(post_id, (error, post) => {
            if (error) {
                res.status(409).send({
                    error: false,
                    message: error.message
                });
            } else {
                res.status(200).send({
                    error: false,
                    message: post
                });
            }
        });
    });
}