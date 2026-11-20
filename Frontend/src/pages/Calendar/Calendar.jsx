/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';

const CalendarContainer = ({ className }) => {
	return (
		<div className={className}>
			<header className="calendar-heading">
				<h1>Календарь</h1>
				<p>Здесь можно выбрать дату и время для записи</p>
			</header>
		</div>
	);
};

export const Calendar = styled(CalendarContainer)``;
