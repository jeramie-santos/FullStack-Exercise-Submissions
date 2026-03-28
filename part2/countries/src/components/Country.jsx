import Weather from "./Weather";

const Country = ({data, weather}) => {   
    return (
      <div className="main-country">
        <div className="country-right">
            <img src={data.flags.png} alt={data.capital} />
        </div>
        <div className="country-left">
            <div className="country-info">
                <h1>{data.name.common}</h1>
                <p>Capital: {data.capital}</p>
                <p>Area: {data.area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.values(data.languages).map(lang => { 
                        return <li key={lang}>{lang}</li>
                    })}
                </ul>
            </div>
            <div className="country-weather">
                <h2>Weather in {data.capital}</h2>
                {weather ? <Weather data={weather}/> : null}
            </div>
        </div>
      </div>
    )
}

export default Country;