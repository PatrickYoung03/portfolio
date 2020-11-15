import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Cartoon() {
  const data = useStaticQuery(graphql`
    query {
      patrick: file(relativePath: { eq: "patrick.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      className="img"
      style={{ height: "300px", width: "300px" }}
      fluid={data.patrick.childImageSharp.fluid}
      alt="cartoon of me"
    />
  )
}
