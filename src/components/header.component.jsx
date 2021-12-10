import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Text from "./Text"
import "../styles/header.style.css"
import ContactInfo from "./contact.component"

const navTitles = ["home", "about", "projects", "services", "contact"]

const Header = ({ headerData, contactData }) => {
  return (
    <header>
      <div
        style={{
          margin: "20px 0 0 5vw",
        }}
      >
        <Link to="/">
          <StaticImage
            className="logo"
            src={"../images/headerLogo.png"}
            width={150}
            quality={50}
            formats={["auto", "webp", "avif"]}
            alt="Corey Cushnie Vector Logo"
          />
        </Link>
      </div>
      <div className="nav-container">
        {navTitles.map(val => {
          return (
            <Text margin="20px 0 0 0">
              <Link className="nav-links" to={headerData[val]}>
                {val.toUpperCase()}
              </Link>
            </Text>
          )
        })}
      </div>
      <ContactInfo data={contactData} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
