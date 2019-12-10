import React from 'react'
import { gray } from 'ansi-colors'

function Joke(props) {
  return(
    <div>
      <h2 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h2>
      <h2 style={{color: !props.answer && "#888888"}}>Answer: {props.punchline}</h2>
      <hr/>
    </div>
  )
}

export default Joke