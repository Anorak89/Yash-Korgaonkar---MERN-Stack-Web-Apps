import { useState } from "react";
import republican from "../republican.png";
import democratic from "../democratic.png";
import american from "../american.png";

const NoElectionResults = () => {
    return (
      <div>
        <div className="vote-Statistics">
          <h3>Election Results</h3> 
          <p className="no-votes">Currently, the system has not received any votes yet.</p>
        </div>
      </div>
    )
  }
export default NoElectionResults