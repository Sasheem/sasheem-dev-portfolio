import React from 'react';
import styled from 'styled-components';

// local components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from '../components/social';

const Content = styled.div`
	margin-top: 144px;
	margin-bottom: 144px;
	color: #44566C;     // dark blue grey
	display: flex;
	flex-direction: column;

  // screen larger than 768px
  @media only screen and (min-width: 768px) {
      margin-top: 256px;
      margin-bottom: 336px;
      align-items: center;
      justify-content: center;
  }
`;

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <Content>
      <h1>Thank you!</h1>
      <p>I have received your message and will get back to you shortly.</p>
      <h2>Follow me</h2>
      <Social forContact={false} />
    </Content>
  </Layout>
)

export default Thanks;