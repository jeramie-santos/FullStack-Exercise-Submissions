import { useState } from 'react';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;  
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total; 
  const positiveFeedback = (good / total) * 100; 

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <h2>Statistics</h2>
      
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      positiveFeedback={positiveFeedback}
      />
    </div>
  )
}

const Statistics = (props) => {
  if (props.total !== 0) {
    return (
      <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>All {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positiveFeedback}%</p>
      </>
    )
  } else {
    return <p>No feedback given</p>
  }
}

export default App;