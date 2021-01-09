import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";


const Homepage = () => {
    const [weather, setWeather] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
            const data = await res.json()
            setWeather(data.weather[0].description)
        }
    fetchData()
    }, [])

    return (
        <div>
            <h1> Hello, welcome! The current weather is {weather} </h1>
            <Link to='todos'>Todos</Link>
        </div>
    )
}

export default Homepage