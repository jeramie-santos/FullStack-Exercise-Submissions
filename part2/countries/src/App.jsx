import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const results =  countries.filter(country => country.name.common.toLowerCase().includes((search).toLowerCase()))

  const handleChange = (e) => {
   setSelectedCountry(null);
   setSearch(e.target.value)
  } 

  useEffect(() => {
     axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const countryList = (data) => {
    return (
            <div key={data.cca2}>
              <p>
                {data.name.common}
                <button onClick={() => handleClick(data)}>Show</button>
              </p>
            </div>
           )
  }

  const handleClick = (data) => {
    setSelectedCountry(data);
  }
  
  const displayCountry = (data) => {  
    return (
      <div key={data.cca2}>
        <h1>{data.name.common}</h1>
        <p>Capital: {data.capital}</p>
        <p>Area: {data.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(data.languages).map(lang => { 
            return <li key={lang}>{lang}</li>
          })}
        </ul>
        <img src={data.flags.png} alt={data.capital} />
      </div>
    )
  }


  return (
    <div className="main-container">
      <div>
        find countries  
        <input value={search} onChange={handleChange}/>
      </div>
      <div>
        {selectedCountry ? displayCountry(selectedCountry) : null}
      </div>
      <div>
        {
          results.length === 250 ? <p>Search a country</p> : 
          results.length === 1 ? results.map(result => displayCountry(result)) : 
          results.length > 10 ?  <p>Too many matches, specify another filter</p> : 
          results.map(result => countryList(result))
        }
      </div>
    </div>
  )
}

export default App;