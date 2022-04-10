import React from "react"
import { Link } from "gatsby"

import About from "../pages/about"

const header = () => {
  return (
    <>
      <div className="main-header">
        <div className="header-title">
          <div className="h-t-1st">
            <div className="blog-title">
              <Link to="/">nowgnas's blog</Link>
            </div>
          </div>
          <div className="h-t-2st">
            <div className="header-navigation">
              <div>
                <Link to={<About />}>About</Link>
              </div>
            </div>
            <div className="header-navigation">
              <div>
                <Link to="/project">Project</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>header</div>
    </>
  )
}
export default header
