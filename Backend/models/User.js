const mongoose = require('mongoose')
const ROLES = require('../constants/roles.js')
const {Schema} = require("mongoose");
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
	},

	cars:[{type:mongoose.Schema.Types.ObjectId, ref:'car'}]
},{timestamps:true})

const User = mongoose.model('User', UserSchema)
module.exports = User
