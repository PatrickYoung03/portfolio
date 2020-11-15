import React from "react"
import css from "./Linkitem.module.css"

export default function ({ title, imgSrc, gitLink, description }) {
  return (
    <>
      <img className={css.image} src={imgSrc}></img>
      <div className={css.textHolder}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.text}>{description}</p>
      </div>
    </>
  )
}
