import React from 'react';
import styled from 'styled-components';

// local components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

// styles
const SubHeading = styled.h2`
	margin-top: 1em;
	margin-left: 0;
	color: #44566C;
`;

const IndexPage = () => (
  <Layout>
      <SEO title="Sasheem Snell Portfolio" />
      <title>Home Page</title>
		<Hero />
		<About />
		<Projects />
		<Contact />
    </Layout>
);

export default IndexPage
