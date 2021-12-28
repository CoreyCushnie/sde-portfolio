import * as React from "react"

import Layout from "../../../components/layout"
import Header from "../../../components/header.component"
import Text from "../../../components/Text"
import ProjectDisplay from "../../../components/project-layout"

import "../../../styles/projects-page.style.css"
import GET_DATA from "../../../queries"

import { webProjects, mobileProjects, otherProjects } from "./projectData"

const Projects = props => {
  // Run all queries
  const data = GET_DATA()

  // Data for components
  const headerData = data.site.siteMetadata?.pageData.navLinks
  const contactData = data.site.siteMetadata?.pageData.personalInfo

  const [currentView, setCurrentView] = React.useState(0)
  const selections = ["Web", "Mobile", "Other"]
  const [projectView, setProjectView] = React.useState(0)
  const [imageIDX, setImageiDX] = React.useState(0)

  var projectData = null
  switch (selections[currentView]) {
    case "Mobile":
      projectData = mobileProjects
      break
    case "Other":
      projectData = otherProjects
      break
    default:
      projectData = webProjects
  }

  return (
    <>
      <Header headerData={headerData} contactData={contactData} />
      <Layout>
        <div className="projects-container">
          <Text alignSelf="left" size="45" color="#282828" weight="900">
            PROJECTS
          </Text>
          <div className="projects-selection-container">
            {selections.map((val, idx) => {
              return (
                <div
                  className="selection-button"
                  style={{
                    padding: "10px 20px ",
                    backgroundColor:
                      currentView === idx ? "#B72828" : "#f8f8ff",
                  }}
                  onClick={() => {
                    setCurrentView(idx)
                    setProjectView(0)
                    setImageiDX(0)
                  }}
                >
                  <Text
                    size={14}
                    weight="600"
                    color={currentView === idx ? "#f8f8ff" : "#E0E0E0"}
                  >
                    {val.toUpperCase()}
                  </Text>
                </div>
              )
            })}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                {projectData.name.map((val, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{ padding: "20px 20px 20px 0" }}
                      onClick={() => {
                        setImageiDX(0)
                        setProjectView(idx)
                      }}
                    >
                      <Text
                        color={projectView === idx ? "#282828" : "#28282852"}
                        weight={projectView === idx ? "900" : "400"}
                      >
                        {val}{" "}
                      </Text>
                    </div>
                  )
                })}
              </div>
              <ProjectDisplay
                pType={selections[currentView]}
                name={projectData.name[projectView]}
                title={projectData.title[projectView]}
                tStack={projectData.techStack[projectView]}
                desc={projectData.description[projectView]}
                imageScr={projectData.img[projectView]}
                logo={projectData.logo[projectView]}
                imageID={imageIDX}
                back={() => {
                  imageIDX < 1 ? setImageiDX(projectData.img[projectView].length - 1) : setImageiDX(imageIDX - 1)
                }}
                forward={() => {
                  imageIDX > projectData.img[projectView].length - 2 ? setImageiDX(0) : setImageiDX(imageIDX + 1)
                  
                }}
              />
            </>
          </div>
          <div className=""></div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
