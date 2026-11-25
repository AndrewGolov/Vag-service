const {Schema, model} = require('mongoose')

const AppointmentSchema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	car: {type: Schema.Types.ObjectId, ref: 'Car'},
	startAt: {type: Date, required: true},
	endAt: {type: Date, required: true},
	status: {type: String, enum: ['awaiting', 'confirmed', 'completed', 'cancelled'], default: 'awaiting'},
})

const Appointment = model('Appointment', AppointmentSchema)
module.exports = Appointment
