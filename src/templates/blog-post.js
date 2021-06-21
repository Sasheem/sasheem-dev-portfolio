import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


// local component
import Layout from '../components/layout';

// import '../css/blog-post.css'; // make it pretty!
const Post = styled.div`
  max-width: 90%;
  padding: 0 .25em 0 .25em;
  
  @media only screen and (min-width: 768px) {
		max-width: 50vw;
	}
`;
const Content = styled.div`
  p {
    line-height: 1.3;
    font-size: 1.05em;
  }
  ul {
    list-style-type: circle;
  }
`;
const Title = styled.h1`
  margin-top: 5em;
`;

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  const image = getImage(data.markdownRemark.frontmatter.featuredImage);
  return (
    <Layout>
      <Helmet title={`Sasheem Dev Project: ${post.frontmatter.title}`} />
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <GatsbyImage image={image} alt={`${post.frontmatter.title} image`} />
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 320)
          }
        }
      }
    }
  }
`
