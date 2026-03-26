const PersonList = ({person, handleDelete}) => {    
    return <p key={person.id}>{person.name} {person.number} <button onClick={handleDelete}>delete</button></p>
}

export default PersonList;