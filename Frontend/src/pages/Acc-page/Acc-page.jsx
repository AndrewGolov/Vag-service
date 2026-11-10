/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router';
import { selectUser } from '../../selector';
import { Profile } from './components';
import { AuthButton, LogoLink } from '../../components';
import styled from 'styled-components';

const AccPageContainer = ({ className }) => {
	const { login } = useSelector(selectUser);
	console.log(login);

	return (
		<div className={className}>
			<aside className="aside-panel">
				<header className="header">
					<LogoLink url="/account" />
				</header>

				<nav className="navigation">
					<ul>
						<li>
							<NavLink to="/account/my-garage">Мой гараж</NavLink>
						</li>
						<li>
							<NavLink to="/account/entry">Записаться</NavLink>
						</li>
						<li>
							<NavLink to="/account/service">Услуги</NavLink>
						</li>
					</ul>
				</nav>

				<Profile />

				<footer>
					<AuthButton />
				</footer>
			</aside>

			<main className="main-wrapper">
				<Outlet />
			</main>
		</div>
	);
};

export const AccPage = styled(AccPageContainer)`
	display: flex;
	min-height: 100vh;
	width: 100%;
	max-width: 2048px;
	margin: 0 auto;
	color: #e6e7e9;
	background: #202229;

	.aside-panel {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		gap: 35px;

		width: clamp(240px, 20%, 300px);
		height: 100vh;
		padding: 25px 20px;

		background: rgba(23, 25, 30, 0.94);
		border-right: 1px solid rgba(255, 255, 255, 0.07);
		box-shadow: 10px 0 35px rgba(0, 0, 0, 0.15);
		z-index: 2;

		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.header {
		padding-bottom: 25px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.navigation {
		ul {
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding: 0;
			margin: 0;
			list-style: none;
		}

		a {
			position: relative;
			display: flex;
			align-items: center;

			padding: 13px 15px;
			border: 1px solid transparent;
			border-radius: 6px;

			color: #a5a7ad;
			font-size: 13px;
			font-weight: 600;
			letter-spacing: 1px;
			text-decoration: none;
			transition: all 0.2s ease;

			&:hover {
				color: #fdb813;
				background: rgba(253, 184, 19, 0.06);
			}

			&.active {
				color: #fdb813;
				background: linear-gradient(90deg, rgba(253, 184, 19, 0.13), rgba(253, 184, 19, 0.02));
				border-color: rgba(253, 184, 19, 0.13);

				&::before {
					content: '';
					position: absolute;
					left: -1px;
					top: 20%;
					width: 3px;
					height: 60%;
					border-radius: 0 3px 3px 0;
					background: #fdb813;
					box-shadow: 0 0 12px rgba(253, 184, 19, 0.5);
				}
			}
		}
	}

	.aside-panel footer {
		margin-top: auto;
		padding-top: 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.main-wrapper {
		position: relative;
		isolation: isolate;
		flex: 1;
		min-width: 0;
		min-height: 100vh;
		padding: clamp(24px, 4vw, 55px);

		background:
			radial-gradient(ellipse at 85% 10%, rgba(253, 184, 19, 0.07), transparent 35%),
			radial-gradient(ellipse at 15% 85%, rgba(229, 57, 53, 0.06), transparent 35%),
			linear-gradient(135deg, #24262e 0%, #1b1d23 100%);

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			pointer-events: none;

			background-image: linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px);
			background-size: 100% 4px;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.aside-panel {
			position: relative;
			width: 100%;
			height: auto;
			gap: 20px;
			padding: 18px;
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		.navigation ul {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.navigation a {
			padding: 10px;
		}

		.aside-panel footer {
			margin-top: 0;
		}

		.main-wrapper {
			min-height: calc(100vh - 250px);
			padding: 20px;
		}
	}
`;
