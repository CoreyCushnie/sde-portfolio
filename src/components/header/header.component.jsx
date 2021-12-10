import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Text from '../Text/Text';
import './header.style.css';
import ContactInfo from "../contact/contact.component";

const navTitles = ["home", "about", "projects", "services", "contact"]

const Header = ({ data }) => {
  
  const header_nav = data.site.siteMetadata?.pageData.navLinks

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
              src="../../images/headerLogo.png"
              width={150}
              quality={50}
              formats={["auto", "webp", "avif"]}
              alt="Corey Cushnie Vector Logo"
            />
          </Link>
        </div>
      <div
        className="nav-container"
      >
        {navTitles.map(val => {
          return (
            <Text margin="20px 0 0 0">
              <Link
                className="nav-links"
                to={header_nav[val]}
              >
                {val.toUpperCase()}
              </Link>
            </Text>
          )
        })}
      </div>
      <ContactInfo data={data}/>
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
