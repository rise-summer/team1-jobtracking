const express = require('express');
const router = express.Router();

// Require controller modules
const job_controller = require('../controllers/jobController');

/** JOB ROUTES */

// POST 
router.post('/api/job/create', job_controller.create_job_app);

// TODO: Fix API to match other job routes
// GET
router.get('/api/jobs', job_controller.get_jobs);

// GET
router.get('/api/job/:jobId', job_controller.get_job);

// DELETE
router.delete('/api/job/delete/:jobId', job_controller.delete_job);

// PUT
router.put('/api/job/update/:jobId', job_controller.update_job);