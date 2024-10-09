import { useState } from "react"
import jokes from "./components/jokes"
const App = () => {
  const [counter, setCounter] = useState(jokes);
  const [newJoke, setNewJoke] = useState(0);
  const setRandomJoke = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    setNewJoke(randomNumber)
  }
  const increasingLikes = (index) => {
    const updatedJokes = counter.map((joke, i) => {
        if(i === index){
          return{...joke, likes: joke.likes + 1};
        }
      return joke;
    });
    setCounter(updatedJokes);
  }

  let mostLikes = counter.reduce((first, second) => (first.likes > second.likes ? first:second));

  return (
    <div>
      <h1>Javascript Jokes</h1>
      {jokes[newJoke].joke}
      <br /> <br />
      <button onClick={setRandomJoke}>Next Joke</button>
      <br /><br />
      <button onClick={() => increasingLikes(newJoke)}>Likes: {counter[newJoke].likes}</button>
      <br /> <br />
      <h1>Most Liked JS Jokes</h1>
      <p>{mostLikes.joke} <span style={{color:'red'}}> with {mostLikes.likes} likes. </span> </p>

    </div>
  )
}

export default App