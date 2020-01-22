import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div style={{ color: `purple` }}>
      <Layout>
        <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
          <Link to="/contact/">Contact</Link>
          <Header />
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "avenir",
          }}
        >
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                <Link to={frontmatter.path}>
                {frontmatter.title}
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
