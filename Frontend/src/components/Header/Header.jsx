/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import { UserPanel, NavPanel } from './components';

import logo from '../../assets/logo.png';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="header-container">
				<Link to="/" className="logo-link">
					<img src={logo} alt="VAG Fan Service" className="logo" />
					<span className="sub-logo">VAG Fan Service</span>
				</Link>
				<NavPanel />
				<UserPanel />
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	width: 100%;

	align-items: center;
	justify-content: center;
	padding: 1rem;
	background-color: #333;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;

	.header-container {
		display: flex;
		max-width: 2048px;
		flex-grow: 1;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 0 20px;
	}
	.logo-link {
		display: flex;
		gap: 15px;
		align-items: center;
		font-size: 20px;
	}
	.sub-logo {
		font-weight: 800;
		background: linear-gradient(90deg, #fdb813 0%, #ed1c24 50%, #000 100%);
		background-size: 200% 100%;
		background-position: 0% 50%;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		transition: background-position 0.8s ease;
	}

	.logo-link:hover .sub-logo {
		background-position: 100% 50%;
	}
	.logo {
		width: 40px;
		height: 40px;
	}
`;
