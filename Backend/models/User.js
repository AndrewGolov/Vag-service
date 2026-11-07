const mongoose = require('mongoose')
const ROLES = require('../constants/roles.js')
const UserSchema = mongoose.Schema({
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
	}
})

const User = mongoose.model('User', UserSchema)
module.exports = User
