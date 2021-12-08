const express = require('express');

//router
const router = express.Router();
const control = require('../control/blogControl');
//blog-routes
router.get('/',(req, res) => {
    res.render('blogs/blog');
})
router.get('/create',(req, res) => {
    res.render('blogs/create');
})
router.get('/view', control.blog_view);
router.post('/create', control.blog_post);
router.delete('/:id', control.blog_delete);
module.exports = router;