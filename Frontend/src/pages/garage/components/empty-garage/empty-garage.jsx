/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import { FaCarSide } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

import styled from 'styled-components';

const EmptyGarageContainer = ({ className }) => {
	return (
		<section className={className}>
			<div className="glass-frame">
				<div className="empty-content">
					<div className="car-icon">
						<FaCarSide />
						<span className="plus-icon">
							<FiPlus />
						</span>
					</div>

					<h2>Ваш гараж пуст</h2>

					<p>
						Добавьте автомобиль, чтобы
						<br />
						начать использовать сервис
					</p>

					<Link to="/account/my-garage/add" className="add-car">
						<FiPlus />
						<span>Добавить авто</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export const EmptyGarage = styled(EmptyGarageContainer)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	min-height: 560px;
	padding: 25px;
	overflow: hidden;

	border-radius: 20px;

	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;

		background: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.3) 100%);
	}

	.glass-frame {
		position: relative;
		z-index: 1;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 96%;
		min-height: 510px;
		padding: 45px 25px;

		border: 1px solid rgba(255, 255, 255, 0.23);
		border-radius: 24px;

		background: rgba(25, 26, 32, 0.48);

		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);

		box-shadow:
			inset 0 1px 2px rgba(255, 255, 255, 0.22),
			inset 0 -1px 2px rgba(255, 255, 255, 0.08),
			0 15px 40px rgba(0, 0, 0, 0.2);

		&::before {
			content: '';
			position: absolute;
			inset: 6.5% 4%;

			border: 2px dashed rgba(210, 211, 217, 0.42);
			border-radius: 20px;

			pointer-events: none;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 10%;
			width: 80%;
			height: 1px;

			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.55), transparent);
		}
	}
	.empty-content {
		position: relative;
		z-index: 2;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;

		text-align: center;
	}

	.car-icon {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100px;
		height: 90px;
		margin-bottom: 5px;

		> svg {
			width: 85px;
			height: 85px;
			color: #d5d6da;
			stroke-width: 1.1;
			filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.5));
		}

		.plus-icon {
			position: absolute;
			right: -5px;
			bottom: -2px;

			display: flex;
			align-items: center;
			justify-content: center;

			width: 48px;
			height: 48px;

			border: 2px solid #fdb813;
			border-radius: 50%;

			background: rgba(20, 21, 26, 0.95);
			box-shadow: 0 0 18px rgba(253, 184, 19, 0.25);

			svg {
				width: 27px;
				height: 27px;
				color: #fdb813;
				stroke-width: 2;
			}
		}
	}

	.empty-content h2 {
		margin: 0;

		color: #e8e8eb;
		font-size: 21px;
		font-weight: 800;
		letter-spacing: 6px;
		text-transform: uppercase;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
	}

	.empty-content p {
		margin: 0;

		color: #b5b6bd;
		font-size: 15px;
		line-height: 1.65;
		letter-spacing: 0.3px;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
	}

	.add-car {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;

		min-width: 280px;
		margin-top: 30px;
		padding: 14px 22px;

		border: 2px solid #fdb813;
		border-radius: 7px;

		background: rgba(15, 16, 20, 0.65);
		color: #fdb813;

		font-size: 15px;
		font-weight: 700;
		text-decoration: none;
		letter-spacing: 0.4px;

		transition:
			color 0.25s ease,
			border-color 0.25s ease,
			background 0.25s ease,
			box-shadow 0.25s ease;

		svg {
			width: 23px;
			height: 23px;
			stroke-width: 2;
		}

		&:hover {
			color: #ed1c24;
			border-color: #ed1c24;
			background: rgba(237, 28, 36, 0.09);
			box-shadow: 0 0 20px rgba(237, 28, 36, 0.17);
		}
	}

	@media (max-width: 768px) {
		.empty-garage {
			min-height: 430px;
			padding: 15px;
		}

		.glass-frame {
			width: 100%;
			min-height: 390px;
			padding: 35px 15px;
		}

		.empty-content h2 {
			font-size: 17px;
			letter-spacing: 3px;
		}

		.empty-content p {
			font-size: 13px;
		}

		.add-car {
			min-width: 220px;
			font-size: 13px;
		}
	}

	@media (max-width: 480px) {
		.empty-garage {
			min-height: 370px;
		}

		.glass-frame {
			min-height: 340px;
		}

		.car-icon {
			transform: scale(0.85);
		}

		.empty-content h2 {
			font-size: 15px;
			letter-spacing: 2px;
		}
	}
`;
