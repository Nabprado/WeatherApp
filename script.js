// weather app
let weather = {
    "apiKey": "f3ffcbabde894d572b4f7230bca416f6",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&lang=fr&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = 'Météo de '+ name;
        document.querySelector('.description').innerText = 'Temps: ' + description;
        document.querySelector('.temp').innerText = temp.toFixed() + '°C';
        document.querySelector('.humidity').innerText = 'Humidité : ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Vent: ' + speed + ' km/h';
        
        // temp colors
        if(temp > "19"){
            document.querySelector('.temp').style.color = "brown";
        }
        else if(temp < "20") {
            document.querySelector('.temp').style.color = "blue";
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search_bar').value)
    }
};

// search
let search_btn = document.querySelector('.search button');

search_btn.addEventListener('click', (e) => {
    weather.search();
    document.querySelector('.search_bar').value = '';
});
document.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        weather.search();
        document.querySelector('.search_bar').value = '';
    }
});