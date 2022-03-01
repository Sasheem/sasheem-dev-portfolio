import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// styled components
const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	margin: 0;
	z-index: 1;
	
	li {
		padding: 25px 10px;
		
	}
	a,
	p {
		text-decoration: none;
		background-color: none;
		color: #44566C;
	}
	a:hover,
	a:active,
	p:hover,
	p:active {
		cursor: pointer;
		color: #8a8a8a;
	}

	// when screen is smaller than 768px
	@media only screen and (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #0D2538;
		position: fixed;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		p,a {
			color: #44566C;
		}
	}
`;
const NavText = styled(AnchorLink)`
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
	color: #0D2538;
`;

// hide the first ul item when screen screen with is larger than 768px
const HomeText = styled.p`
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
	@media only screen and (min-width: 768px) {
		display: none;
	}
`;

// markup
const SideNav = ({ open, setOpen }) => {
	const handleHomeClick = () => {
		setOpen(!open);
		navigate('/');
	};
	const handleNavClose = () => {
		if (open === true) {
			setOpen(false);
		}
	};
	return (
		<Ul open={open}>
			<li>
				<HomeText onClick={() => handleHomeClick()}>Home</HomeText>
			</li>
			<li>
				<NavText to='/#about' onAnchorLinkClick={() => handleNavClose()}>About</NavText>
			</li>
			<li>
				<NavText to='/#projects' onAnchorLinkClick={() => handleNavClose()}>Portfolio</NavText>
			</li>
			<li>
				<NavText to='/#contact' onAnchorLinkClick={() => handleNavClose()}>Contact</NavText>
			</li>
		</Ul>
	);
};

export default SideNav;
