const Display = document.querySelector('.Display')
let btn = document.querySelector('button')

btn.addEventListener("click", function () {
   var City = document.querySelector("#GetCityName > input");
   var i;
   var text = City.value
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=ea0596ed53d44ccbc17185709f8f0700`)
      .then(res => res.json())
      .then(data => {
         const Temp = data.main.temp.toFixed(0)
         Display.innerHTML = `
      <div class="City">
         <h1 class="City">
              ${data.name}
         </h>
      </div>
      <div class="WeatherStatus">
         <img src="./images/${data.weather[0].main + "." + "png"}" alt="">
         <h3 class="Tempercher">
         ${Temp - 273 + "°C"} 
         </h3>
      </div>`})
})
