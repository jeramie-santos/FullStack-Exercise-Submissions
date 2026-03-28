import axios from 'axios'
import Country from './components/Country';
import CountryList from './components/CountryList';
import Weather from './components/Weather';
import SearchCountry from './components/SearchCountry';
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

 

  const handleClick = (data) => {
    setSelectedCountry(data)
  }
  

  return (
    <div className="main-container">
      <SearchCountry search={search} handleChange={handleChange} />
      {results.length > 1 && results.length < 9 ? results.map(result => <CountryList key={result.capital} data={result} handleClick={handleClick}/>) : ""}
      <div>
        {selectedCountry ? <Country data={selectedCountry} weather={weather}/> : null}
      </div>
      <div>
        {
          results.length === 250 ? <p>Search a country</p> : 
          results.length === 1 ? results.map(result => <Country key={result.capital} data={result} weather={weather}/>) : 
          results.length > 10 ?  <p>Too many matches, specify another filter</p> : ""
        }
      </div>
    </div>
  )
}

export default App;