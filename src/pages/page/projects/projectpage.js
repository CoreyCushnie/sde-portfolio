import * as React from "react"

import Layout from "../../../components/layout"
import Header from "../../../components/header.component"
import Text from "../../../components/Text"

import "../../../styles/projects-page.style.css";

import GET_DATA from "../../../queries"

const Projects = props => {
  // Run all queries
  const data = GET_DATA()

  // Data for components
  const headerData = data.site.siteMetadata?.pageData.navLinks
  const contactData = data.site.siteMetadata?.pageData.personalInfo

  const [currentView, setCurrentView] = React.useState(0);
  const selections = ["Web", "Mobile", "Other"]

  return (
    <>
      <Header headerData={headerData} contactData={contactData} />
      <Layout>
          <Text size="32" color="#282828" weight="900">
            PROJECTS
          </Text>
        <div className="projects-container">
            <div className="projects-selection-container">
            {selections.map((val, idx) => {
                return (
                    <div className="selection-button" style={{padding: "10px 20px ", backgroundColor: currentView === idx ? "#B72828" : "#f8f8ff"}} onClick={()=>setCurrentView(idx)}>
                        <Text size={14} weight="600" color={currentView === idx ? "#f8f8ff" : "#E0E0E0"}>{val.toUpperCase()}</Text>
                    </div>
                )
            })} 
            </div>  
            <div className=""></div> 
        </div>
      </Layout>
    </>
  )
}

export default Projects