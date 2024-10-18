import React from 'react'
import { useState } from "react";
import republican from "../republican.png";
import democratic from "../democratic.png";
import american from "../american.png";
    
const Ballot = ({counter, setCounter, counter1, setCounter1, counter2, setCounter2}) => {
    return (
      <div>
        <div className="party-container">
          <div className="party">
            <h2>Democrats</h2>
            <div className="box blue">
              <img src={democratic} alt="Democrats" className="party-image" />
              <br />
              <button className="vote-button" onClick={() => setCounter(counter + 1)}>Vote</button>
              <p className="vote-count">Vote Count: {counter}</p>
            </div>
          </div>
  
          <div className="party">
            <h2>Republicans</h2>
            <div className="box red">
              <img src={republican} alt="Republicans" className="party-image" />
              <br />
              <button className="vote-button" onClick={() => setCounter1(counter1 + 1)}>Vote</button>
              <p className="vote-count">Vote Count: {counter1}</p>
            </div>
          </div>
  
          <div className="party">
            <h2>Independent</h2>
            <div className="box yellow">
              <img src={american} alt="Independents" className="party-image" />
              <br />
              <button className="vote-button" onClick={() => setCounter2(counter2 + 1)}>Vote</button>
              <p className="vote-count">Vote Count: {counter2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Ballot