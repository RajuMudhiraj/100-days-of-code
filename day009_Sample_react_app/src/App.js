import "./styles.css";
import React, { useState } from 'react';


export default function App() {
  return (
    <div className="App">
      <Counter headline='My counter1' ParaText='Some text' />
      <Counter headline='My counter2' ParaText='Some paragraph' />
      <Counter headline='My counter3' ParaText='Some other text' />
    </div>
  );
}

const Counter = ({headline, ParaText}) => {
  const [count, setCount] = useState(0)
  const handleInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    setCount(count - 1)
  }

  return(
<>
<h2> {headline} : {count} </h2>
<p>{ParaText}</p>
<button onClick={handleInc}>Increment</button>
<button onClick={handleDec}>Decrement</button>
<br />
</>
  );
}
