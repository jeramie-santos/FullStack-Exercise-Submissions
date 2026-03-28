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

  export default Weather;