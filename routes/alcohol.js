var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Alcohol = require('../models/Alcohol.js');

router.get('/', function(req, res, next) {
	Alcohol.find(function (err, alcohol) {
		if (err) return next(err);
		res.json(alcohol);
	});
});

router.get('/:id', function(req, res, next) {
    Alcohol.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
	Alcohol.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', function(req, res, next) {
    Alcohol.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    Alcohol.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
