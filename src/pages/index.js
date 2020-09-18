import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandmarkCard } from "../components/landmark-card"

const IndexPage = props => {
  const { edges } = props.data.allMarkdownRemark

  const landmarkDeets = edges.map(({ node }) => {
    const { fileAbsolutePath, frontmatter } = node
    const { description, title } = frontmatter
    const filePath = fileAbsolutePath.split("content")[1]
    const slug = filePath.substring(0, filePath.indexOf("/index"))

    return {
      description,
      title,
      slug,
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Landmark site</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {landmarkDeets.map(landmark => {
          const { title, description, slug } = landmark
          return (
            <LandmarkCard
              key={slug}
              title={title}
              description={description}
              slug={slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
