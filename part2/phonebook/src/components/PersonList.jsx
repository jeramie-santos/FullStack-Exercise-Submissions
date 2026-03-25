const PersonList = ({person}) => {
    return <p key={person.id}>{person.name} {person.number}</p>
}

export default PersonList;