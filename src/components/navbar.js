import React from 'react';
import styled from 'styled-components';

// local components
import Logo from '../assets/logo-dark-gradient-md.svg';
import Hamburger from './hamburger';

// styled components
const Header = styled.header`
	padding-left: 32px;
	padding-right: 32px;

	@media only screen and (min-width: 768px) {
		padding-left: 96px;
		padding-right: 96px;
	}
`;
const LogoNav = styled.div`
	padding: 25px 0;
	display: flex;
	align-items: center;
	width: 6em;
	height: 3em;
`;
const Nav = styled.nav`
	width: 100%;
	height: 55px;
	display: flex;
	justify-content: space-between;
`;

// markup
const Navbar = () => {
	return (
		<Header>
			<Nav>
				<LogoNav>
					<Logo />
				</LogoNav>
				<Hamburger />
			</Nav>
		</Header>
	);
};

export default Navbar;
