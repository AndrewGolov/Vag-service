/* eslint-disable react-refresh/only-export-components */
import { NavPanel } from './components';
import { AuthButton } from '../Auth-button/Auth-button';
import { LogoLink } from '../Logo-link/Logo-link';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="header-container">
				<LogoLink />
				<NavPanel />
				<AuthButton />
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
`;
