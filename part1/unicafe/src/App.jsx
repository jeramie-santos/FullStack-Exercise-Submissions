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
      <Button onClick={addGood} value="good"/>
      <Button onClick={addNeutral} value="neutral"/>
      <Button onClick={addBad} value="bad"/>
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
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="total" value={props.total}/>
            <StatisticLine text="average" value={props.average.toFixed(1)}/>
            <StatisticLine text="positive" value={props.positiveFeedback.toFixed(1)}/>
          </tbody>
        </table>
      </>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const StatisticLine = (props) => {
  return (
   <tr>
    <td>{props.text}</td>
    <td>{props.text == "positive" ? props.value + " %" : props.value}</td>
   </tr> 
  )
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
}

export default App;