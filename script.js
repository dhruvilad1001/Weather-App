let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp=document.getElementById("temp")
let city=document.getElementById("city")
let humidity=document.getElementById("dh")
let wind=document.getElementById("dw")
let search=document.querySelector(".search input")
let btn=document.getElementById("btn")
let image=document.querySelector(".weatherStatus img")
let card=document.querySelector(".card")
let weatherStatus=document.querySelector(".weatherStatus")
let invalid=document.getElementById("invalid")

async function checkWeather(ciity)
{
     let response=await fetch(apiUrl + ciity + `&appid=${WEATHER_API_KEY}`);
     let data=await response.json();
     //console.log(data);

      if(data.cod=="404")
        {
          invalid.style="display:block"
          card.style.height ="100px";
        }
     else
     {
        temp.innerHTML= Math.round(data.main.temp) + "°C";     
        city.innerHTML= data.name;
        humidity.innerHTML= data.main.humidity + "%";
        wind.innerHTML= data.wind.speed + "Km/h";
        invalid.style="display:none"

     if(data.weather[0].main=="Clouds")
        {
          image.src="cloud.svg"
        }
     else if(data.weather[0].main=="Rain")
        {
          image.src="rain.svg"
        }
      else if(data.weather[0].main=="Clear")
        {
         image.src="day.svg"
        }
     else if(data.weather[0].main=="Snow")
        {
         image.src="snow.svg"
        }

        card.style="height:500px; transition:height 0.5s";
        weatherStatus.style="display:block"
    }
}
 
btn.addEventListener("click",()=>{checkWeather(search.value)})


