import React from "react"
import Text from "./Text"
import { Link } from "gatsby"

import "../styles/button.style.css"

const Button = ({navigateTo, ...props }) => {
  return (
    <div className="button-container" onClick={() => {}}>
        <Link style={{textDecoration: "none"}} to={navigateTo}>
        <Text size="18" color="#f8f8ff" weight="1000">
          {props.children}
        </Text>

    </Link>
    </div>
  )
}

export default Button
