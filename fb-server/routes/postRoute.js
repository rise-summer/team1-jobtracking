const express = require('express');
const router = express.Router();

// Require controller modules
const post_controller = require('../controllers/postController');

/** POST ROUTES */

// TODO: Name each API

// POST
router.post('/api/job/create', post_controller.create_new_post);

// GET
router.get('/api/post/getUserPosts/:userId', post_controller.get_posts_of_user);

// GET
router.get('/api/post/fetchPosts', post_controller.get_posts);