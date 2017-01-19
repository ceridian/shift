var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pages = Schema({
    label: String,
	pageId: { type: String, required: true, index: { unique: true }},
    icon: String
});

module.exports = {name: 'Pages', Schema: Pages};