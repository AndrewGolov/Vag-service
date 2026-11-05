/* eslint-disable react-refresh/only-export-components */

import styled from 'styled-components';
const NavPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				<li>О нас</li>
				<li>Контакты</li>
			</ul>
		</div>
	);
};

export const NavPanel = styled(NavPanelContainer)`
	ul {
		display: flex;
		align-items: center;
		gap: 40px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		position: relative;
		padding: 8px 0;
		color: #d5d5d5;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		cursor: pointer;
		transition: color 0.3s ease;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 2px;
			background: #ed1c24;
			transition: width 0.3s ease;
		}

		&:hover {
			color: #fff;

			&::after {
				width: 100%;
			}
		}
	}

	@media (max-width: 600px) {
		ul {
			gap: 20px;
		}

		li {
			font-size: 11px;
			letter-spacing: 1px;
		}
	}
`;
