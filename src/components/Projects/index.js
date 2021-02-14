import React from "react"
import css from "./project.module.css"
import Linkitem from "./Linkitem"
import doceo from "../../images/doc.png"
import wmca from "../../images/WMCA.png"
import shopList from "../../images/shopping.png"
import pokemon from "../../images/pokemon.png"
import snakes from "../../images/snakes.png"

const projects = [
  {
    title: "Doceo",
    imgSrc: doceo,
    gitLink: "https://github.com/PatrickYoung03/final-project-stretch-goals",
    description: `A website designed for students to search for and book private tuition. Built using NextJS, Serverless and DyanmoDB`,
    reverse: false,
  },
  {
    title: "WMCA Project",
    imgSrc: wmca,
    gitLink:
      "https://github.com/PatrickYoung03/front-end-week-8-project-team-posm",
    description: `An internal tool designed for WMCA users to keep track of and manage all contracts.`,
    reverse: false,
  },
  {
    title: "Pokedex",
    imgSrc: pokemon,
    gitLink: "https://github.com/PatrickYoung03/search-pokemon-app",
    description: `A web page that users can search for their favourite pokemon. Built using React on the front end and NodeJS/Express on the backend with a PostgreSQl database`,
    reverse: false,
  },
  {
    title: "Shopping List",
    imgSrc: shopList,
    gitLink: "https://github.com/PatrickYoung03/shopping-list",
    description: "A handy shoppping list app built using react",
    reverse: false,
  },
  {
    title: "Snakes 'n' Ladders",
    imgSrc: snakes,
    gitLink: "https://github.com/SchoolOfCode/game-creation-rpm",
    description:
      "A multiplayer snakes and ladders game. My first introduction to the use of web sockets",
    reverse: false,
  },
]

export default function Projects() {
  return (
    <div className={css.mainContainer}>
      {projects.map(item => {
        return (
          <Linkitem
            title={item.title}
            gitLink={item.gitLink}
            imgSrc={item.imgSrc}
            description={item.description}
            reverse={item.reverse}
          />
        )
      })}
    </div>
  )
}
