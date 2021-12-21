import { useStaticQuery, graphql } from "gatsby"

export default function GET_DATA() {
  const data = useStaticQuery(graphql`
    query ALL_DATA {
      site {
        siteMetadata {
          pageData {
            navLinks {
              home
              about
              projects
              services
              contact
            }
            aboutMeData {
              p1
              p2
              p3
            }
            personalInfo {
              Name
              Email
              Phone
              Social_Links {
                dribbble
                github
                linkedin
              }
            }
            skillsData {
              Front_End
              Back_End
              Web
              Mobile
              Javascript
              Python
              Gatsby
              ExpressJS
            }
            servicesData {
              website_creation
              web_migration
              mobile_application
              _3d_mockup_design
              landing_page_creation
              software_consultation
            }
          }
        }
      }
    }
  `)
  return data
}
