/* eslint-disable react-refresh/only-export-components */
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerFormSchema } from '../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { request } from '../../../../utils';
import { setUser } from '../../../../actions';

import styled from 'styled-components';

const RegisterFormContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(registerFormSchema),
		mode: 'onChange',
	});

	const onSubmitForm = ({ login, password }) => {
		setServerError(null);

		if (!login || !password.trim()) return;

		request('/api/register', 'POST', { login, password })
			.then(({ error, user }) => {
				if (error) {
					setServerError(error);
					return;
				}
				dispatch(setUser(user));
				navigate('/account');
				reset();
			})
			.catch((error) => {
				setServerError(error.message);
			});
	};

	return (
		<form className={className} onSubmit={handleSubmit(onSubmitForm)}>
			<div className="form-header">
				<span className="form-subtitle">VAG FAN SERVICE</span>
				<h1>Регистрация</h1>
				<p>Создайте новый аккаунт</p>
			</div>

			<div className="form-fields">
				<div className={`input-group ${errors.login ? 'invalid' : ''}`}>
					<input type="text" placeholder=" " autoComplete="username" {...register('login')} />
					<label>Логин</label>
					{errors.login && <p className="error-message">{errors.login.message}</p>}
				</div>

				<div className={`input-group ${errors.password ? 'invalid' : ''}`}>
					<input type="password" placeholder=" " autoComplete="current-password" {...register('password')} />
					<label>Пароль</label>
					{errors.password && <p className="error-message">{errors.password.message}</p>}
				</div>
				<div className={`input-group ${errors.passcheck ? 'invalid' : ''}`}>
					<input type="password" placeholder=" " autoComplete="current-password" {...register('passcheck')} />
					<label>Повторите пароль</label>
					{errors.passcheck && <p className="error-message">{errors.passcheck.message}</p>}
				</div>
			</div>

			{serverError && <p className="server-error-message">{serverError}</p>}

			<button type="submit">Зарегистрироваться</button>

			<div className="form-footer">
				<span>Уже есть аккаунт?</span>
				<Link to="/login">Войти</Link>
			</div>
		</form>
	);
};

export const RegisterForm = styled(RegisterFormContainer)`
	position: relative;
	width: 100%;
	max-width: 440px;
	padding: 45px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	background: #202229;
	border: 1px solid #343740;
	border-radius: 5px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
	overflow: hidden;

	animation: form-appearance 0.7s ease-out both;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(90deg, #fdb813, #ed1c24, #fdb813);
		background-size: 200% 100%;
		animation: border-flow 4s linear infinite;
	}

	.form-header {
		text-align: center;

		.form-subtitle {
			color: #ed1c24;
			font-size: 11px;
			font-weight: 800;
			letter-spacing: 4px;
		}

		h1 {
			margin: 15px 0 8px;
			color: #f5f5f5;
			font-size: 30px;
			font-weight: 800;
			letter-spacing: 1px;
		}

		p {
			margin: 0;
			color: #9297a2;
			font-size: 14px;
		}
	}

	.form-fields {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	.input-group {
		position: relative;
		display: flex;
		flex-direction: column;

		input {
			width: 100%;
			height: 55px;
			padding: 18px 15px 8px;
			outline: none;
			border: 1px solid #414550;
			border-radius: 3px;
			background: #191a20;
			color: #f5f5f5;
			font-size: 15px;
			transition:
				border-color 0.3s ease,
				box-shadow 0.3s ease,
				background 0.3s ease;

			&:hover {
				border-color: #777d89;
			}

			&:focus {
				border-color: #ed1c24;
				background: #1c1e25;
				box-shadow: 0 0 12px rgba(237, 28, 36, 0.12);
			}

			&:focus + label,
			&:not(:placeholder-shown) + label {
				top: 7px;
				font-size: 10px;
				color: #ed1c24;
			}
		}

		label {
			position: absolute;
			top: 50%;
			left: 15px;
			transform: translateY(-50%);
			color: #9297a2;
			font-size: 14px;
			pointer-events: none;
			transition: all 0.25s ease;
		}

		.error-message {
			margin: 8px 0 0;
			color: #ff5555;
			font-size: 12px;
			line-height: 1.4;
			animation: error-appearance 0.25s ease both;
		}

		&.invalid input {
			border-color: #ed1c24;
		}
	}

	button {
		position: relative;
		width: 100%;
		height: 52px;
		border: none;
		border-radius: 3px;
		background: #c62828;
		color: #fff;
		font-weight: 800;
		letter-spacing: 2px;
		font-size: 13px;
		text-transform: uppercase;
		cursor: pointer;
		overflow: hidden;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			background 0.25s ease;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
			transition: left 0.55s ease;
		}

		&:hover {
			background: #e53935;
			transform: translateY(-3px);
			box-shadow: 0 8px 22px rgba(198, 40, 40, 0.3);

			&::before {
				left: 100%;
			}
		}

		&:active {
			transform: translateY(-1px);
		}
	}
	.server-error-message {
		margin: 8px 0 0;
		color: #ff5555;
		font-size: 12px;
		line-height: 1.4;
		animation: error-appearance 0.25s ease both;
	}

	.form-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 7px;
		font-size: 13px;

		span {
			color: #9297a2;
		}

		a {
			color: #fdb813;
			font-weight: 700;
			text-decoration: none;
			transition: color 0.25s ease;

			&:hover {
				color: #ed1c24;
			}
		}
	}

	@keyframes form-appearance {
		from {
			opacity: 0;
			transform: translateY(35px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes border-flow {
		from {
			background-position: 0% 50%;
		}
		to {
			background-position: 200% 50%;
		}
	}

	@keyframes error-appearance {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 500px) {
		max-width: 100%;
		padding: 35px 25px;

		.form-header h1 {
			font-size: 26px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;

		&::before {
			animation: none;
		}

		* {
			transition: none !important;
			animation: none !important;
		}
	}
`;
