var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrgSchema = new Schema({
	name:{type:String},
});
module.exports = mongoose.model('Org', OrgSchema);