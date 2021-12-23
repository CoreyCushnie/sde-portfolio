import * as React from "react"

import Text from "../../components/Text"
import Card from "../../components/card.component"
import Skills from "../../components/skills.component"

import "../../styles/about.style.css"

const AboutPage = ({ aboutData, skillsData }) => {
  const textSize = 12
  return (
    <div>
      <div className="about-details-container">
        <Text
          alignSelf={window.innerWidth < 1000 && "left"}
          size="42"
          color="#282828"
          weight="900"
          margin="0 0 15px 0"
        >
          ABOUT ME
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          {aboutData.p1}
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          {aboutData.p2}
        </Text>
        <Text size={textSize} lHeight="15px" margin="10px 0" color="black">
          {aboutData.p3}
        </Text>
      </div>
      <div className="bottom-container">
        <div className="about-education">
          <Text
            alignSelf={window.innerWidth < 1000 && "left"}
            size="42"
            color="#282828"
            weight="900"
          >
            EDUCATION
          </Text>

          <Card
            school="CUNY - John Jay College"
            major="Computer Science and Information Security"
            studies="B. S. (Honors in Major)"
            dates="Jan 2018 - May 2021"
          />

          <Card
            school="The Knowledge House"
            major="Web Development - Product Management"
            studies=" "
            dates="June 2018 - Sep 2018"
          />
        </div>
        <div className="about-skills">
          <Text
            alignSelf={window.innerWidth < 1000 && "left"}
            size="42"
            color="#282828"
            weight="900"
          >
            SKILLS
          </Text>
          <div style={{margin: "20px 0"}}>
            <Skills skillsData={skillsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
