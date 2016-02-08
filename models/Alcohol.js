var mongoose = require('mongoose');

var alcoholSchema = new mongoose.Schema({
	name: {type: String, required: true},
	slogan: String,
});

module.exports = mongoose.model('Alcohol', alcoholSchema);
