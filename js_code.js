const apiKey= "a91927ff838bfd6a5e6b923aa0057ac5";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const input= document.querySelector(".div_2 input");
const button= document.querySelector(".div_2 button");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data= await response.json();

    console.log(data);  

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

    document.querySelector(".weather").style.display="block";
}

button.addEventListener("click", ()=>{
    checkWeather(input.value);
})