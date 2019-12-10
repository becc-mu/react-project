import React from 'react'

function Joke(props) {
  return(
    <div>
      <h2 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h2>
      <h2>Answer: {props.punchline}</h2>
      <hr/>
    </div>
  )
}

export default Joke