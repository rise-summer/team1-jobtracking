const express = require('express');
const router = express.Router();

// Require controller modules
const scrape_controller = require('../controllers/scrapeController');

/** SCRAPE ROUTES */

// POST
router.post('/api/scrape', scrape_controller.scrape);