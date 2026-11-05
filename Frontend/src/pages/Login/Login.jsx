/* eslint-disable react-refresh/only-export-components */

import styled from 'styled-components';
const LoginContainer = ({ className }) => {
	return (
		<form className={className}>
			<input type="text" placeholder="Login" />
			<input type="password" placeholder="Password" />
		</form>
	);
};

export const Login = styled(LoginContainer)``;
