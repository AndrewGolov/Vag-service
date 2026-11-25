const Schedule = require('../models/Schedule')

async function getSchedule() {
	return Schedule.findOne()
}

module.exports = { getSchedule }
