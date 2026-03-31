import { useState, useEffect } from "react"
import personService from './services/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from "./components/Notification"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState(null);

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
    
    if (!exists) {
      personService
        .create(newObj)
        .then (returnedPerson => {
          setPersons(prev => prev.concat(returnedPerson));
          setNewName(''); 
          setNewNumber('')
          setNotification({message: `Added ${newName}`, style: "good"})
          setTimeout(() => setNotification(null), 5000)
        })
    } else {
        updatePerson(exists)
    }
  }

  const updatePerson = (exists) => {
    const updatedPerson = {...exists, number: newNumber}
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with ${newNumber}?`)) {
        personService
          .update(exists.id, updatedPerson)
          .then(returnUpdated => {
          setPersons(prev => prev.map(person => person.id === returnUpdated.id ? returnUpdated : person))
          setNewName(''); 
          setNewNumber('')
          setNotification({message: `${newName}'s number changed to ${newNumber}`, style: "good"})
          setTimeout(() => setNotification(null), 5000) 
        })
        .catch(error => {
          setNotification({message: `Information of ${updatedPerson.name} has already been deleted`, style: "error"})
          setTimeout(() => setNotification(null), 5000)
        }
      )
      } 
  }

  const handleDelete = (id) => {
    const matchedPerson = persons.find(person => person.id === id)
    const confirm = window.confirm(`Delete ${matchedPerson.name} ?`)
    if (confirm) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(prev => prev.filter(person => person.id !== id))
        })
    }
  }

  const handleNewName = (e) => {
    setNewName(e.target.value);
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const filteredPerson = search === '' ? persons : persons.filter(person => person.name.toLowerCase().includes((search).toLowerCase()));

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
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
        filteredPerson={filteredPerson}
        persons={persons}
        handleDelete={handleDelete}/>
    </div>
  )
}

export default App;