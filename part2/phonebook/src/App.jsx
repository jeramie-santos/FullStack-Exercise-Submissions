import { useState, useEffect } from "react";
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
    })
  }, [])

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
      const result = persons.filter(perons => perons.name.toLowerCase().includes((e.target.value).toLowerCase()))
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