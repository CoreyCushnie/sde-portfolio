import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Text from "./Text"

import "../styles/service-card.style.css"

const ServiceCard = ({ title, details, turnAroundTime }) => {
   
  return (
    <>
    <div className="service-card-container" >
      <div >
        <Text size={14} weight="900" color="#B72828">
            {title}
        </Text>
      </div>
        
        <div>
        <Text size={12} color="#282828" margin="5px 0 0 0">
          {details}
        </Text>
        </div>
        <div style={{display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "flex-end"}}>
        <Text size={12} weight="700" color="#2828285F" margin="5px 0 0 0">
            {turnAroundTime}
        </Text>
        </div>
    </div>
    </>
  )
}

export default ServiceCard