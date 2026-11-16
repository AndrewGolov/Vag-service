const mongoose = require('mongoose')
const CarSchema = mongoose.Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	year:{
		type: String,
	},
	vin:{
		type: String,
		uppercase: true,
	},
	regNum:{
		type: String,
		uppercase: true,
	},
	bodyColor:{
		type: String,
	},
	additions:{
		type: String,
	},
	owner:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
},{timestamps:true})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car
