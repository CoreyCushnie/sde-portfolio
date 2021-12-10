import * as React from "react"

// Components
import Layout from "../components/layout"
import Header from "../components/header.component"


// Pages
import HomePage from "./page/homepage"
import AboutPage from "./page/about"
import Projects from "./page/project"

//Data
import GET_DATA from "../queries";
import Seo from "../components/seo"


const IndexPage = () => {

  // Run all queries
  const data = GET_DATA()

  // Data for components
  const headerData = data.site.siteMetadata?.pageData.navLinks
  const contactData = data.site.siteMetadata?.pageData.personalInfo
  const aboutData = data.site.siteMetadata?.pageData.aboutMeData
  const skillsData = data.site.siteMetadata?.pageData.skillsData

  return (
    <>
      <Seo title="Home"/>
      <Header headerData={headerData} contactData={contactData} />
      <Layout seoTitle="Home" extended>
        <HomePage />
      </Layout>
      <Layout seoTitle="About" >
        <AboutPage aboutData={aboutData} skillsData={skillsData}/>
      </Layout>
      <Layout seoTitle="Projects">
        <Projects/>
      </Layout>
    </>
  )
}

export default IndexPage
