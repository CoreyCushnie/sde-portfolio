import * as React from "react"

import Text from "../../components/Text"
import Button from "../../components/button.component"
import ServiceCard from "../../components/service-card.component"
import Input from "../../components/input.component"


const introDetailsStyle = {
  position: `relative`,
  top: "0vh",
  textAlign: `left`,
}

const Contact = ({}) => {
  return (
    <div>
      
      <div
        style={{
          position: "relative",
          display: "flex",
          left: "-25vw",
          top: "100px",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "300px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            marginRight: "60px",
            backgroundColor: "#f8f8ff",
          boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.01), 0 0  0 2px #f8f8f8, 0em 0em 1em rgba(0,0,0,0.3)"
      
          }}
        >
        <div>
          <Text size="16" color="#282828" margin="0 0 20px" weight="700">LET'S CONNECT</Text>
        </div>
        <form>
          <Input inputType="text" mt={5} title={"Full name"}/>
          <Input inputType="email" mt={5} title={"Email address"}/>
          <Input inputType="phone" mt={5} title={"Mobile number"}/>
          <Input inputType="textarea" mt={20} title={"What's on your mind?"}/>
        </form>
        <Button>Send Message</Button>
        </div>
        <div style={introDetailsStyle}>
        <Text size="52" color="#282828" weight="900">CONTACT</Text>
          <ServiceCard upper title="Location" details="New York, NY" details2="currently open to remote, freelance opportunities"/>
          <ServiceCard upper title="Phone" details="+1 (347) 635 - 5021"/>
          <ServiceCard upper title="Email" details="corey.cushnie@gmail.com"/>
        </div>
      </div>
    </div>
  )
}

export default Contact
