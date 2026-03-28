import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  const results =  countries.filter(country => country.name.common.toLowerCase().includes((search).toLowerCase()))

  const currentCountry =
  selectedCountry ? selectedCountry :
  results.length === 1 ? results[0] :
  null;

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

  useEffect(() => {
    if (!currentCountry) return; 

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${currentCountry.capital}&APPID=${API_KEY}`)
    .then(response => setWeather(response.data))
  }, [currentCountry])

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
    setSelectedCountry(data)
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
        <h2>Weather in {data.capital}</h2>
        {weather ? <Weather data={weather}/> : null}
      </div>
    )
  }

  const Weather = ({data}) => {

    const temperature = data.main.temp - 273.15
    const wind = data.wind.speed;
    
    return (
      <>
        <p>Temperature: {temperature.toFixed(2)}</p>
        <img src={`https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`} alt={data.weather[0].main}/>
        <p>Wind: {wind}m/s</p>
      </>
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