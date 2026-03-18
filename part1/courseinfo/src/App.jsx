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
      <Part part={propsContent.part1.name} exercises={propsContent.part1.exercises}/>
      <Part part={propsContent.part2.name} exercises={propsContent.part2.exercises}/>
      <Part part={propsContent.part3.name} exercises={propsContent.part3.exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Content part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises} />
    </div>
  )
}

export default App