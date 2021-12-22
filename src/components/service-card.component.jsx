import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Text from "./Text"

import "../styles/service-card.style.css"

const ServiceCard = ({ title, details, details2, turnAroundTime, upper }) => {
  return (
    <>
      <div className="service-card-container">
        <div>
          <Text size={14} weight="900" color="#B72828">
            {title.toUpperCase()}
          </Text>
        </div>

        <div>
          <Text size={12} color="#282828" margin="10px 0">
            {upper ? details.toUpperCase() : details}
          </Text>
        </div>
        {details2 && (
          <div>
          <Text size={12} color="#282828" margin="10px 0">
            {upper ? details2.toUpperCase() : details2}
          </Text>
        </div>
        )}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Text size={12} weight="700" color="#2828285F" margin="5px 0 0 0">
            {turnAroundTime}
          </Text>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
