/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';

// local components
import { GlobalStyle } from '../theme/globalStyles';
import Navbar from './navbar';

// styled components
const Main = styled.main`
	padding-left: 32px;
	padding-right: 32px;

	// screen width > than 768px
	@media only screen and (min-width: 768px) {
		padding-left: 144px;
		padding-right: 144px;
	}
`;
const Footer = styled.footer`
	margin-top: 40vh;
	padding-bottom: 10vh;
	display: flex;
	justify-content: center;
`;

// markup
const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Main>{children}</Main>
			<Footer>
				© {new Date().getFullYear()}, Developed by SasheemDev
			</Footer>
		</>
	);
};

export default Layout
