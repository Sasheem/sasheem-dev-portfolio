import React from 'react';
import styled from 'styled-components';

// local components
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects';
import Contact from '../components/contact';

// styles
const HeadingContent = styled.div`
	margin-top: 256px;
	margin-bottom: 336px;
	color: #44566C;
	display: flex;
	flex-direction: column;
	max-width: 30vw
`;
const Heading = styled.h1`
	max-width: 540px;
	margin-bottom: 0.25em;
`;
const SubHeading = styled.h2`
	margin-top: 1em;
	margin-left: 0;
	color: #44566C;
`;
const HeadingAccent = styled.span`
	color: #E63946;
`;
const HeadingDetail = styled.p`
	font-weight: 300;
	font-size: 1.5em;
	margin: 0;
`;
const HeadingText = styled.p`
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

// data
const docLink = {
	text: 'Github Profile',
	url: 'https://github.com/Sasheem',
	twitter: 'https://twitter.com/SasheemDev',
	linkedin: 'https://www.linkedin.com/in/sasheem/',
};
const links = [
	{
		text: 'Portfolio Static Website',
		url: 'https://github.com/Sasheem/sasheem-dev-portfolio',
		description: 'Static website built using GatsbyJS and hosting on Amazon S3',
		color: '#E95800',
    image: `one`,
    path: `../images/portfolio-web.png`,
    alt: `Sasheem portfolio website`,
	slug: `/my-portfolio-post`
	},
	{
		text: 'Gatsby Unhoused Website',
		url: 'https://github.com/Sasheem/gatsby-unhoused-website',
		description:
			'This website tells the stories of those experiencing homelesssness and crowdfunds for individuals and families in need of a helping hand.',
		color: '#1099A8',
    image: `two`,
    path: `../images/unhoused-humanity-web.png`,
    alt: `Unhoused humanity website`,
	slug: `/unhoused-humanity-project`
	},
	{
		text: 'Tip Tracker Mobile App',
		url: 'https://github.com/Sasheem/tip-tracker-aws',
		description:
			'Tip tracking mobile app for users working in hospitality allowing them to track tips and wages earned.',
		color: '#BC027F',
    image: `three`,
    path: `../images/cha-ching-mobile.png`,
    alt: `Tip tracker mobile app`,
	slug: `/tip-tracker-mobile-app`
	},
];

const IndexPage = () => (
  <Layout>
      <SEO title="Sasheem Snell Portfolio" />
      <title>Home Page</title>
		<HeadingContent>
			<Heading>
				Hi! I'm <HeadingAccent>Sasheem</HeadingAccent>
				<span role='img' aria-label='Coder emoji'>
					👨🏾‍💻
				</span>
			</Heading>
			<HeadingDetail>I am a front end <HeadingAccent>web</HeadingAccent> developer</HeadingDetail>
			<HeadingText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Suspendisse ultricies maximus magna, nec condimentum purus blandit vitae. 
			</HeadingText>
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
		</HeadingContent>
		<SubHeading id="projects-section">My projects</SubHeading>
		<Projects links={links} />
		<Contact />
    </Layout>
);

export default IndexPage
