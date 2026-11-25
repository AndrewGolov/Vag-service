const getDayClass = ({ date, isPast, isToday, isOther, selectedDate }) => {
	return [
		'calendar-day-cell',
		date === selectedDate && 'calendar-day-cell--selected',
		isToday && 'calendar-day-cell--today',
		isOther && 'calendar-day-cell--other',
		!isPast && !isOther && 'calendar-day-cell--available',
	]
		.filter(Boolean)
		.join(' ');
};
