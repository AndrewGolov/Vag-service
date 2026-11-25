const {Schema, model} = require("mongoose");
const ROLES = require('../constants/roles.js')
const UserSchema = new Schema({
	login: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,

	},
	role:{
		type: Number,
		required: true,
		default: ROLES.CLIENT,
	},

	cars:[{type:Schema.Types.ObjectId, ref:'car'}]
},{timestamps:true})

const User = model('User', UserSchema)
module.exports = User
