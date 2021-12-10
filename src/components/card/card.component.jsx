import * as React from "react"

import Text from "../Text/Text"

import "./card.style.css"

const Card = ({ ref, school, major, studies, dates }) => {
  const titleColor = "#B72828"
  const textColor = "#282828"

  console.log(ref)
  return (
    <div className="card-container">

        <Text size="18" weight="900" color={titleColor}>
          {school.toUpperCase()}
        </Text>
        <Text size="14" color={textColor}>
          {" "}
          {major}
        </Text>
        <Text size="14" color={textColor}>
          {" "}
          {studies}
        </Text>

        <Text size="14" margin="20px 0 0" color={textColor}>
          {" "}
          {dates}
        </Text>

    </div>
  )
}

export default Card
