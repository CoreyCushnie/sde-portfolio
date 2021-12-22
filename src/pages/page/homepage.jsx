import * as React from "react"

import Text from "../../components/Text"
import Button from "../../components/button.component"

const introDetailsStyle = {
  position: `relative`,
  top: "0vh",
  textAlign: `left`,
}

const HomePage = ({}) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        left: "22vw",
        top: "200px",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "300px",
          marginRight: "60px",
          backgroundColor: "#f8f8ff",

          boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.01), 0 0  0 2px #f8f8f8, 0em 0em 1em rgba(0,0,0,0.3)"
        }}
      ></div>
      <div style={introDetailsStyle}>
        <Text size="104" color="#282828" lHeight="85px" weight="900">
          COREY
          <br />
          CUSHNIE
        </Text>
        <Text size="45" color="#B72828" lHeight="45px" weight="900">
          Front-end Developer
        </Text>

        <Text size="28" margin="20px 0" color="#282828">
          I’m Corey, web and mobile <br />
          developer with 6+ years of freelance <br />
          experience.
        </Text>
        <Button navigateTo={"/projects"}>Contact Me</Button>
      </div>
    </div>
  )
}

export default HomePage
