import {useState} from 'react';

function Counter({initialCount2 = 0}) {
  const [counter2, setCounter2] = useState(initialCount2);
  return (
    <div
      className="counter"
      style={{display: 'flex', flexDirection: 'row', height: '2rem'}}
    >
      <button
        className="counter-btn"
        onClick={() => {
          counter2 > 0 ? setCounter2(counter2 - 1) : 0;
        }}
      >
        -
      </button>
      <div className="counter-number" style={{margin: '0 1rem'}}>
        {counter2}
      </div>
      <button className="counter-btn" onClick={() => setCounter2(counter2 + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
