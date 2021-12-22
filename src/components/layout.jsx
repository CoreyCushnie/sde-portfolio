// React 
import * as React from "react"
import PropTypes from "prop-types"

import Seo from "./seo";

// CSS 
import "../styles/layout.css"

const Layout = ({ seo, extended, children, id }) => {

  return (
    <>
    <Seo title={seo}/>
    <div className="layout-container" id={id}>

      {/* Left */}
      <div 
        className="layout-content-left" 
        style={{ width: extended ? "30vw" : "20vw"
      }}>
        
      </div>

      {/* Right  */}
      <div className="layout-content-right">

        <div
          style={{
            flex: 1
          }}
        >
          <main
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
