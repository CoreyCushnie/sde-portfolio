import * as React from "react"

import Seo from "../../components/seo"
import Text from "../../components/Text/Text"
import Card from "../../components/card/card.component";

import "../../styles/about.style.css";

const AboutPage = ({ seo, aboutData }) => {
  const textSize = 14;
  return (
    <div id="about">
      <Seo title={seo} />
      <div className="about-details-container">
        <Text size="38" weight="600" color="black">
          About me
        </Text>
        <Text size={textSize} margin="15px 0" color="black">
          {aboutData.p1}
        </Text>
        <Text size={textSize} margin="15px 0" color="black">
          {aboutData.p2}
        </Text>
        <Text size={textSize} margin="15px 0" color="black">
          {aboutData.p3}
        </Text>
      </div>
      <div className="bottom-container">
        <div className="about-education">
        <Text size="38" weight="600" color="black">
          Education
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
        <Text size="38" weight="600" color="black">
          Skills
        </Text>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
