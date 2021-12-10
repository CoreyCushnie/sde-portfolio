import * as React from "react"
import Seo from "../../components/seo.js"

import Text from "../../components/Text/Text.jsx"
import Button from "../../components/button/button.component"

const introDetailsStyle = {
  position: `relative`,
  top: "0vh",
  textAlign: `left`,
}

const HomePage = ({ seo }) => {
  return (
    <div>
      <Seo title={seo} />
      <div style={introDetailsStyle}>
        <Text size="64" color="#282828" lHeight="55px" weight="1000">
          COREY
          <br />
          CUSHNIE
        </Text>
        <Text size="28" color="#B72828" lHeight="28px" weight="1000">
          Front-end Developer
        </Text>

        <Text size="18" margin="20px 0" color="#282828">
          I’m Corey, web and mobile <br />
          developer with 5+ years of freelance <br />
          experience.
        </Text>
        <Button>Contact Me</Button>
      </div>
    </div>
  )
}

export default HomePage
