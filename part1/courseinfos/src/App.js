import Course from './components/Course';

const App = () => {
  const course =  {
    name: 'Half Stack application develoment',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ],
  };
  

  return <Course course={course} />
}

export default App;