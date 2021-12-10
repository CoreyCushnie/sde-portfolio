import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header/header.component"
import Text from "../components/Text/Text"
import Button from "../components/button/button.component"

// Pages
import HomePage from "./homepage"
import AboutPage from "./About"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query ABOUT_ME {
    site {
      siteMetadata {
        pageData {
          navLinks {
            home
            about
            projects
            services
            contact
          }
          aboutMeData{
            p1
            p2
            p3
          }
          personalInfo {
            Name
            Email
            Phone
            Social_Links{
              linkedin
              github
              dribbble
            }
          }
        }
      }
    }
  }
  `)

  return (
    <>
      <Header data={data} />
      <Layout seo="Home" extended>
        <HomePage />
      </Layout>
      <Layout seo="About">
        <AboutPage />
      </Layout>
    </>
  )
}

export default IndexPage
