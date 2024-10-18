import { useState } from "react";
import republican from "../republican.png";
import democratic from "../democratic.png";
import american from "../american.png";

const ElectionResults = ({counter, counter1, counter2}) => {
    return (
      <div>
        <div className="vote-Statistics">
          <h3>Election Results</h3>
          <p>Total Votes: {counter + counter1 + counter2}</p>
          <p>Democrats: {counter} ({((counter/(counter + counter1 + counter2))*100).toFixed(2)}%)</p>
          <p>Republicans: {counter1} ({((counter1/(counter + counter1 + counter2))*100).toFixed(2)}%)</p>
          <p>Independents: {counter2} ({((counter2/(counter + counter1 + counter2))*100).toFixed(2)}%)</p>
  
        </div>
      </div>
    )
  }

export default ElectionResults