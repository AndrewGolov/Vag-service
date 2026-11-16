/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import styled from 'styled-components';

const ErrorModalContainer = ({ className, isOpen, message, onClose }) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className={className}>
			<div className="modal-overlay">
				<div
					className="error-modal"
					role="alertdialog"
					aria-modal="true"
					aria-labelledby="error-title"
					aria-describedby="error-message"
				>
					<div className="error-icon">
						<FiAlertCircle />
					</div>

					<div className="error-content">
						<h2 id="error-title">Произошла ошибка</h2>

						<p id="error-message">{message || 'Не удалось выполнить операцию. Попробуйте ещё раз.'}</p>
					</div>

					<button type="button" className="confirm-button" onClick={onClose} autoFocus>
						Понятно
					</button>
				</div>
			</div>
		</div>
	);
};

export const ErrorModal = styled(ErrorModalContainer)`
	position: fixed;
	inset: 0;
	z-index: 1000;

	.modal-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		background: rgba(7, 8, 12, 0.62);
		backdrop-filter: blur(9px);
		-webkit-backdrop-filter: blur(9px);
		animation: overlay-appear 0.3s ease both;
	}

	.error-modal {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		max-width: 390px;
		padding: 30px 28px 26px;
		margin-top: -8vh;
		border: 1px solid rgba(237, 28, 36, 0.32);
		border-radius: 20px;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.075), transparent 55%), rgba(29, 30, 37, 0.94);
		box-shadow:
			0 24px 70px rgba(0, 0, 0, 0.55),
			0 0 35px rgba(237, 28, 36, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.09);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		text-align: center;
		animation: modal-appear 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}

	.error-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 58px;
		height: 58px;
		margin-bottom: 19px;
		border: 1px solid rgba(237, 28, 36, 0.35);
		border-radius: 17px;
		background: rgba(237, 28, 36, 0.1);
		color: #ed454b;
		box-shadow: 0 0 25px rgba(237, 28, 36, 0.12);

		svg {
			width: 29px;
			height: 29px;
			stroke-width: 1.7;
		}
	}

	.error-content {
		h2 {
			margin: 0 0 11px;
			color: #f1f1f2;
			font-size: 19px;
			font-weight: 700;
		}

		p {
			margin: 0;
			color: #a5a6ae;
			font-size: 13px;
			line-height: 1.65;
			overflow-wrap: anywhere;
		}
	}

	.confirm-button {
		width: 100%;
		min-height: 43px;
		margin-top: 25px;
		border: 1px solid rgba(237, 28, 36, 0.65);
		border-radius: 9px;
		background: linear-gradient(135deg, rgba(237, 28, 36, 0.95), rgba(183, 20, 27, 0.95));
		color: #fff;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.7px;
		cursor: pointer;
		box-shadow: 0 5px 18px rgba(237, 28, 36, 0.16);
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			filter 0.25s ease;

		&:hover {
			transform: translateY(-2px);
			filter: brightness(1.12);
			box-shadow: 0 8px 24px rgba(237, 28, 36, 0.3);
		}

		&:active {
			transform: translateY(0) scale(0.98);
		}

		&:focus-visible {
			outline: 2px solid #fdb813;
			outline-offset: 4px;
		}
	}

	@keyframes overlay-appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes modal-appear {
		from {
			opacity: 0;
			transform: translateY(18px) scale(0.94);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 480px) {
		.error-modal {
			max-width: 340px;
			padding: 26px 22px 22px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.modal-overlay,
		.error-modal {
			animation: none;
		}

		.confirm-button {
			transition: none;
		}
	}
`;
