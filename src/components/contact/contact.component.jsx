import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Text from "../Text/Text";
import { BsLinkedin, BsGithub, BsDribbble, BsFilePdf } from "react-icons/bs";


import pdf from "../../resume.pdf";
import "./contact.styles.css";

const ContactInfo = ( {data} ) =>{

    const { Email, Phone} = data.site.siteMetadata.pageData.personalInfo
    const socialLinks = data.site.siteMetadata.pageData.personalInfo.Social_Links
  

    var h = 15;
    var f = h * 3/4;
    var lH = h + 5
  
    return(
      <div className="contact-details">
        <Text color="#f8f8ff" size={h} weight="800">Phone</Text>
        <Text margin="0px 0px 10px 15px" size={f} weight="400">{Phone}</Text>
  
        <Text color="#f8f8ff" size={h} weight="800">Email</Text>
        <Text margin="0px 0px 10px 15px" size={f} weight="400">{Email}</Text>
  
        <Text color="#f8f8ff" size={h} weight="800">Social Links</Text>
        <div className="social-links">
          <Link className="social-icons" to={socialLinks["linkedin"]} target="_blank">
            <BsLinkedin size={lH} color="white"/>
          </Link>
          <Link className="social-icons" to={socialLinks["github"]} target="_blank">
            <BsGithub size={lH} color="white"/>
          </Link>
          <Link className="social-icons" to={socialLinks["dribbble"]} target="_blank">
            <BsDribbble size={lH} color="white"/>
          </Link>
          <div className="social-icons" style={{cursor: "pointer"}} onClick={() => window.open(pdf)}>
            <BsFilePdf size={lH} color="white"/>
          </div>
        </div>
      </div>
    )
  }

export default ContactInfo;