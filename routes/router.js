const express = require('express');

const r = express.Router();
const cr = require('../controller/Jomercontroller');

r.get('/', cr.main);
r.get('/home', cr.home);
r.get('/shop', cr.shop);
r.get('/about', cr.about);
r.get('/services', cr.services);
r.get('/blog', cr.blog);
module.exports = r;