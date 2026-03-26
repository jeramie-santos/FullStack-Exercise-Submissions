import PersonList from './PersonList';

const Persons = ({isSearching, searchResult, persons, handleDelete}) => {
    return (
      (isSearching ? searchResult : persons).map((person) => {
        return <PersonList key={person.id} person={person} handleDelete={() => handleDelete(person.id)}/>
      })
    )
}

export default Persons;