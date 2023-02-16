import React, { useState } from "react"
import './App.css';

function App() {
  const [money, setMoney] = useState(0)
  const [level, setLevel] = useState(1)
  const [price, setPrice] = useState(10)

  const upgrade = () => {
    if (money >= price) {
      setMoney(p => p - price)
      setLevel(p => p * 2)
      setPrice(p => p * 2)
    }
  }

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="info">
        <div className="counter">
          <span>{money}</span>&nbsp;<span>$</span>
        </div>
      </div>
      <div className="buttons">
        <button className="upgrade" onClick={() => upgrade()}><span>upgrade</span>&nbsp;<span>{price} $</span></button>
        <button className="work" onClick={() => setMoney(p => p + level)}>click</button>
      </div>
    </div>
  );
}

export default App;
