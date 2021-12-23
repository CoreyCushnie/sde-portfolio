import * as React from "react"

import Text from "../../components/Text"
import Button from "../../components/button.component"
import ServiceCard from "../../components/service-card.component"
import Input from "../../components/input.component"

import "../../styles/contact.style.css"

const Contact = ({}) => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-input-container">
          <div>
            <Text size="16" color="#282828" margin="0 0 20px" weight="700">
              LET'S CONNECT
            </Text>
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Input inputType="text" mt={45} title={"Full name"} />
            <Input inputType="email" mt={5} title={"Email address"} />
            <Input inputType="tel" mt={5} title={"Mobile number"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <Input inputType="textarea" title={"What's on your mind?"} />
            </div>
          </form>
          <Button>Send Message</Button>
        </div>
        <div className="contact-card">
          <Text
            size="42"
            alignSelf={window.innerWidth < 1000 && "left"}
            color="#282828"
            weight="900"
          >
            CONTACT
          </Text>
          <div style={{ marginBottom: window.innerWidth < 1000 && "20px" }}>
            <ServiceCard
              upper
              title="Location"
              details="New York, NY"
              details2="currently open to local and remote freelance opportunities"
            />
            <ServiceCard upper title="Phone" details="+1(347)635-5021" />
            <ServiceCard title="Email" details="corey.cushnie@gmail.com" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
