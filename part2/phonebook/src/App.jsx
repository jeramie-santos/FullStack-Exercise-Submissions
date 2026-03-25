import { useState } from "react";
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Max Santos', number: '63-123456', id: 1 },
    { name: 'Arto Hellas', number: '040-123456', id: 2 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 3 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 4 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 5 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const addPerson = (e) => {
    e.preventDefault();
    const newObj = {name: newName, number: newNumber, id: persons.length + 1};

    const exists = persons.find(person => person.name === newName);

    exists 
    ? 
      alert(`${newName} is already added to phonebook`)  
    :
    setPersons(persons.concat(newObj));
    setNewName(''); 
    setNewNumber('');
  }

  const handleNewName = (e) => {
    setNewName(e.target.value);
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearch = (e) => {
    if (e.target.value != '') {
      setIsSearching(true)
      const result = persons.filter(perons => perons.name.toLowerCase().includes(e.target.value))
      setSearchResult(result);
    } else {
      setIsSearching(false);
    }
    setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        search={search}
        handleSearch={handleSearch}
      />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons 
        isSearching={isSearching}
        searchResult={searchResult}
        persons={persons}/>
    </div>
  )
}

export default App;