const form = document.querySelector("form")
const search = document.querySelector("#search"); 
const weather = document.querySelector(".weather_temprature")
const wether_div = document.querySelector(".weather")


async function weatherData(city){
    const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// console.log(data); 
wether_div.innerHTML = `<img src="https://c.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif"  />`
// wether_div.style.width="500px";
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
// console.log(response);
const data = await response.json();
console.log(data)
return showWether(data);
}
const showWether=(data)=>{
    if(data.cod == "404"){
        wether_div.innerHTML = `<h2>City Not Found</h2>`;
    }
    wether_div.innerHTML =`
    <div class="weather">
          <img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt=""
            srcset=""
          />
          <div class="weather_temprature"><h2>${data.main.temp}℃</h2>
          <h4> ${data.weather[0].main} </h4>
          </div>
          
        </div>
    `
}

form.addEventListener(
    "submit", function(event){
        weatherData(search.value);
        event.preventDefault();
    }
)