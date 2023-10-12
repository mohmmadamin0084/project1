
const Display = document.querySelector('.Display')


fetch('https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=ea0596ed53d44ccbc17185709f8f0700')
   .then(res => res.json())
   .then(data => {
      console.log(data)
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
                                    <img src="./images/rain.png" alt="">
                                    <h3 class="Tempercher">
                                    ${data.main.temp}
                                    </h3>
                                 </div>`
      })