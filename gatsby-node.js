/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const landmarkPageTemplate = require.resolve(
    "./src/templates/landmark-template.tsx"
  )

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while making graphql request.")
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { fileAbsolutePath, html, frontmatter } = node;
    const filePath = fileAbsolutePath.split("content")[1]
    const slug = filePath.substring(0, filePath.indexOf("/index"))

    createPage({
      path: slug,
      component: landmarkPageTemplate,
      context: {
        slug,
        content: html,
        title: frontmatter.title
      },
    })
  })
}
