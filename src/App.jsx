import React, { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);

  const calculateInterest = (e) => {
    e.preventDefault();

    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
      alert("Please enter valid numbers for Principal, Rate, and Time.");
      return;
    }

    const si = (p * r * t) / 100;
    setInterest(si.toFixed(2));
  };

  const resetForm = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setInterest(null);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Simple Interest Calculator</h2>

        <form onSubmit={calculateInterest}>
          <div className="input-group">
            <label>Principal Amount (Rs.)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter principal amount"
            />
          </div>

          <div className="input-group">
            <label>Rate of Interest (% per year)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter rate of interest"
            />
          </div>

          <div className="input-group">
            <label>Time Period (Years)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter time period"
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn">CALCULATE</button>
            <button type="button" className="btn reset" onClick={resetForm}>RESET</button>
          </div>
        </form>

        {interest !== null && (
          <div className="result">
            <h3>Simple Interest: Rs. {interest}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
