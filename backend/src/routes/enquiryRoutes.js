const express = require('express');
const Router = express.Router();
const authorization = require('../middlewares/auth');
const {createEnquiry, getAllEnquiries} = require('../controllers/enquiryController');


Router.post('/enquiries', createEnquiry);
Router.get('/enquiries', authorization, getAllEnquiries);

module.exports = Router;