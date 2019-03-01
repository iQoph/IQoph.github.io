import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Welcome to my world</h2>
    <p>I'm one of the drunkards in Japan.</p>
    <p>だそうです。</p>
  </Layout>
)

export default IndexPage
