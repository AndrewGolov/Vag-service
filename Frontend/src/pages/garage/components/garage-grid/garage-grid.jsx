/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import { FaCarSide } from 'react-icons/fa';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

import styled from 'styled-components';

const GarageGridContainer = ({ className, carsData = [] }) => {

	const onRemoveCar = () => {

	}

	return (
		<div className={className}>
			{carsData.map((car) => {
				const { id, brand, model, year, vin, regNum, bodyColor, additions } = car;

				return (
					<article className="car-item" key={id}>
						<div className="car-visual">
							{/* TODO В дальнейшем здесь будет логотип или изображение автомобиля */}
							<FaCarSide className="car-placeholder" />
							<span className="car-year">{year || 'Автомобиль'}</span>
						</div>

						<div className="car-content">
							<div className="car-heading">
								<div className="car-title">
									<h2>{brand}</h2>
									<p>{model}</p>
								</div>
							</div>

							<div className="car-info">
								<div className="info-item">
									<span className="info-label">Госномер</span>
									<span className="info-value">{regNum || 'Не указан'}</span>
								</div>

								<div className="info-item">
									<span className="info-label">VIN</span>
									<span className="info-value">{vin || 'Не указан'}</span>
								</div>

								<div className="info-item">
									<span className="info-label">Цвет кузова</span>
									<span className="info-value">{bodyColor || 'Не указан'}</span>
								</div>
							</div>

							{additions && <p className="car-additions">{additions}</p>}

							<div className="car-actions">
								<Link
									to={`/account/my-garage/${id}`}
									className="action-button edit-button"
									title="Редактировать автомобиль"
									aria-label={`Редактировать ${brand} ${model}`}
								>
									<FiEdit2 />
									<span>Изменить</span>
								</Link>

								<button
									type="button"
									className="action-button delete-button"
									title="Удалить автомобиль"
									aria-label={`Удалить ${brand} ${model}`}
									onClick={() => onRemoveCar(id)}
								>
									<FiTrash2 />
								</button>
							</div>
						</div>
					</article>
				);
			})}

			<Link to="/account/my-garage/add" className="add-car">
				<div className="add-icon">
					<FiPlus />
				</div>

				<h2>Добавить автомобиль</h2>
				<p>Пополните свой гараж новым автомобилем</p>

				<span className="add-link">
					Добавить в гараж
					<FiPlus />
				</span>
			</Link>
		</div>
	);
};

export const GarageGrid = styled(GarageGridContainer)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	gap: 24px;
	padding: 10px 20px 30px;

	.car-item,
	.add-car {
		position: relative;
		min-width: 0;
		min-height: 390px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.09);
		border-radius: 18px;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.075), transparent 45%), rgba(25, 27, 34, 0.78);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		box-shadow:
			0 10px 30px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.07);
		transition:
			transform 0.3s ease,
			border-color 0.3s ease,
			box-shadow 0.3s ease,
			background 0.3s ease;
	}

	.car-item {
		display: flex;
		flex-direction: column;

		&:hover {
			transform: translateY(-7px);
			border-color: rgba(253, 184, 19, 0.55);
			box-shadow:
				0 18px 38px rgba(0, 0, 0, 0.35),
				0 0 24px rgba(253, 184, 19, 0.09),
				inset 0 1px 0 rgba(255, 255, 255, 0.12);
		}
	}

	.car-visual {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 145px;
		flex-shrink: 0;
		overflow: hidden;
		background:
			radial-gradient(ellipse at center, rgba(253, 184, 19, 0.13), transparent 65%),
			linear-gradient(135deg, rgba(255, 255, 255, 0.035), transparent);
		border-bottom: 1px solid rgba(255, 255, 255, 0.07);

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(180deg, transparent 65%, rgba(15, 16, 21, 0.4));
			pointer-events: none;
		}
	}

	.car-placeholder {
		width: 85px;
		height: 85px;
		color: rgba(253, 184, 19, 0.65);
		filter: drop-shadow(0 0 15px rgba(253, 184, 19, 0.2));
		transition:
			transform 0.4s ease,
			filter 0.4s ease;
	}

	.car-item:hover .car-placeholder {
		transform: scale(1.12);
		filter: drop-shadow(0 0 22px rgba(253, 184, 19, 0.4));
	}

	.car-year {
		position: absolute;
		right: 14px;
		bottom: 12px;
		z-index: 1;
		padding: 5px 10px;
		border: 1px solid rgba(253, 184, 19, 0.25);
		border-radius: 7px;
		background: rgba(15, 16, 21, 0.65);
		color: #fdb813;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 1px;
	}

	.car-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 18px;
	}

	.car-title {
		margin-bottom: 17px;

		h2 {
			margin: 0 0 5px;
			color: #f1f1f2;
			font-size: 19px;
			font-weight: 700;
			letter-spacing: 0.5px;
		}

		p {
			margin: 0;
			color: #fdb813;
			font-size: 14px;
			font-weight: 500;
		}
	}

	.car-info {
		display: flex;
		flex-direction: column;
		gap: 11px;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
	}

	.info-label {
		color: #858894;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 1.3px;
		text-transform: uppercase;
	}

	.info-value {
		overflow: hidden;
		color: #d8d9dd;
		font-size: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.car-additions {
		margin: 14px 0 0;
		padding-top: 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		color: #92949c;
		font-size: 11px;
		line-height: 1.5;
	}

	.car-actions {
		display: flex;
		align-items: center;
		gap: 9px;
		margin-top: auto;
		padding-top: 18px;
	}

	.action-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		min-height: 36px;
		border: 1px solid transparent;
		border-radius: 8px;
		cursor: pointer;
		font-size: 11px;
		font-weight: 600;
		transition: all 0.25s ease;

		svg {
			width: 14px;
			height: 14px;
			flex-shrink: 0;
		}
	}

	.edit-button {
		flex: 1;
		border-color: rgba(253, 184, 19, 0.3);
		background: rgba(253, 184, 19, 0.07);
		color: #fdb813;

		&:hover {
			border-color: #fdb813;
			background: rgba(253, 184, 19, 0.17);
			box-shadow: 0 0 14px rgba(253, 184, 19, 0.12);
		}
	}

	.delete-button {
		width: 38px;
		border-color: rgba(237, 28, 36, 0.25);
		background: rgba(237, 28, 36, 0.07);
		color: #ed777b;

		&:hover {
			border-color: #ed1c24;
			background: rgba(237, 28, 36, 0.17);
			color: #ff555b;
			box-shadow: 0 0 14px rgba(237, 28, 36, 0.15);
		}
	}

	.add-car {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 25px;
		border-style: dashed;
		border-color: rgba(253, 184, 19, 0.3);
		background:
			radial-gradient(ellipse at center, rgba(253, 184, 19, 0.09), transparent 70%), rgba(25, 27, 34, 0.48);
		text-align: center;
		text-decoration: none;

		&:hover {
			transform: translateY(-7px);
			border-color: rgba(253, 184, 19, 0.8);
			background:
				radial-gradient(ellipse at center, rgba(253, 184, 19, 0.16), transparent 70%), rgba(25, 27, 34, 0.8);
			box-shadow:
				0 18px 38px rgba(0, 0, 0, 0.3),
				0 0 25px rgba(253, 184, 19, 0.1);
		}

		h2 {
			margin: 20px 0 8px;
			color: #f1f1f2;
			font-size: 17px;
		}

		p {
			max-width: 200px;
			margin: 0;
			color: #92949c;
			font-size: 12px;
			line-height: 1.6;
		}
	}

	.add-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 65px;
		height: 65px;
		border: 1px solid rgba(253, 184, 19, 0.4);
		border-radius: 20px;
		background: rgba(253, 184, 19, 0.09);
		color: #fdb813;
		font-size: 27px;
		box-shadow: 0 0 25px rgba(253, 184, 19, 0.08);
		transition:
			transform 0.3s ease,
			background 0.3s ease;
	}

	.add-car:hover .add-icon {
		transform: rotate(90deg);
		background: rgba(253, 184, 19, 0.17);
	}

	.add-link {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 24px;
		color: #fdb813;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.5px;

		svg {
			width: 14px;
			height: 14px;
		}
	}

	.action-button:focus-visible,
	.add-car:focus-visible {
		outline: 2px solid #fdb813;
		outline-offset: 4px;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 16px;
		padding: 10px 12px 24px;
	}

	@media (prefers-reduced-motion: reduce) {
		&,
		* {
			transition: none !important;
		}
	}
`;
