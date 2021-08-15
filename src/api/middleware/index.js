const express = require('express');
module.exports = ((app) => {
    // Body-parser middleware
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    app.use(require('express').static('public'))
    app.use(require('morgan')('dev'));
})