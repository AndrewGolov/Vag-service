/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { Outlet } from 'react-router';

import styled from 'styled-components';

const GarageContainer = ({ className }) => {
	const [garageData] = useState([]);

	return (
		<div className={className}>
			<header className="garage-heading">
				<h1>Мой гараж</h1>
				<p>Ваши автомобили и история обслуживания</p>
			</header>

			{garageData.length === 0 ? (
				<Outlet />
			) : (
				<div className="garage-grid">{/* TODO Карточки автомобилей */}</div>
			)}
		</div>
	);
};

export const Garage = styled(GarageContainer)`
	width: 100%;
	max-width: 1200px;
	height: 100%;
	background:
		linear-gradient(90deg, rgba(10, 11, 15, 0.65) 0%, rgba(10, 11, 15, 0.43) 50%, rgba(10, 11, 15, 0.25) 100%),
		linear-gradient(0deg, rgba(10, 11, 15, 0.35), transparent 55%),
		url('/images/bg-garage-grafit.webp') center / cover no-repeat,
		#191a20;

	.garage-heading {
		margin-bottom: 30px;
		padding: 20px;
		.section-label {
			display: block;
			margin-bottom: 10px;
			color: #fdb813;
			font-size: 11px;
			font-weight: 700;
			letter-spacing: 2.5px;
		}

		h1 {
			margin: 0 0 8px;
			color: #f1f1f2;
			font-size: clamp(26px, 3vw, 36px);
			font-weight: 700;
		}

		p {
			margin: 0;
			color: #92949c;
			font-size: 14px;
		}
	}

	.garage-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 22px;
	}
`;
