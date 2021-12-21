import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/layout"
import Header from "../components/header.component"


// Pages
import HomePage from "./page/homepage"
import AboutPage from "./page/about"
import ProjectPreviewPage from "./page/project"
import Services from "./page/services"

//Data
import GET_DATA from "../queries";
import Seo from "../components/seo";
import LoadingGif from "../images/LogoLoading.gif";


const IndexPage = () => {
  const [loading, setLoading] = React.useState(true);
  

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
    }, 5000);
  })
  return (
    <>
      {
        loading ? (
          <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img
              src={LoadingGif}
              width={500}
              quality={50}
              formats={["auto", "webp", "avif"]}
              alt="blah"
            />
          </div>
        ) : (
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
          <ProjectPreviewPage/>
        </Layout>
        <Layout seoTitle="Services">
          <Services serviceData={serviceData}/>
        </Layout>
        </>

        )
      }
    </>
  )
}

export default IndexPage
