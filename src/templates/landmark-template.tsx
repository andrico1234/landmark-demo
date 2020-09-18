import React from "react"
import Layout from "../components/layout"

interface Props {
  pathContext: {
    title: string
    content: string
  }
}

function LandmarkTemplate(props: Props) {
  const { pathContext } = props
  const { title, content } = pathContext

  return (
    <Layout>
      <h1>{title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export default LandmarkTemplate
