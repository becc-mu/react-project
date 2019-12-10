import React from 'react';
import Joke from './components/Joke';

function App() {
  return(
    <div >
      <Joke
        q={{question: "how did the chicken cross the road?", punchline: "quack quack"}}
      />
      <Joke
        q={{question: "", punchline: "I used to think the brain was the most important organ. Then I thought, look what’s telling me that."}}
      />
      <Joke
        q={{question: "Why does the leopard find it difficult to hide and stalk?", punchline: "Because he is spotted always."}}
      />
      <Joke
      q={{question: "", punchline: "The midget fortune teller who kills his customers is a small medium at large."}}
      />
      <Joke
        q={{question: "which weighs more, a ton of feathers or a ton of bricks?", punchline: "They both weigh the same"}}
      />
    </div>
  );
}

export default App;