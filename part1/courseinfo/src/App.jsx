const Header = (propsHeader) => {
  return (
    <>
      <h1>{propsHeader.course}</h1>
    </>
  ) 
}

const Part = (propsPart) => {  
  return (
    <p>
        {propsPart.part} {propsPart.exercises}
    </p>
  )
}

const Content = (propsContent) => {  
  return (
    <>
      <Part part={propsContent.parts[0].name} exercises={propsContent.parts[0].exercises}/>
      <Part part={propsContent.parts[1].name} exercises={propsContent.parts[1].exercises}/>
      <Part part={propsContent.parts[2].name} exercises={propsContent.parts[2].exercises}/>
    </>
  )
}

const Total = (propsTotal) => {
  return (
    <>
      <p>Number of exercises {propsTotal.parts[0].exercises + propsTotal.parts[1].exercises + propsTotal.parts[2].exercises}</p>
    </>
  )
}



const App = () => { 
  const course = 'Half Stack aplication development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App