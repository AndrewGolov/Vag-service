/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const LogoLinkContainer = ({ className, url }) => {
	return (
		<Link to={url} className={className}>
			<img src={logo} alt="VAG Fan Service" className="logo" />
			<span className="sub-logo">VAG Fan Service</span>
		</Link>
	);
};
export const LogoLink = styled(LogoLinkContainer)`
	display: flex;
	gap: 15px;
	align-items: center;
	font-size: 20px;

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

	&:hover .sub-logo {
		background-position: 100% 50%;
	}
	.logo {
		width: 40px;
		height: 40px;
	}
`;
