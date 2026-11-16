/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components';
import wheel from '../../assets/wheel.png';

const WheelLoaderContainer = ({ className, text = 'Загрузка...' }) => {
	return (
		<div className={className} role="status" aria-label={text}>
			<div className="loader-scene">
				<div className="smoke smoke-one" />
				<div className="smoke smoke-two" />
				<div className="smoke smoke-three" />

				<div className="wheel">
					<img src={wheel} alt="" />
				</div>

				<div className="ground-line" />
			</div>

			<p className="loader-text">{text}</p>
			<span className="loader-subtext">VAG FAN SERVICE</span>
		</div>
	);
};

export const WheelLoader = styled(WheelLoaderContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	min-height: 300px;
	padding: 30px 15px;
	overflow: hidden;

	.loader-scene {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 240px;
		height: 180px;
	}

	.wheel {
		position: absolute;
		z-index: 2;
		left: 50%;
		bottom: 18px;
		width: 118px;
		height: 118px;
		overflow: hidden;
		border: 3px solid rgba(255, 255, 255, 0.45);
		border-radius: 50%;
		background: #e9e9e9;
		box-shadow:
			0 0 0 5px rgba(255, 255, 255, 0.04),
			0 0 22px rgba(253, 184, 19, 0.16),
			0 12px 25px rgba(0, 0, 0, 0.4);
		transform: translateX(-50%);
		animation: wheel-drive 3.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}
	}

	.ground-line {
		position: absolute;
		bottom: 12px;
		left: 15px;
		width: 210px;
		height: 2px;
		border-radius: 50%;
		background: linear-gradient(90deg, transparent, rgba(253, 184, 19, 0.5), transparent);
		box-shadow: 0 0 10px rgba(253, 184, 19, 0.2);
	}

	.smoke {
		position: absolute;
		z-index: 1;
		bottom: 35px;
		left: 50%;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(220, 222, 228, 0.5) 0%,
			rgba(150, 154, 165, 0.22) 45%,
			transparent 72%
		);
		filter: blur(5px);
		opacity: 0;
		animation: smoke-drift 3.4s ease-out infinite;
	}

	.smoke-one {
		animation-delay: 0s;
	}

	.smoke-two {
		width: 65px;
		height: 65px;
		margin-left: -28px;
		animation-delay: 0.12s;
	}

	.smoke-three {
		width: 38px;
		height: 38px;
		margin-left: 24px;
		animation-delay: 0.2s;
	}

	.loader-text {
		margin: 12px 0 8px;
		color: #f1f1f2;
		font-size: 15px;
		font-weight: 600;
		letter-spacing: 0.5px;
	}

	.loader-subtext {
		color: #fdb813;
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 3px;
		opacity: 0.75;
	}

	@keyframes wheel-drive {
		0% {
			transform: translateX(-50%) rotate(0deg);
			opacity: 1;
		}

		42% {
			transform: translateX(-50%) rotate(1080deg);
			opacity: 1;
		}

		55% {
			transform: translateX(-50%) rotate(1440deg);
			opacity: 1;
		}

		68% {
			transform: translateX(calc(-50% + 35px)) rotate(1800deg);
			opacity: 1;
		}

		82% {
			transform: translateX(180px) rotate(2160deg);
			opacity: 0;
		}

		83% {
			transform: translateX(-180px) rotate(0deg);
			opacity: 0;
		}

		94% {
			transform: translateX(-50%) rotate(0deg);
			opacity: 0;
		}

		100% {
			transform: translateX(-50%) rotate(0deg);
			opacity: 1;
		}
	}

	@keyframes smoke-drift {
		0%,
		35%,
		100% {
			transform: translate(0, 0) scale(0.3);
			opacity: 0;
		}

		48% {
			transform: translate(-12px, -8px) scale(0.9);
			opacity: 0.65;
		}

		65% {
			transform: translate(-45px, -35px) scale(1.6);
			opacity: 0.35;
		}

		78% {
			transform: translate(-75px, -50px) scale(2);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.wheel,
		.smoke {
			animation: none;
		}

		.wheel {
			transform: translateX(-50%);
		}
	}
`;
