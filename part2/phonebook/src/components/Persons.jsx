import PersonList from './PersonList';

const Persons = ({isSearching, searchResult, persons}) => {
    return (
      (isSearching ? searchResult : persons).map((person) => {
        return <PersonList key={person.id} person={person} />
      })
    )
}

export default Persons;