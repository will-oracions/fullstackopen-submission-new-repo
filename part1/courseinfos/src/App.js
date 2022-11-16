import React from 'react';

const Header = () => <div><h1>Given feedback</h1></div>;
const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button> 

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr> 

const Statistics = ({ good, neutral, bad }) => {
  const total = good+neutral+bad;

  const displayStatistics = () => {
    if (total === 0) return <p>No feedback given.</p>
  
    return <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={`${(good-bad)/total}`} />
          <StatisticLine text="Positive" value={`${(good/total)*100}%`} />
        </tbody>
      </table>
    </div>
  }

  return <div>
      <h3>Statistics</h3>
      {displayStatistics()}
    </div>

}

const App = () => {
  const [good, setGood] = React.useState(0);  
  const [neutral, setNeutral] = React.useState(0);  
  const [bad, setBad] = React.useState(0);

  return (
    <>
      <Header />

      <Button text="Good" handleClick={() => setGood(good+1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral+1)} />
      <Button text="Bad" handleClick={() => setBad(bad+1)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}
export default App;