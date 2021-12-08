const express = require('express');
//data
const blog = require('../models/blog');

const blog_view = (req, res) => {
    blog.find().then((result) => {        
        res.render('blogs/view', {'result': result});
    })
    .catch((err) => {res.status(404).render('404');});
}

const blog_post = (req, res) => {
    const b = new blog(req.body);
    b.save()
    .then((result) => {
        res.redirect('/blog/view');
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blog/view'});
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {blog_view, blog_post, blog_delete};