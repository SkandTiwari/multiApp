import React, {useState} from 'react'
import './Weather.css'
import WeatherDisplay from './WeatherDisplay'

function Weather() {

    const APIKEY = "4f24a2d606e606f68b6c1cf9d5315ebf"

    const[form, setForm] = useState({
        city: "",
        country: ""
    })

    const[weather, setWeather] = useState([]);

    async function weatherData(e){
        if(form.city === ""){
            alert("please enter city!");
        }
        else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            )
            .then((res) => res.json())
            .then((data) => data);

            setWeather({data : data});
        }
    }

    const handlerChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }
        if(name === "country"){
            setForm({...form, country:value})
        }
    }
    console.log(form.city, form.country)
    return (
        <div>

            <div className = "weatherCard">
                
                <form className = "box">
                    <input type = "text" className = "searchBox" name = "city"  placeholder = "Enter city" onChange = {(e) => handlerChange(e)}></input>

                    <input type = "text" className = "searchBox" 
                    
                    name = "country" placeholder = "Enter country" onChange = {(e) => handlerChange(e)}></input>

                    <div className = "submit" onClick = {(e) => weatherData(e)}>Search</div>
                    
                </form>
                {
                    weather.data != undefined?(

                    <div>
                       <WeatherDisplay data = {weather.data}/>
                    </div>
                    ):null
                }
            </div>
        </div>
    );
}

export default Weather
