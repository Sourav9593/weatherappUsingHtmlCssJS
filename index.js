const apiKey = `839e31b45fd2fbd62336a1daff862290`
// https://openweathermap.org/img/wn/${icon}@2x.png
// const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`
const weatherApp = document.getElementById("weatherApp")
const inp = document.getElementById("inp");
const search = document.getElementById("search");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const currDate = new Date().toLocaleDateString('en-GB');
const icon = document.getElementById("icon")
const date = document.getElementById("date");
const maxTemp = document.getElementById("maxTemp");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

date.innerHTML = currDate;
// const bgc = {
//     clearSky : "linear-gradient(135deg,rgb(237, 221, 2),rgb(252, 134, 61))",
//     clouds:"linear-gradient(135deg,rgb(100, 129, 245),rgb(171, 169, 169))",
//     rain:"linear-gradient(135deg,rgb(114, 208, 252),rgb(61, 245, 150))",
//     mist:"linear-gradient(135deg,rgb(203, 203, 203),rgb(46, 46, 46))"
// }
const getData = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await fetch(`${url}`).then(response=>response.json());
    cityName.innerHTML = `${response.name}`;
    icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
    temp.innerHTML = `${response.main.temp }`;
    maxTemp.innerHTML = `${response.main.temp_max}`;
    wind.innerHTML = `${response.wind.speed}`;
    humidity.innerHTML = `${response.main.humidity}`;

    // if(response.weather[0].icon==="01d"||"01n"){
    //     weatherApp.style.backgroundImage  = (bgc.clearSky);
    // }
    // else if(response.weather[0].icon==="02d"||"02n"||"03d"||"03n"){
    //     weatherApp.style.backgroundImage  = (bgc.clouds);
    // }
    // else if(response.weather[0].icon==="04d"||"04n"||"09d"||"09n"||"10d"||"10n"||"11d"||"11n"){
    //     weatherApp.style.backgroundImage  = (bgc.rain);
    // }
    // else if(response.weather[0].icon==="13d"||"11n"||"50d"||"50n"){
    //     weatherApp.style.backgroundImage  = (bgc.mist);
    // }
}

search.addEventListener("click",(event)=>{
    getData(inp.value);
    event.preventDefault();
    inp.value = '';
})


