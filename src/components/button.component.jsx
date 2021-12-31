import React from "react"
import Text from "./Text"
import { Link, navigate } from "gatsby"

import "../styles/button.style.css"

const Button = ({ navigateTo, ...props }) => {
  return (
    <div
      className="button-container"
      onClick={() => {
        navigate(navigateTo)
      }}
    >
      <Text size="14" color="#f8f8ff" weight="900">
        {`${props.children}`.toUpperCase()}
      </Text>
    </div>
  )
}

export default Button
