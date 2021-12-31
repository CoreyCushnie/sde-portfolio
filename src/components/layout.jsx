// React
import * as React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"

// CSS
import "../styles/layout.css"

const Layout = ({ seo, extended, children, id }) => {
  // define dimension variables for use in hook
  let height;
  let width;
  // Check for the window element. 
  // Needed for server size rendering of Gatsby else use of window.innerHeight/Width will cause build failures.
  if (typeof window !== `undefined`) {
    height = window.innerHeight
    width = window.innerWidth
  }

  
  return (
    <>
      <Seo title={seo} />
      <div className="layout-container" id={id}>

        {
        width > 1000 && (
          <div
            className="layout-content-left"
            style={{ width: extended ? "30vw" : "20vw" }}
          ></div>
        )}

        {/* Right  */}
        <div className="layout-content-right">
          <div
            style={{
              flex: 1,
            }}
          >
            <main
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
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
