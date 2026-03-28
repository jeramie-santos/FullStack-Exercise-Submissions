const SearchCountry = ({search, handleChange}) => {
    return (
        <div className="search-country">
            Find countries  
            <input value={search} onChange={handleChange}/>
      </div>
    )
}

export default SearchCountry;