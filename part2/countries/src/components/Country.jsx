import Weather from "./Weather";

const Country = ({data, weather}) => {   
    console.log(weather);
    
    return (
      <div>
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

export default Country;