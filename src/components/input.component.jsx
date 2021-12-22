import React from "react"
import Text from "./Text"

import "../styles/input.style.css"

const Input = ({ title, mt, inputType, ...props }) => {
  return (
    <div className="input-container">
        {inputType === 'textarea' ? (
            <textarea style={{marginTop: `${mt}px`}} type={inputType} id={title} name={title} placeholder=" "/>

        ) : (

            <input style={{marginTop: `${mt}px`}} type={inputType} id={title} name={title} placeholder=" "/>
        )}
        <label for={title}>{title}</label>
    </div>
  )
}

export default Input
