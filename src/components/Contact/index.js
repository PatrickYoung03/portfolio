import React, { useState } from "react"
import css from "./Contact.module.css"

function Contact() {
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubjectChange = e => {
    setSubject(e.target.value)
    console.log(subject)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handleTextChange = e => {
    setText(e.target.value)
    console.log(text)
  }

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   formSubmission({ subject, email, text });
  // };

  async function postNewEmail(event) {
    event.preventDefault()

    const res = await fetch("http://localhost:5000/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        subject,
        text,
      }),
    })
    const payload = await res.json()
  }
  return (
    <div className={css.mainContainer}>
      <form className={css.form}>
        <h3 className={css.title}>Get in contact:</h3>
        <div className={css.inputFields}>
          <input
            type="text"
            value={subject}
            placeholder="Name"
            name="subject"
            onChange={handleSubjectChange}
          ></input>
          <input
            type="text"
            value={email}
            placeholder="Email"
            name="email"
            onChange={handleEmailChange}
          ></input>
        </div>
        <textarea
          className={css.text}
          type="text"
          value={text}
          placeholder="Please leave me a message and I will get back to you. Thanks"
          name="text"
          onChange={handleTextChange}
        ></textarea>
        <div className={css.submit}>
          <button onClick={postNewEmail}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
