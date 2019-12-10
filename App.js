import React from 'react';
import Joke from './components/Joke';

function App() {
  return(
    <div >
      <Joke
        question="how did the chicken cross the road?"
        punchline="quack quack"
      />
      <Joke
        punchline="I used to think the brain was the most important organ. Then I thought, look what’s telling me that."
      />
      <Joke
        question="Why does the leopard find it difficult to hide and stalk?"
        punchline="Because he is spotted always."
        />
      <Joke
        punchline="The midget fortune teller who kills his customers is a small medium at large."
      />
      <Joke
        question="which weighs more, a ton of feathers or a ton of bricks?"
        punchline="They both weigh the same"
      />
    </div>
  );
}

export default App;