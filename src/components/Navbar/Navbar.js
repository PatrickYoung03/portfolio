import React from "react"
import { Link } from "gatsby"
import css from "./Navbar.module.css"

function Navbar() {
  return (
    <>
      <div className={css.container}>
        <div className={css.innerNavbar}>
          <div>
            <nav className={css.navigation}>
              <Link to="/about">About</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
