import React from 'react';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button> 

const Header = () => <div><h3>Anecdote of the day</h3></div>

const Statistics = ({ anecdotes, points }) => {
  const mostVotedAnecdote = () => {
    if (points.reduce((sum, n) => sum+n, 0) === 0) return <p>No vote registred.</p>

    return anecdotes[points.indexOf(Math.max(...points))];
  };

  return <div>
    <h3>Anecdote with most votes</h3>
    <p>{mostVotedAnecdote()}</p>
  </div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const [selected, setSelected] = React.useState(0);
  const [points, setPoints] = React.useState((new Array(anecdotes.length)).fill(0))

 

  const getRandomAnecdote = () => {
    const min = 0;
    const max = anecdotes.length-1;
    const index = Math.floor(Math.random() * (max-min+1))+min;
    setSelected(index);
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] +=1;
    setPoints([...copy]);
  }

  return (
    <>  
      <Header />
        
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} vote(s)</p>
        <Button text="vote" handleClick={vote} />
        <Button text="next anecdote" handleClick={getRandomAnecdote} />
      </div>
        
      <Statistics anecdotes={anecdotes} points={points} />
    </>
  )
}

export default App;