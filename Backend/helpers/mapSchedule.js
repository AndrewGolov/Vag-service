module.exports = (schedule) =>
	({
		slotDuration: schedule.slotDuration,
		workTime: schedule.workTime.map((dayObj) => ({day: dayObj.day, start: dayObj.startTime, end: dayObj.endTime}))
	})

