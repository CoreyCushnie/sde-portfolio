import React from "react"

import "../styles/input.style.css"

const Input = ({ title, mt, inputType, ...props }) => {
  return (
    <div className="input-container">
        {inputType === 'textarea' ? (
          <>
            <textarea style={{display: "flex", verticalAlign: "bottom", alignItems:"baseline", fontFamily: "inherit" , overflow: "auto", marginTop: `${mt}px`}} cols="40" rows="6" type={inputType} id={title} placeholder={title}/>
          </>
        ) : (
          <>
            <input style={{marginTop: `${mt}px`,  fontFamily: "inherit"}} type={inputType} id={title} name={title} placeholder=" "/>
            <label for={title}>{title}</label>
          </>
        )}
    </div>
  )
}

export default Input
