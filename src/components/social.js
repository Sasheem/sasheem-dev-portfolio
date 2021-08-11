import React from 'react';
import styled from 'styled-components';

// local components
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import TwitterLG from '../assets/twitter-lg.svg';
import LinkedinLG from '../assets/linkedin-lg.svg';
import GithubLG from '../assets/github-lg.svg';

// data
const docLink = {
	text: 'Github Profile',
	url: 'https://github.com/Sasheem',
	twitter: 'https://twitter.com/SasheemDev',
	linkedin: 'https://www.linkedin.com/in/sasheem/',
};

// styled components
const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 10em;
`;
const HeadingLink = styled.a`
	vertical-align: 5%;
`;

const Social = ({ forContact }) => (
    <Icons>
        <HeadingLink href={docLink.twitter} target='_blank' rel="noreferrer">
            {forContact ? <TwitterLG /> : <Twitter />}
        </HeadingLink>
        <HeadingLink href={docLink.linkedin} target='_blank' rel="noreferrer">
            {forContact ? <LinkedinLG /> : <Linkedin />}
        </HeadingLink>
        <HeadingLink href={docLink.url} target='_blank' rel="noreferrer">
            {forContact ? <GithubLG /> : <Github />}
        </HeadingLink>
    </Icons>
);

export default Social;