import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// local components
import Heading2 from './heading2';

// styled components
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80vw;

  // screen larger than 768px
  @media only screen and (min-width: 768px) {
    max-width: 100vw; 
  }

  h2, p {
    color: #44566C;     // dark blue grey
  }
`;
const Top = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const HeadingContainer = styled.div`
  flex: 1;
`;
const Filler = styled.div`
  flex: 1;
`;
const Ul = styled.ul`
  flex: 6;
  margin-top: 64px;
  margin-bottom: 288px;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  width: 100%;

  // screen larger than 768px
  @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Li = styled.li`
  font-weight: 300;
  font-size: 24px;
  width: 100%;
  max-width: 75vw;
  margin-bottom: 32px;


  // screen larger than 768px
  @media only screen and (min-width: 768px) {
    max-width: 25vw;
  }
`;
const ProjectLink = styled(Link)`
  min-width: 10em;
  height: 250px;

  // box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  //   0 4px 6px -2px rgba(0, 0, 0, 0.05);

  // &:hover {
  //   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  //     0 10px 10px -5px rgba(0, 0, 0, 0.04);
  //   cursor: pointer;
  //   transform: scale(1.1);
  // }

  // &:active {
  //   transform: scale(0.98);
  //   opacity: 0.8;
  // }
`;
const ProjectTitle = styled.p`
  font-weight: bold;
  font-size: 0.75em;
  margin-top: 1em;
`;
const ProjectDescr = styled.p`
  font-size: 16px;
`;

// data
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

// markup
const Projects = () => {
    const data = useStaticQuery(graphql`
    fragment processProjectImage on File {
      childImageSharp {
          gatsbyImageData(width: 320)
      }
    }
    query {
      projectOne: file(relativePath: { eq: "portfolio-web.png" }) {
        ...processProjectImage
      }
      projectTwo: file(relativePath: { eq: "unhoused-humanity-web.png" }) {
        ...processProjectImage
      }
      projectThree: file(relativePath: { eq: "cha-ching-mobile.png" }) {
        ...processProjectImage
      }
      projectBlank: file(relativePath: { eq: "project-web.png" }) {
        ...processProjectImage
      }
    }
  `);

  const projectDataOne = data.projectOne.childImageSharp.gatsbyImageData;
  const projectDataTwo = data.projectTwo.childImageSharp.gatsbyImageData;
  const projectDataThree = data.projectThree.childImageSharp.gatsbyImageData;
  const projectBlank = data.projectBlank.childImageSharp.gatsbyImageData;


    return (
        <Container id='projects'>
          <Top>
            <HeadingContainer>
              <Heading2 title='Latest Work' />
            </HeadingContainer>
            <Filler />
          </Top>
          <Ul>
            {links.map((link) => (
            <Li key={link.url}>
                <ProjectLink to={link.slug}>
                  <GatsbyImage
                      image={link.image === 'one' 
                          ? projectDataOne : link.image === 'two' 
                          ? projectDataTwo : link.image === 'three' 
                          ? projectDataThree : projectBlank
                      }
                      width={300}
                      height={150}
                      quality={95}
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt={link.alt}
                      style={{ borerRadius: `5px` }}
                  />
                  <ProjectTitle>
                      {link.text}
                  </ProjectTitle>
                  <ProjectDescr>
                      {link.description}
                  </ProjectDescr>
              </ProjectLink>	
            </Li>
          ))}
          </Ul>
        </Container>
    ); 
};

export default Projects;