const {Schema, model} = require('mongoose')

const ScheduleExceptionSchema = new Schema({
	date: {type: Date, required: true, unique: true},
	startAt: {
		type: String,
		required: true,
	},
	endAt: {
		type: String,
		required: true,
	}

})

const ScheduleException = model('ScheduleException', ScheduleExceptionSchema)
module.exports = ScheduleException
