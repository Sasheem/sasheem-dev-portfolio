import React from 'react';

// local components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from '../components/social';
import { Content } from '../components/common';

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