
const Display = document.querySelector('.Display')
let btn = document.querySelector('button')

fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=ea0596ed53d44ccbc17185709f8f0700')
   .then(res => res.json())
   .then(data => {
      const Temp = data.main.temp.toFixed(0)

      btn.addEventListener('click', function () {
         Display.innerHTML += `
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
         </div>`}



      )


   })

btn.addEventListener('click' , function () {
   var x = document.getElementById("GetCityName");
   var text = "";
   var i;
   for (i = 0; i < x.length; i++) {
      text += x.elements[i].value;
   }
   console.log(text)
})
