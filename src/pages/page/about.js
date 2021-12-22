import * as React from "react"

import Text from "../../components/Text"
import Card from "../../components/card.component"
import Skills from "../../components/skills.component"

import "../../styles/about.style.css"

const AboutPage = ({ aboutData, skillsData }) => {
  const textSize = 14
  return (
    <div >
      <div className="about-details-container">
        <Text size="52" color="#282828" weight="900" margin="0 0 20px 0">
          ABOUT ME
        </Text>
        <Text size={textSize} lHeight="25px" margin="15px 0" color="black">
          {aboutData.p1}
        </Text>
        <Text size={textSize} lHeight="25px" margin="15px 0" color="black">
          {aboutData.p2}
        </Text>
        <Text size={textSize} lHeight="25px" margin="15px 0" color="black">
          {aboutData.p3}
        </Text>
      </div>
      <div className="bottom-container">
        <div className="about-education">
          <Text size="52" color="#282828" weight="900">
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
          <Text size="52" color="#282828" weight="900">
            SKILLS
          </Text>
          <Skills skillsData={skillsData} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
