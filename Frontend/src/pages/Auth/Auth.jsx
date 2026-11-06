/* eslint-disable react-refresh/only-export-components */
import { useMatch } from 'react-router';
import { LoginForm, RegisterForm } from './components';

import styled from 'styled-components';

const AuthContainer = ({ className }) => {
	const isRegisterPage = useMatch('/register');

	return (
		<main className={className}>
			<div className="background-decoration decoration-left" />
			<div className="background-decoration decoration-right" />
			{!isRegisterPage ? (
				<div className="form-wrapper">
					<LoginForm />
				</div>
			) : (
				<div className="form-wrapper">
					<RegisterForm />
				</div>
			)}

			<div className="page-footer">
				<span>VAG FAN SERVICE</span>
				<span>© 2026 Все права защищены</span>
			</div>
		</main>
	);
};

export const Auth = styled(AuthContainer)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	padding: 40px 20px;
	background: #101115;
	overflow: hidden;

	.form-wrapper {
		position: relative;
		z-index: 2;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.background-decoration {
		position: absolute;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		filter: blur(120px);
		pointer-events: none;
	}

	.decoration-left {
		top: -250px;
		left: -200px;
		background: rgba(198, 40, 40, 0.12);
	}

	.decoration-right {
		right: -250px;
		bottom: -250px;
		background: rgba(253, 184, 19, 0.06);
	}

	.page-footer {
		position: absolute;
		bottom: 20px;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 35px;
		color: #555963;
		font-size: 10px;
		letter-spacing: 2px;
		z-index: 2;
	}

	@media (max-width: 500px) {
		padding: 30px 15px 70px;

		.page-footer {
			padding: 0 15px;
			font-size: 9px;
			letter-spacing: 1px;
		}
	}
`;
