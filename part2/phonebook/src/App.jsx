import { useState } from "react";

const App = () => {

  const [person, setPersons] = useState([
    { name: "Max Santos" }
  ])

  const [newName, setNewName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>1. {person[0].name}</p>
    </div>
  )
}

export default App;