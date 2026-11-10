/* eslint-disable react-refresh/only-export-components */
import { selectUser } from '../../../../selector';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const ProfileContainer = ({ className }) => {
	const { login } = useSelector(selectUser);

	return <div className={className}>{login}</div>;
};

export const Profile = styled(ProfileContainer)`
	display: flex;
	flex-direction: column;
	color: yellow;
	padding: 20px;

	justify-content: space-between;
	gap: 20px;

	.logo {
		align-self: center;
	}
	alig-items: center;
`;
