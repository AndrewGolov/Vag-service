/* eslint-disable react-refresh/only-export-components */

import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectModalText, selectModalOnConfirm, selectModalOnCancel, selectModalIsOpen } from '../../selector';
import { FiHelpCircle } from 'react-icons/fi';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalIsOpen);

	const handleEscape = useCallback(
		(event) => {
			if (event.key === 'Escape') {
				onCancel?.();
			}
		},
		[onCancel],
	);

	useEffect(() => {
		if (!isOpen) return;

		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, handleEscape]);

	if (!isOpen) return null;

	return (
		<div className={className}>
			<div
				className="modal-overlay"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						onCancel?.();
					}
				}}
			>
				<section className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
					<div className="modal-icon">
						<FiHelpCircle />
					</div>

					<div className="modal-content">
						<h2 id="modal-title">Подтверждение действия</h2>
						<p>{text}</p>
					</div>

					<div className="modal-buttons">
						<button type="button" className="confirm-button" onClick={onConfirm}>
							Да, подтвердить
						</button>

						<button type="button" className="cancel-button" onClick={onCancel}>
							Отмена
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
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
		background: rgba(7, 8, 12, 0.68);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		animation: overlay-appear 0.3s ease both;
	}

	.modal-box {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		max-width: 410px;
		padding: 30px 28px 26px;
		border: 1px solid rgba(253, 184, 19, 0.24);
		border-radius: 20px;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.075), transparent 55%), rgba(29, 30, 37, 0.96);
		box-shadow:
			0 24px 70px rgba(0, 0, 0, 0.55),
			0 0 35px rgba(253, 184, 19, 0.06),
			inset 0 1px 0 rgba(255, 255, 255, 0.09);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		text-align: center;
		animation: modal-appear 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
	}

	.modal-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 58px;
		height: 58px;
		margin-bottom: 20px;
		border: 1px solid rgba(253, 184, 19, 0.3);
		border-radius: 17px;
		background: rgba(253, 184, 19, 0.09);
		color: #fdb813;
		box-shadow: 0 0 25px rgba(253, 184, 19, 0.08);

		svg {
			width: 29px;
			height: 29px;
			stroke-width: 1.7;
		}
	}

	.modal-content {
		h2 {
			margin: 0 0 12px;
			color: #f1f1f2;
			font-size: 19px;
			font-weight: 700;
		}

		p {
			margin: 0;
			color: #a5a6ae;
			font-size: 14px;
			line-height: 1.65;
			overflow-wrap: anywhere;
		}
	}

	.modal-buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		margin-top: 26px;

		button {
			width: 100%;
			min-height: 44px;
			border-radius: 9px;
			font-size: 12px;
			font-weight: 700;
			letter-spacing: 0.5px;
			cursor: pointer;
			transition:
				transform 0.25s ease,
				background 0.25s ease,
				box-shadow 0.25s ease,
				border-color 0.25s ease;

			&:focus-visible {
				outline: 2px solid #fdb813;
				outline-offset: 4px;
			}

			&:active {
				transform: scale(0.98);
			}
		}
	}

	.confirm-button {
		border: 1px solid rgba(253, 184, 19, 0.75);
		background: linear-gradient(135deg, #fdb813, #e9a400);
		color: #202127;
		box-shadow: 0 5px 18px rgba(253, 184, 19, 0.13);

		&:hover {
			transform: translateY(-2px);
			filter: brightness(1.08);
			box-shadow: 0 8px 24px rgba(253, 184, 19, 0.23);
		}
	}

	.cancel-button {
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.045);
		color: #b8b9c1;

		&:hover {
			transform: translateY(-2px);
			border-color: rgba(255, 255, 255, 0.2);
			background: rgba(255, 255, 255, 0.09);
			color: #f1f1f2;
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
		.modal-box {
			max-width: 340px;
			padding: 26px 22px 22px;
		}

		.modal-content h2 {
			font-size: 17px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.modal-overlay,
		.modal-box {
			animation: none;
		}

		.modal-buttons button {
			transition: none;
		}
	}
`;
