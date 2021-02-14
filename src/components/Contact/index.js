import React from "react"
import css from "./Contact.module.css"

function Contact() {
  return (
    <div className={css.mainContainer}>
      <h3 className={css.title}>I would love to hear from you</h3>
      <div className={css.display}>
        <div className={css.cv_side}>
          <p>
            If you want to know more about my work history you can grab a copy
            of my CV here:
          </p>
          <a href="../../images/PatrickYoungCV.pdf" download>
            Patrick's CV
          </a>
        </div>

        <div className={css.form_side}>
          <form className={css.form}>
            <input
              className={css.input_field}
              placeholder="What's your name?"
            ></input>
            <input
              className={css.input_field}
              placeholder="Where can i get back to you?"
            ></input>

            <textarea
              className={css.text}
              type="text"
              placeholder="What's on your mind?"
              name="text"
            ></textarea>
            <button className={css.submit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
