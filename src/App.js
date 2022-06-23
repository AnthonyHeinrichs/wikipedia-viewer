import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [lat, setLat] = useState()
  const [lon, setLong] = useState()
  const [weatherData, setWeatherData] = useState()


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
      .then((response) => {
        console.log(response.data)
        setWeatherData(response.data)
      })
    }
    fetchData()
  }, [lat,lon])

  return (
    <>
      <h1>{weatherData ? weatherData.name : ''}</h1>
      <h2>{weatherData ? weatherData.weather[0].main : ''}</h2>
    </>
  )
}

export default App;
