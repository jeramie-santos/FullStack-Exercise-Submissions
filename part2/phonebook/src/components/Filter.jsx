const Filter = ({search, handleSearch}) => {
    return (
    <div>
    filter name shown with <input 
                    value={search}
                    onChange={handleSearch}/>
    </div>
    )
}

export default Filter;