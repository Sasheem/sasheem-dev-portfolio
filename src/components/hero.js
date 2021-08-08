import React from 'react';
import styled from 'styled-components';

// local components
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';

// data
const docLink = {
	text: 'Github Profile',
	url: 'https://github.com/Sasheem',
	twitter: 'https://twitter.com/SasheemDev',
	linkedin: 'https://www.linkedin.com/in/sasheem/',
};

// styles
const Content = styled.div`
	margin-top: 256px;
	margin-bottom: 144px;
	color: #44566C;     // dark blue grey
	display: flex;
	flex-direction: column;
	max-width: 70vw;

    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        max-width: 30vw;
        margin-top: 256px;
        margin-bottom: 336px;
    }
`;
const Heading = styled.h1`
	max-width: 540px;
	margin-bottom: 0.25em;
`;
const HeadingAccent = styled.span`
	color: #E63946;
`;
const HeadingDetail = styled.p`
	font-weight: 300;
	font-size: 1.5em;
	margin: 0;
`;
const Text = styled.p`
	line-height: 1.5em;
`;
const HeadingLink = styled.a`
	vertical-align: 5%;
`;
const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 10em;
`;

const Hero = () => (
    <Content>
        <Heading>
            Hi! I'm <HeadingAccent>Sasheem</HeadingAccent> {' '}
            <span role='img' aria-label='Coder emoji'>
                👨🏾‍💻
            </span>
        </Heading>
        <HeadingDetail>I am a front end <HeadingAccent>web</HeadingAccent> developer</HeadingDetail>
        <Text>
            HTML5 - CSS3 - Javascript - WordPress <br />
            React - React Native 
        </Text>
        <Icons>
            <HeadingLink href={docLink.twitter} target='_blank' rel="noreferrer">
                <Twitter />
            </HeadingLink>
            <HeadingLink href={docLink.linkedin} target='_blank' rel="noreferrer">
                <Linkedin />
            </HeadingLink>
            <HeadingLink href={docLink.url} target='_blank' rel="noreferrer">
                <Github />
            </HeadingLink>
        </Icons>
    </Content>
);

export default Hero;