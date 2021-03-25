import React from 'react';
import styled from 'styled-components';

// local components
import GithubIcon from '../assets/github-brands.svg';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects';
import Contact from '../components/contact';

// styles
const Heading = styled.h1`
	margin-top: 256px;
	margin-bottom: 336px;
	max-width: 540px;
`;
const SubHeading = styled.h2`
	margin-top: 1em;
	margin-left: 0;
`;
const HeadingAccent = styled.span`
	color: #a0aec0;
`;

const HeadingLink = styled.a`
	vertical-align: 5%;
`;

// data
const docLink = {
	text: 'Github Profile',
	url: 'https://github.com/Sasheem',
};
const links = [
	{
		text: 'Sasheem Dev Portfolio',
		url: 'https://github.com/Sasheem/sasheem-dev-portfolio',
		description: 'Static website built using GatsbyJS and hosting on Amazon S3',
		color: '#E95800',
    image: `one`,
    path: `../images/portfolio-web.png`,
    alt: `Sasheem portfolio website`,
	slug: `/my-portfolio-post`
	},
	{
		text: 'Unhoused Humanity',
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
		text: 'Cha Ching',
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
      <SEO title="Home" />
      <title>Home Page</title>
			<Heading>
				Hi my name is Sasheem.
				<br />
				<HeadingAccent>
					Welcome to my portfolio!{' '}
				</HeadingAccent>
				<span role='img' aria-label='Technologist emoji'>
					👨🏾‍💻
				</span>
			</Heading>
			<HeadingLink href={docLink.url} target='_blank' rel="noreferrer">
				<GithubIcon />
			</HeadingLink>
			<SubHeading id="projects-section">My projects</SubHeading>
      <Projects links={links} />
      <Contact />
    </Layout>
);

export default IndexPage
