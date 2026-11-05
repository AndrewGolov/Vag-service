/* eslint-disable react-refresh/only-export-components */
import { Header } from '../../components';

import logo from '../../assets/logo.png';
import polo from '../../assets/polo.png';
import styled from 'styled-components';

const HomeContainer = ({ className }) => {
	return (
		<div className={className}>
			<Header />

			<main className="main-wrapper">
				<div className="main__content">
					<div className="main-info">
						<img className="main-logo" src={logo} alt="Логотип автосервиса" />

						<div className="main-text">
							<span className="main-subtitle">БЕЗ ОБМАНА ФИНАЛЬНАЯ ЦЕНА СРАЗУ</span>

							<h1>
								Клубный VAG-Сервис
								<br />
								<span>Ремонт и обслуживание Volkswagen, Skoda, Audi, Seat</span>
							</h1>

							<p>
								«Ваг-сервис» — специализированный автосервис по ремонту и обслуживанию автомобилей
								концерна VAG. Мы хорошо знаем конструкцию этих автомобилей, их типовые неисправности и
								особенности эксплуатации, поэтому подходим к ремонту не формально, а по существу. Для
								владельца это означает точную диагностику, понятные рекомендации и работы без лишних
								замен.
							</p>

							<button className="main-button">Оставить заявку</button>
						</div>
					</div>

					<div className="main-car">
						<img src={polo} alt="Автомобиль" />
					</div>

					<div className="main-decoration" />
				</div>
			</main>
		</div>
	);
};

export const Home = styled(HomeContainer)`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	background: #17191e;
	color: #f5f5f5;
	overflow: hidden;

	.main-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 100px 7%;
	}

	.main__content {
		position: relative;
		width: 100%;
		min-height: 650px;
		display: flex;
		align-items: center;
	}

	.main-info {
		position: relative;
		z-index: 2;
		width: 55%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.main-logo {
		width: 210px;
		height: 210px;
		object-fit: contain;
		opacity: 0;
		animation: logo-appearance 1s ease forwards;
		background: transparent;
	}

	.main-text {
		margin-top: 35px;
		opacity: 0;
		animation: text-appearance 0.8s ease 0.5s forwards;
	}

	.main-subtitle {
		color: #fdb813;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 4px;
	}

	h1 {
		margin: 20px 0;
		font-size: clamp(36px, 4.5vw, 42px);
		line-height: 1.1;
		font-weight: 400;
		letter-spacing: 1px;

		span {
			color: #ed1c24;
		}
	}

	.main-text p {
		max-width: 470px;
		color: #aeb2bb;
		font-size: 17px;
		line-height: 1.7;
	}

	.main-button {
		margin-top: 30px;
		padding: 16px 35px;
		border: none;
		border-radius: 3px;
		background: #fdb813;
		color: #fff;
		font-size: 15px;
		font-weight: 700;
		cursor: pointer;
		transition:
			background 0.2s ease,
			transform 0.2s ease;

		&:hover {
			background: #e53935;
			transform: translateY(-3px);
		}
	}

	.main-car {
		position: absolute;
		z-index: 1;
		width: 65%;
		right: -8%;
		bottom: 5%;
		opacity: 0;
		animation: car-appearance 1.4s ease-out 0.8s forwards;

		img {
			display: block;
			width: 100%;
			height: auto;
			object-fit: contain;
			filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.5));
		}
	}

	.main-decoration {
		position: absolute;
		width: 600px;
		height: 600px;
		right: -5%;
		top: 50%;
		transform: translateY(-50%);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 50%;
		box-shadow:
			0 0 0 70px rgba(255, 255, 255, 0.015),
			0 0 0 140px rgba(255, 255, 255, 0.01);
	}

	@keyframes logo-appearance {
		from {
			opacity: 0;
			transform: scale(0.5) rotate(-15deg);
		}
		to {
			opacity: 1;
			transform: scale(1) rotate(0);
		}
	}

	@keyframes text-appearance {
		from {
			opacity: 0;
			transform: translateY(35px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes car-appearance {
		from {
			opacity: 0;
			transform: translateX(180px) scale(0.9);
		}
		to {
			opacity: 1;
			transform: translateX(0) scale(1);
		}
	}

	@media (max-width: 900px) {
		.main-info {
			width: 70%;
		}

		.main-car {
			width: 75%;
			right: -15%;
			bottom: 0;
		}

		.main-decoration {
			width: 450px;
			height: 450px;
		}
	}

	@media (max-width: 600px) {
		.main-wrapper {
			padding: 35px 20px;
		}

		.main__content {
			min-height: 750px;
			align-items: flex-start;
		}

		.main-info {
			width: 100%;
		}

		.main-logo {
			width: 85px;
			height: 85px;
		}

		.main-text {
			margin-top: 25px;
		}

		.main-subtitle {
			font-size: 10px;
			letter-spacing: 2px;
		}

		h1 {
			font-size: 36px;
		}

		.main-text p {
			font-size: 15px;
		}

		.main-car {
			width: 115%;
			right: -15%;
			bottom: 0;
		}

		.main-decoration {
			width: 300px;
			height: 300px;
			right: -25%;
			top: 65%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.main-logo,
		.main-text,
		.main-car {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}
`;
