
const Display = document.querySelector('.Display')

fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=ea0596ed53d44ccbc17185709f8f0700')
   .then(res => res.json())
   .then(data => {
      const Temp = data.main.temp.toFixed(0)

      Display.innerHTML += `  <div class="Search">
                                    <input type="search" placeholder="Which City!?">
                                 </div>
                                 <div class="Submit">
                                    <button>submit</button>
                                 </div>
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
                                 </div>`


   })
               let btn = document.querySelector('button')
            
            
            
            
               btn.addEventListener('click', function () {
                  console.log("hello")
               })