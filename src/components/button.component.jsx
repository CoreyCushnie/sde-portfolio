import React from "react"
import Text from "./Text"
import { Link } from "gatsby"

import "../styles/button.style.css"

const Button = ({ navigateTo, ...props }) => {
  return (
    <div className="button-container" onClick={() => {}}>
      <Link style={{ textDecoration: "none" }} to={navigateTo}>
        <Text size="14" color="#f8f8ff" weight="900">
          {`${props.children}`.toUpperCase()}
        </Text>
      </Link>
    </div>
  )
}

export default Button
