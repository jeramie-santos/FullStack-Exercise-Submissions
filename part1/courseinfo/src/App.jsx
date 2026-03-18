const Header = (propsHeader) => {
  return (
    <>
      <h1>{propsHeader.course.name}</h1>
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
      <Part part={propsContent.course.parts[0].name} exercises={propsContent.course.parts[0].exercises}/>
      <Part part={propsContent.course.parts[1].name} exercises={propsContent.course.parts[1].exercises}/>
      <Part part={propsContent.course.parts[2].name} exercises={propsContent.course.parts[2].exercises}/>
    </>
  )
}

const Total = (propsTotal) => {
  return (
    <>
      <p>Number of exercises {propsTotal.course.parts[0].exercises + propsTotal.course.parts[1].exercises + propsTotal.course.parts[2].exercises}</p>
    </>
  )
}



const App = () => { 
  const course = {
    name: 'Half Stack aplication development',
    parts: [{
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
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App