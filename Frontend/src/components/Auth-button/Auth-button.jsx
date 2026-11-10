/* eslint-disable react-refresh/only-export-components */
import { Link, useNavigate } from 'react-router';
import { FiUser } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../selector';
import { request } from '../../utils';
import { logout } from '../../actions';

import styled from 'styled-components';

const AuthButtonContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { login } = useSelector(selectUser);
	const onLogout = () => {
		request('/api/logout', 'POST').then(({ error }) => {
			if (error) {
				return;
			}
			dispatch(logout());
			navigate('/');
		});
	};

	return (
		<div className={className}>
			{login ? (
				<button type="button" onClick={onLogout}>
					<IoExitOutline />
					Выйти
				</button>
			) : (
				<Link to={'/login'}>
					<FiUser />
					<span>Вход</span>
				</Link>
			)}
		</div>
	);
};

export const AuthButton = styled(AuthButtonContainer)`
	a,
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 8px 12px;
		border: 1px solid #fdb813;
		border-radius: 3px;
		background: transparent;
		color: #fdb813;
		text-decoration: none;
		font-family: inherit;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease;

		svg {
			width: 20px;
			height: 20px;
			flex-shrink: 0;
			stroke: currentColor;
			stroke-width: 1.7;
			transition: color 0.2s ease;
		}

		&:hover {
			color: #e53935;
			border-color: #e53935;
			background: rgba(229, 57, 53, 0.06);
		}

		&:active {
			background: rgba(229, 57, 53, 0.12);
		}
	}
`;
