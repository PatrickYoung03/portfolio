import React from "react"
import css from "./MainBanner.module.css"
import linkedin from "../../images/linkedin(2).png"
import twitter from "../../images/twitter.png"
import github from "../../images/github.png"

function MainBanner() {
  return (
    <>
      <div className={css.banner}>
        <div className={css.mainText}>Patrick Young</div>
        <div className={css.underline}></div>
        <h2 className={css.subtitle}>
          Full Stack Web and Mobile App Developer
        </h2>
        <div className={css.container}>
          <a href="https://www.linkedin.com/in/patrick-young-375960144/">
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a href="https://github.com/PatrickYoung03">
            <img src={github} alt="Github" />
          </a>
          <a href="https://twitter.com/patrickkyoung1">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </>
  )
}

export default MainBanner
