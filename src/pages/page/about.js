import * as React from "react"

import Seo from "../../components/seo"
import Text from "../../components/Text/Text"

import "../../styles/about.style.css";

const AboutPage = ({ seo, aboutData }) => {
  const textSize = 16;
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
    </div>
  )
}

export default AboutPage
