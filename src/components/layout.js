// React 
import * as React from "react"
import PropTypes, { func } from "prop-types"

import Seo from "./seo.js";

// CSS 
import "../styles/layout.css"

const Layout = ({ seo, extended, children }) => {
  
  return (
    <>
    <Seo title={seo}/>
    <div className="layout-container">

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
              padding: "40px 0 40px 60px",
              height: "auto",
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
