const Total = ({course}) => {
  const parts = course.parts;

  const totalExercise = parts.reduce((sum, num) => sum + num.exercises ,0)

  return (
    <>
      <b>total of {totalExercise} exercises</b>
    </>
  )
}

export default Total;