import * as React from "react"

// Components
import Layout from "../components/layout"
import Header from "../components/header.component"

// Pages
import HomePage from "./page/homepage"
import AboutPage from "./page/about"
import ProjectPreviewPage from "./page/project"
import Services from "./page/services"
import Contact from "./page/contact"

//Data
import GET_DATA from "../queries"
import Seo from "../components/seo"
import LoadingGif from "../images/LogoLoading.gif"

import '../styles/index.css';
import ContactInfo from "../components/contact.component"

const IndexPage = () => {
  const [loading, setLoading] = React.useState(true)

  // Run all queries
  const data = GET_DATA()

  // Data for components
  const headerData = data.site.siteMetadata?.pageData.navLinks
  const contactData = data.site.siteMetadata?.pageData.personalInfo
  const aboutData = data.site.siteMetadata?.pageData.aboutMeData
  const skillsData = data.site.siteMetadata?.pageData.skillsData
  const serviceData = data.site.siteMetadata?.pageData.serviceData

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={LoadingGif}
            width={500}
            quality={50}
            formats={["auto", "webp", "avif"]}
            alt="blah"
          />
        </div>
      ) : (
        <div className="app-container">
          <Seo title="Home" />
          <Header headerData={headerData} contactData={contactData} />
           <Layout id="home" seoTitle="Home" extended>
            <HomePage />
          </Layout> 
         <Layout id="about" seoTitle="About">
            <AboutPage aboutData={aboutData} skillsData={skillsData} />
          </Layout> 
            <Layout id="projects" seoTitle="Projects">
            <ProjectPreviewPage />
          </Layout>
          <Layout id="services" seoTitle="Services">
            <Services serviceData={serviceData} />
          </Layout>
          <Layout id="contact" seoTitle="Contact" extended>
            <Contact />
          </Layout>
          {window.innerWidth < 1100 && (

          <div className="footer">
            <ContactInfo data={contactData} mobile />
          </div>
          )}
        </div>
      )}
    </>
  )
}

export default IndexPage
