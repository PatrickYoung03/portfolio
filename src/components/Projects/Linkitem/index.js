import React from "react"
import css from "./Linkitem.module.css"

export default function ({ title, imgSrc, gitLink, description }) {
  return (
    <div className={css.projectDisplay}>
      <div className={css.textHolder}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{description}</p>
      </div>
      <img className={css.image} src={imgSrc}></img>
    </div>
  )
}
