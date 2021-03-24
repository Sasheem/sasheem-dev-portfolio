import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { navigate } from 'gatsby';

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
	}
	a:hover,
	a:active,
	p:hover,
	p:active {
		cursor: pointer;
		color: #8a8a8a;
	}

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

		p {
			color: #a0aec0;
		}
	}
`;
const NavText = styled.p`
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
`;

// hide the first ul item when screen screen with is larger than 768px
const HomeText = styled(NavText)`
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
	const handleProjectScroll = () => {
		setOpen(!open);
		scrollTo('#projects-section');
	}
	const handleContactScroll = () => {
		setOpen(!open);
		scrollTo('#contact-form');
	}
	return (
		<Ul open={open}>
			<li>
				<HomeText onClick={() => handleHomeClick()}>Home</HomeText>
			</li>
			<li>
				<NavText onClick={() => handleProjectScroll()}>Portfolio</NavText>
			</li>
			<li>
				<NavText onClick={() => handleContactScroll()}>Contact</NavText>
			</li>
		</Ul>
	);
};

export default SideNav;
