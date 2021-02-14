import React from "react"
import css from "../AboutText/AboutText.module.css"

export default function AboutText() {
  return (
    <>
      <div className={css.page}>
        <div className={css.bio}>
          <h1 className={css.about}>About me</h1>
          <p className={css.text}>
            {text.intro}
            <br />
            <br />
            {text.more}
            <br />
            <br />
            {text.contact}
            <br />
          </p>
        </div>
      </div>
    </>
  )
}

const text = {
  intro: `Hey! I'm Patrick. I am a recent graduate from the School of Code, Birmingham. I am now
  looking for a Junior Developer position in the West Midlands which
  will allow me to continue learning and developing my exisiting skill
  set`,
  more: `Through the School of Code I have experience working with various
  languages and technologies. The course was centered around working
  in agile teams and for our final project our team of 4 worked
  remotely. Since leaving School of Code i have worked on several real word projects both on the front and back end.`,
  contact: `My current goal is to secure a position with a company that will allow me to continue to cultivate my passion for 
  programming and all things tech. I am also available for contract and freelance work. Feel free to get in contact. 
  For more info check out my CV below. Thanks 🚀`,
}
