import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from 'styled-components';

// local component
import Layout from '../components/layout';

// import '../css/blog-post.css'; // make it pretty!
const Container = styled.div`
    background-color: pink;
`;
const Post = styled.div``;
const Content = styled.div``;

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Post>
        <h1>{post.frontmatter.title}</h1>
        <Content
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Post>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
