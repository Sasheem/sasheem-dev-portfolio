import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// styled components
const Ul = styled.ul`
  margin-top: 64px;
    margin-bottom: 288px;
    padding-left: 0;
    display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
  }
`;
const Li = styled.li`
    font-weight: 300;
    font-size: 24px;
    width: 100%;
    max-width: 75vw;
    margin-bottom: 32px;

    @media only screen and (min-width: 768px) {
      max-width: 25vw;
    }
`;
const ProjectLink = styled(Link)`
  min-width: 10em;
  height: 250px;
  border-radius: 0.5rem;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;
const ProjectTitle = styled.p`
  color: #116466;
  font-weight: bold;
  font-size: 0.75em;
  margin-top: 1em;
`;
const ProjectDescr = styled.p`
  color: #232129;
  font-size: 16px;
`;


// markup
const Projects = ({ links }) => {
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
    ); 
};

export default Projects;