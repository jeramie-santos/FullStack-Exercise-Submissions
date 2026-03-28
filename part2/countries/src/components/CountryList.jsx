 const CountryList = ({data, handleClick}) => {
    console.log(data);
    
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