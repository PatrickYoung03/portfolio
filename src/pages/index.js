import React, { useState } from "react"
import "../styles/styles.css"
import Navbar from "../components/Navbar/Navbar"
import MainBanner from "../components/MainBanner/MainBanner"
import AboutText from "../components/AboutText/AboutText"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => (
  <>
    <Navbar />
    <MainBanner />
    <AboutText />
    <Projects />
  </>
)

export default IndexPage
