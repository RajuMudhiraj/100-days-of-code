import "./styles.css";
import React, { useState } from 'react';


export default function App() {
  const arr = ['para1', 'para2', 'para3']
  return (
    <div className="App">
      {arr.map((item) => (
        <Text data={item} />
      ))}
    </div>
  );
}

const Text = ({data}) => {
  const [isRed, setRed] = useState(false)
  const handleToggle = () => {
    setRed(!isRed)
  }


  return(
<div className={isRed? 'red':''}>
<h2> {data} </h2>
<button onClick={handleToggle}>Toggle</button>
<hr />
</div>
  );
}
