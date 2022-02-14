import React from 'react';
import styled from 'styled-components';
import {Linkedin} from '@styled-icons/entypo-social/Linkedin';
import {Twitter} from '@styled-icons/entypo-social/Twitter';
import {Github} from '@styled-icons/bootstrap/Github';

// styled components
const TwitterIcon = styled(Twitter)`
    color: ${(props) => (props.forContact ? '#8996A6' : '#1D3557')};
    height: ${(props) => (props.forContact ? '2em' : '2.5em')};
    width: ${(props) => (props.forContact ? '2em' : '2.5em')};
`;
const LinkedinIcon = styled(Linkedin)`
    color: ${(props) => (props.forContact ? '#8996A6' : '#1D3557')};
    height: ${(props) => (props.forContact ? '2em' : '2.5em')};
    width: ${(props) => (props.forContact ? '2em' : '2.5em')};
`;
const GithubIcon = styled(Github)`
    color: ${(props) => (props.forContact ? '#8996A6' : '#1D3557')};
    height: ${(props) => (props.forContact ? '2em' : '2.5em')};
    width: ${(props) => (props.forContact ? '2em' : '2.5em')};
`;

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
            <TwitterIcon forContact={forContact} />
        </HeadingLink>
        <HeadingLink href={docLink.linkedin} target='_blank' rel="noreferrer">
            <LinkedinIcon forContact={forContact} />
        </HeadingLink>
        <HeadingLink href={docLink.url} target='_blank' rel="noreferrer">
            <GithubIcon forContact={forContact} />
        </HeadingLink>
    </Icons>
);

export default Social;