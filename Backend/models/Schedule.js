const {Schema, model} = require('mongoose')

const ScheduleSchema = new Schema({
	workTime: [
		{
			day: {
				type: Number,
				required: true,
				min: 0,
				max: 6

			},
			startTime: {
				type: String,
				required: true,


			},
			endTime: {
				type: String,
				required: true,
			}
		}
	],
	slotDuration: {type: Number, required: true,},
})

const Schedule = model('Schedule', ScheduleSchema)
module.exports = Schedule
