import * as React from "react"

import Text from "../../components/Text"
import Button from "../../components/button.component"

const introDetailsStyle = {
  position: `relative`,
  top: "0vh",
  textAlign: `left`,
}

const HomePage = ({ }) => {
  return (
    <div>
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
        <Button navigateTo={"/projects"} >Contact Me</Button>
      </div>
    </div>
  )
}

export default HomePage
