import React, { useState } from 'react'
import './App.css'

function App() {
  const input = React.createRef();
  const [activeButton, setActiveButton] = useState(0);
  const [lists, setLists] = useState([[], [], []]);

  const callFuncs = async() => {
    setLists([[], [], []]);
    const fib = fetch(`fib/${input.current.value}`)
      .then(res => res.json())
      .then(json => json.data);
    const prime = fetch(`primes/${input.current.value}`)
      .then(res => res.json())
      .then(json => json.data);
    const fact = fetch(`factorial/${input.current.value}`)
      .then(res => res.json())
      .then(json => json.data);

    setLists(await Promise.all([fib, prime, fact]));
    // console.log(await Promise.all([fib, prime, fact]));
  };

  return (
    <div className="App">
      <div className="bigWrap">
        <div className="textwrapper">
          <div className="textwrapper2">
            <input ref={input} type="text" className="textbox" />
            <div className="submit" onClick={callFuncs}>
              <svg
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z" />
                <path d="M12,23a1,1,0,0,1-.51-.14A1,1,0,0,1,11,22V10a1,1,0,0,1,.49-.86,1,1,0,0,1,1,0l11,6a1,1,0,0,1,0,1.76l-11,6A1,1,0,0,1,12,23Zm1-11.32v8.64L20.91,16Z" />
              </svg>
            </div>
          </div>
          <div className="tabwrapper">
            <button
              className={`tab${activeButton === 0 ? " active" : ""}`}
              onClick={() => {
                setActiveButton(0);
              }}
            >
              fibonacci
            </button>
            <button
              className={`tab${activeButton === 1 ? " active" : ""}`}
              onClick={() => {
                setActiveButton(1);
              }}
            >
              prime numbers
            </button>
            <button
              className={`tab${activeButton === 2 ? " active" : ""}`}
              onClick={() => {
                setActiveButton(2);
              }}
            >
              factorial
            </button>
          </div>
        </div>
      </div>

      <div className="numbers">
        {lists[activeButton].map((item, i) => (
          <span key={i} className="number">{item}</span>
        ))}
      </div>
    </div>
  );
}


export default App
