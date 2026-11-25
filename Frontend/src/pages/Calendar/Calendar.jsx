/* eslint-disable react-refresh/only-export-components */
import FullCalendar from '@fullcalendar/react';
import ruLocale from '@fullcalendar/react/locales/ru';
import '@fullcalendar/react/skeleton.css';
import '@fullcalendar/react/themes/forma/theme.css';
import '@fullcalendar/react/themes/forma/palettes/red.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectScheduleSlotDuration, selectScheduleWorkTime } from '../../selector';
import { request } from '../../utils';
import { setLoaded, setLoading, setSchedule, setServerError } from '../../actions';
import { WheelLoader } from '../../components';
import { calendarPlugins, getDateKey } from './utils';
import { SlotsModal } from './components';
import styled from 'styled-components';

const CalendarContainer = ({ className }) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [slotsModalIsOpen, setSlotsModalIsOpen] = useState(false);
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const workTimeData = useSelector(selectScheduleWorkTime);
	const slotDuration = useSelector(selectScheduleSlotDuration);

	console.log('---------workTimeData-------', workTimeData);
	console.log('--------------isLoading------------', isLoading);
	console.log('--------------------------slotDuration-----------------------', slotDuration);

	const getDayClass = ({ date, isPast, isToday, isOther }) => {
		return [
			'calendar-day-cell',
			getDateKey(date) === selectedDate && 'calendar-day-cell--selected',
			isToday && 'calendar-day-cell--today',
			isOther && 'calendar-day-cell--other',
			!isPast && !isOther && 'calendar-day-cell--available',
		]
			.filter(Boolean)
			.join(' ');
	};

	const handleDateClick = ({ dateStr }) => {
		setSelectedDate(dateStr);
		setSlotsModalIsOpen(true);
	};

	useEffect(() => {
		dispatch(setLoading());
		request('/api/account/schedule')
			.then(({ error, schedule }) => {
				if (error) {
					dispatch(setServerError(error));
					return;
				}
				dispatch(setSchedule(schedule));
			})
			.finally(() => dispatch(setLoaded()));
	}, [dispatch]);
	if (isLoading) return <WheelLoader />;

	return (
		<div className={className}>
			<header className="calendar-heading">
				<h2>Календарь записи</h2>
				<p>Выберите удобную дату для обслуживания автомобиля</p>
			</header>

			<FullCalendar
				plugins={calendarPlugins}
				initialView="dayGridMonth"
				locale={ruLocale}
				colorScheme="dark"
				firstDay={1}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: '',
				}}
				toolbarClass="calendar-toolbar"
				toolbarTitleClass="calendar-toolbar-title"
				buttonClass="calendar-button"
				dayHeaderClass="calendar-day-header"
				dayHeaderInnerClass="calendar-day-header-text"
				dayCellClass={getDayClass}
				dayCellTopClass="calendar-day-top"
				dayCellTopInnerClass="calendar-day-number"
				dateClick={handleDateClick}
				validRange={{ start: getDateKey(new Date()) }}
				height="auto"
				fixedWeekCount={false}
				showNonCurrentDates={false}
			/>
			<SlotsModal isOpen={slotsModalIsOpen} onCancel={() => setSlotsModalIsOpen(false)} />
		</div>
	);
};

export const Calendar = styled(CalendarContainer)`
	padding: 24px;
	border-radius: 16px;
	background: linear-gradient(145deg, #202229, #191a20);
	border: 1px solid rgba(255, 255, 255, 0.07);

	.calendar-heading {
		margin-bottom: 24px;

		h2 {
			margin: 0 0 8px;
			color: #f3f3f5;
			font-size: 23px;
			font-weight: 700;
		}

		p {
			margin: 0;
			color: #92949e;
			font-size: 14px;
		}
	}

	.calendar-toolbar-title {
		color: #f3f3f5;
		font-size: 21px;
		font-weight: 700;
		text-transform: capitalize;
	}

	.calendar-button {
		background: rgba(253, 184, 19, 0.09);
		border: 1px solid rgba(253, 184, 19, 0.3);
		border-radius: 8px;
		color: #fdb813;
		box-shadow: none;
		font-weight: 600;

		&:hover:not(:disabled) {
			background: #fdb813;
			border-color: #fdb813;
			color: #191a20;
		}
	}

	.calendar-day-header-text {
		color: #c8c9ce;
		font-weight: 600;
	}

	.calendar-day-number {
		color: #e1e1e5;
		text-decoration: none;
	}

	.calendar-day-cell {
		transition: background 0.2s ease;
	}

	.calendar-day-cell--available {
		cursor: pointer;

		&:hover {
			background: rgba(253, 184, 19, 0.07);
		}
	}

	.calendar-day-cell--today {
		background: rgba(253, 184, 19, 0.06);

		.calendar-day-number {
			color: #fdb813;
			font-weight: 700;
		}
	}

	.calendar-day-cell--selected {
		background: rgba(253, 184, 19, 0.14);
		box-shadow: inset 0 0 0 2px #fdb813;

		.calendar-day-number {
			color: #fdb813;
			font-weight: 700;
		}
	}

	.calendar-day-cell--other {
		opacity: 0.35;
	}

	@media (max-width: 768px) {
		padding: 16px;

		.calendar-heading h2 {
			font-size: 20px;
		}

		.calendar-toolbar-title {
			font-size: 18px;
		}
	}
`;
