import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({courses}) => { 
  return (
      <>
        {courses.map(course => {
          return (
            <div key={course.id}> 
              <Header headerName={course.name} />
                {course.parts.map((part) => {
                  return <Part key={part.id} part={part}/>
                })}
              <Total course={course}/>
            </div>
          )
        })}   
      </>
    )
}

export default Course;

