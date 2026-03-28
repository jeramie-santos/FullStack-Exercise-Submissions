 const CountryList = ({data, handleClick}) => {    
    return (
      <div>
        <p>
          {data.name.common}
          <button onClick={() => handleClick(data)}>Show</button>
        </p>
      </div>
    )
}

export default CountryList;