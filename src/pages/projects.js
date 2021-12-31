import * as React from "react"

import Layout from "../components/layout"
import Header from "../components/header.component"
import Text from "../components/Text"
import ProjectDisplay from "../components/project-layout"

import "../styles/projects-page.style.css"
import GET_DATA from "../queries"

import EthaLogo from "../images/web/EthaLogo.png"
import Etha0 from "../images/web/Web0.png"
import Etha1 from "../images/web/Web1.png"
import Etha2 from "../images/web/Web2.png"
import MEtha0 from "../images/mobile/MobEtha0.png"
import MEtha1 from "../images/mobile/MobEtha1.png"


import OffLogo from "../images/web/OffLogo.png"
import Off0 from "../images/web/WebOFF0.png"
import Off1 from "../images/web/WebOFF1.png"
import Off2 from "../images/web/WebOFF2.png"
import MOff0 from "../images/mobile/MobOff0.png"
import MOff1 from "../images/mobile/MobOff1.png"


import MALogo from "../images/web/MALogo.png"
import MA0 from "../images/web/WebMA0.png"
import MMA0 from "../images/mobile/MobMA0.png"
import MMA1 from "../images/mobile/MobMA1.png"


import CRWNLogo from "../images/web/CRWNLogo.png"
import CRWN0 from "../images/web/WebCRWN0.png"
import CRWN1 from "../images/web/WebCRWN1.png"

import DBLogo from "../images/web/DBLogo.png"
import DB0 from "../images/web/WebDB0.png"

const webProjects = {
  img: [
    [Etha0, Etha1, Etha2],
    [Off1, Off0, Off2],
    [MA0],
    [CRWN0, CRWN1],
    [DB0],
  ],
  logo: [EthaLogo, OffLogo, MALogo, CRWNLogo, DBLogo],
  name: [
    "Etha",
    "Official - Landing Page",
    "Moon Alley Bank - Landing Page",
    "CRWN - Clothing LTD",
    "Daily Bread Meal prep - Landing Page",
  ],
  title: [
    "Full Stack Web and Mobile Developer",
    "React Native Developer",
    "Mobile Developer",
    "React Developer",
    "Full Stack Web and Mobile Developer",
  ],
  techStack: [
    [
      "React",
      "TypeScript",
      "Capacitor",
      "ExpressJS",
      "Google Analytics",
      "Firebase",
      "NodeJS",
      "Axios",
    ],
    ["React Native", "React", "GraphQL", "AWS", "NodeJS", "JavaScript"],
    [
      "React",
      "GatsbyJS",
      "React Native",
      "GraphQL",
      "AWS",
      "ES6",
      "JavaScript",
      "NodeJS",
    ],
    [
      "React",
      "Redux",
      "Hooks",
      "AWS",
      "ES6",
      "JavaScript",
      "StripeAPI",
      "Google Analytics",
    ],
    ["Python", "Django", "MongoDB", "PHP", "SQL"],
  ],
  description: [
    "The world’s first non-partisan polling tool for political statements. For the first time, voters will have a one-stop shop to check all statements made on social media by political candidates.",
    "The next generation of social media, designed to build healthy relationships.",
    "Take your banking and budgeting to a new level when you open a free Moon Alley account. With a interest-free checkings account and fees on direct deposits, never miss another payment while enjoying the perks of cashless payments.",
    "A streetware apparel e-commerce site, designed by us for us.",
    "Is it really meal prepping if you're eating all of your favorite dishes? Add delicious daily recipes to your meal plan! Eating healthy has never been so effortless!",
  ],
}

const mobileProjects = {
  img: [
    [MEtha0, MEtha1],
    [MOff0, MOff1],
    [MMA0, MMA1],
    [, ]
  ],
  logo: [EthaLogo, OffLogo, MALogo],
  name: [
    "Etha",
    "Official",
    "Moon Alley Bank",

  ],
  title: [
    "Full Stack Web and Mobile Developer",
    "React Native Developer",
    "Mobile Developer",


  ],
  techStack: [
    [
      "React",
      "TypeScript",
      "Capacitor",
      "ExpressJS",
      "Google Analytics",
      "Firebase",
      "NodeJS",
      "Axios",
    ],
    ["React Native", "React", "GraphQL", "AWS", "NodeJS", "JavaScript"],
    [
      "React",
      "GatsbyJS",
      "React Native",
      "GraphQL",
      "AWS",
      "ES6",
      "JavaScript",
      "NodeJS",
    ]
  ],
  description: [
    "The world’s first non-partisan polling tool for political statements. For the first time, voters will have a one-stop shop to check all statements made on social media by political candidates.",
    "The next generation of social media, designed to build healthy relationships.",
    "Take your banking and budgeting to a new level when you open a free Moon Alley account. With a interest-free checkings account and fees on direct deposits, never miss another payment while enjoying the perks of cashless payments.",

  ],
}



const Projects = props => {
  // Run all queries
  const data = GET_DATA()

  // Data for components
  const headerData = data.site.siteMetadata?.pageData.navLinks
  const contactData = data.site.siteMetadata?.pageData.personalInfo

  const [currentView, setCurrentView] = React.useState(0)
  const selections = ["Web", "Mobile"]
  const [projectView, setProjectView] = React.useState(0)
  const [imageIDX, setImageiDX] = React.useState(0)

  var projectData = null
  switch (selections[currentView]) {
    case "Mobile":
      projectData = mobileProjects
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
                  width: "95%",
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
                        size={typeof window !== 'undefined' && window.innerWidth > 1000 ? "16" : "12"}
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
