/* eslint-disable react-refresh/only-export-components */
import { NavLink } from 'react-router';
import styled from 'styled-components';

const NavigationMenuContainer = ({ className }) => {
	return (
		<nav className={className}>
			<ul>
				<li>
					<NavLink to="/account/my-garage">В гараж</NavLink>
				</li>
				<li>
					<NavLink to="/account/entry">Записаться</NavLink>
				</li>
				<li>
					<NavLink to="/account/service">Услуги</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export const NavigationMenu = styled(NavigationMenuContainer)`
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
	@media (max-width: 768px) {
		flex-direction: column;

		ul {
			flex-direction: row;
			flex-wrap: wrap;
		}

		a {
			padding: 10px;
		}
	}
`;
