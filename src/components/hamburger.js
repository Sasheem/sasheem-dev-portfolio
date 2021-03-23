import React, { useState } from 'react';
import styled from 'styled-components';

// local components
import SideNav from './sideNav';

const BurgerIcon = styled.div`
	height: 2rem;
	width: 2rem;
	position: fixed;
	top: 24px;
	right: 24px;
	z-index: 20;
	display: none;

	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	&:hover {
		cursor: pointer;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: rgba(20, 20, 20, 1);
		background-color: ${({ open }) => open ? '#ccc' : '#333'};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
		}

		&:nth-child(2) {
			transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
			opacity: ${({ open }) => open ? 0 : 1 }
		}

		&:nth-child(3) {
			transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`;

const Hamburger = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<BurgerIcon open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</BurgerIcon>
			<SideNav open={open} setOpen={setOpen} />
		</>
	);
};

export default Hamburger;
