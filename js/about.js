const APIKEY = '793b2c1b900ba26817afbd67f71ac2b3'

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Comé&units=metric&lang=fr&appid=3b9a3b0ee01f4c3087c912a4b11ffa60' 


    fetch(url).then((response) => 
        response.json().then((data) => {
            document.querySelector('#temp').innerHTML = '<i class="fas fa-thermometer-half"></i>' + `<p>${data.main.temp}°</p>` 
            document.querySelector('#humidity').innerHTML = '<i class="fas fa-tint"></i>'+ `<p>${data.main.humidity}%</p>`
            document.querySelector('#wind').innerHTML = '<i class="fas fa-wind"></i>' + `<p>${Math.round(data.wind.speed * 3.6 *100)/100}Km/h</p>`
            document.querySelector('#actual_weather').innerHTML =  `<p>${data.weather[0].description}</p>` + `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"</>`
        })
    ).catch(err =>(console.log('erreur' ) + err))