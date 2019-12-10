import React from 'react'

function Joke(props) {
  return(
    <div>
      <h2>{props.q.question}</h2>
      <h2>{props.q.punchline}</h2>
    </div>
  )
}

export default Joke