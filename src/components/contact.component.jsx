import * as React from "react"

import Text from "./Text"
import { BsLinkedin, BsGithub, BsDribbble, BsFilePdf } from "react-icons/bs"

import pdf from "../resume.pdf"
import "../styles/contact.style.css"

const ContactInfo = ({ data, mobile }) => {
  const { Email, Phone } = data
  const socialLinks = data.Social_Links

  var h = 15
  var f = (h * 3) / 4
  var lH = h + 5

  return (
    <>
      {mobile ? (
        <div className="social-links" style={{zIndex: 3}}>
          <a href={socialLinks["linkedin"]} target="_blank" rel="noreferrer">
            <BsLinkedin className="social-icons" size={lH} color="white" />
          </a>
          <a href={socialLinks["github"]} target="_blank" rel="noreferrer">
            <BsGithub className="social-icons" size={lH} color="white" />
          </a>
          <a href={socialLinks["dribbble"]} target="_blank" rel="noreferrer">
            <BsDribbble className="social-icons" size={lH} color="white" />
          </a>
          <div onClick={() => window.open(pdf)}>
            <BsFilePdf className="social-icons" size={lH} color="white" />
          </div>
        </div>
      ) : (
        <div className="contact-details">
          <Text color="#f8f8ff" size={h} weight="800">
            Phone
          </Text>
          <div style={{ cursor: "pointer" }}>
            <Text margin="0px 0px 10px 15px" size={f} weight="400">
              {Phone}
            </Text>
          </div>

          <Text color="#f8f8ff" size={h} weight="800">
            Email
          </Text>

          <div style={{ cursor: "pointer" }}>
            <Text margin="0px 0px 10px 15px" size={f} weight="400">
              {Email}
            </Text>
          </div>

          <Text color="#f8f8ff" size={h} weight="800">
            Social Links
          </Text>
          <div className="social-links">
            <a href={socialLinks["linkedin"]} target="_blank" rel="noreferrer">
              <BsLinkedin className="social-icons" size={lH} color="white" />
            </a>
            <a href={socialLinks["github"]} target="_blank" rel="noreferrer">
              <BsGithub className="social-icons" size={lH} color="white" />
            </a>
            <a href={socialLinks["dribbble"]} target="_blank" rel="noreferrer">
              <BsDribbble className="social-icons" size={lH} color="white" />
            </a>
            <div onClick={() => window.open(pdf)}>
              <BsFilePdf className="social-icons" size={lH} color="white" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactInfo
