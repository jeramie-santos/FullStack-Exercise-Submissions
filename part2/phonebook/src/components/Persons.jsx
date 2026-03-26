import PersonList from './PersonList';

const Persons = ({filteredPerson, persons, handleDelete}) => {
    return (
      (filteredPerson ? filteredPerson : persons).map((person) => {
        return <PersonList key={person.id} person={person} handleDelete={() => handleDelete(person.id)}/>
      })
    )
}

export default Persons;