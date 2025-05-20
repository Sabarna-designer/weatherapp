 
    const apiKey="7bbd4c271d4f89fdc87f73345d36167d";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox =document.querySelector(".search input");
    const searchBtn =document.querySelector(".search button");
    const weatherIcon =document.querySelector(".weather-icon");
   

    async function checkWeather(city) 
    {
        const response =await fetch(apiUrl + city + `&appid=${apiKey}`)
        var data =await response.json();
        
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main === "Clouds")
    {
        weatherIcon.src ="assets/clouds.png";
    }
    else  if (data.weather[0].main === "Clear")
    {
        weatherIcon.src ="assets/clear.png";
    } 
    else  if (data.weather[0].main === "Rain")
    {
        weatherIcon.src ="assets/rain.png";
    }
     else  if (data.weather[0].main === "Drizzle")
    {
        weatherIcon.src ="assets/drizzle.png";
    }
     else  if (data.weather[0].main === "Mist")
    {
        weatherIcon.src ="assets/mist.png";
    }
     else  if (data.weather[0].main == "Snow")
    {
        weatherIcon.src ="assets/snow.png";
    }

    }  
searchBox.addEventListener("keypress", function (e) 
   {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
    });    
   


