const Header = (propsHeader) => {
  return (
    <>
      <h1>{propsHeader.course}</h1>
    </>
  ) 
}

const Content = (propsContent) => {
  return (
    <>
      <p>
        {propsContent.part1} {propsContent.exercises1}
      </p>
      <p>
        {propsContent.part2} {propsContent.exercises2}
      </p>
      <p>
        {propsContent.part3} {propsContent.exercises3}
      </p>
    </>
  )
}

const Total = (propsTotal) => {
  return (
    <>
      <p>Number of exercises {propsTotal.exercises1 + propsTotal.exercises2 + propsTotal.exercises3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack aplication development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
       />
      <Total exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3} />
    </div>
  )
}

export default App