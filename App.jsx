import { useState } from "react";
import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";
import Ballot from "./components/ballot";
import ElectionResults from "./components/ElectionResults";
import NoElectionResults from "./components/NoElectionResults";
import "./App.css";







const App = () => {

  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const totalVotes = counter1 + counter + counter2;
  return (
    <div>
      <Ballot counter={counter} setCounter={setCounter} counter1={counter1} setCounter1={setCounter1} counter2={counter2} setCounter2={setCounter2} />
      {totalVotes > 0 && (
        <ElectionResults counter={counter} counter1={counter1} counter2={counter2} />
      )} <br />
      {totalVotes === 0 && (
        <NoElectionResults/>
      )}
    </div>  
    )
    

  

};

export default App;