import { Link } from "gatsby"
import React from "react"

interface Props {
  title: string
  description: string
  slug: string
}

export function LandmarkCard(props: Props) {
  const { title, description, slug } = props

  return (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <div style={{ border: "1px solid black", borderRadius: "2px" }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  )
}
