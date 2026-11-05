/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import styled from 'styled-components';

const UserPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to={'/login'}>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="8" r="4" />
					<path d="M4 21C4 16.58 7.58 13 12 13C16.42 13 20 16.58 20 21" />
				</svg>
				<span>LOGIN</span>
			</Link>
		</div>
	);
};

export const UserPanel = styled(UserPanelContainer)`
	a {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 7px 7px;
		border: 1px solid #fdb813;
		border-radius: 3px;
		color: #fdb813;
		text-decoration: none;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 2px;
		transition:
			color 0.2s ease,
			border-color 0.2s ease,
			background 0.2s ease;

		svg {
			width: 21px;
			height: 21px;
			stroke: currentColor;
			stroke-width: 1.7;
			stroke-linecap: round;
			stroke-linejoin: round;
			transition: color 0.2s ease;
		}

		&:hover {
			color: #e53935;
			border-color: #e53935;
			background: rgba(229, 57, 53, 0.05);
		}
	}
`;
