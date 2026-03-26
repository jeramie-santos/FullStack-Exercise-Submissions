import { useState, useEffect } from "react"
import personService from './services/persons'
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
    personService
      .getAll()
      .then(initialReturn => {
        setPersons(initialReturn)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault();
    const newObj = {name: newName, number: newNumber, id: persons.length + 1};

    const exists = persons.find(person => person.name === newName);
    const updatedPerson = {...exists, number: newNumber}

    if (exists) 
    {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with ${newNumber}?`)) {
        personService
          .update(exists.id, updatedPerson)
          .then(returnUpdated => {
          setPersons(persons.map(person => person.id === returnUpdated.id ? returnUpdated : person))
        })
      } 
    } else {
      personService
        .create(newObj)
        .then (returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName(''); 
          setNewNumber('') 
        })
    }
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

  const handleDelete = (id) => {
    const name = persons.find(person => person.id == id)
    const confirm = window.confirm(`Delete ${name.name} ?`)
    if (confirm) {
      personService
        .deletePerson(id)
        .then(returnDeleted => {
          setPersons(persons.filter(person => person.id !== returnDeleted))
        })
    }
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
        persons={persons}
        handleDelete={handleDelete}/>
    </div>
  )
}

export default App;