/* searching for forecast function */
searchBtnEl.addEventListener("click", function() {
    let userSearchElValue = document.getElementById("citySearched").value;

    userCityInput.textContent = userSearchElValue + " " + moment().format("MM DD, YYYY")
})

/* api */
let weather = {
    apiKey: "eecfa631d8c006257ac098176a8bfc6",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=" +
            this.apiKey
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayWeather(data);
            forecast5Day.fetchWeather(data);
            let cityTempValue = data["list"]["0"]["main"]["temp"];
            let cityWindSpeedValue =  data["list"]["0"]["main"]["wind"];
            let cityHumidityValue =  data["list"]["0"]["main"]["humidity"];

                document.getElementById("top-img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["0"]["weather"][0]["icon"] + "@2x.png";
                cityTemp.textContent = "Temperature: " + cityTempValue + "°F";
                cityWindSpeed.textContent = "Wind Speed: " + cityWindSpeedValue + "mph";
                cityHumidity.textContent = "Humidity: " + cityHumidityValue + "%";

            document.getElementById("current1Date").textContent = data["list"]["0"]["dt_txt"];
            document.getElementById("1img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["0"]["weather"][0]["icon"] + "@2x.png";
            document.getElementById("day1Temp").textContent = "Temperature: " + data["list"]["0"]["main"]["temp"] + "°F";
            document.getElementById("day1WindSpeed").textContent = "Wind Speed: " + data["list"]["0"]["main"]["wind"] + "mph";
            document.getElementById("day1Humidity").textContent = "Humidity: " + data["list"]["0"]["main"]["humidity"] + "%";

            document.getElementById("current1Date").textContent = data["list"]["0"]["dt_txt"];
            document.getElementById("2img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["0"]["weather"][0]["icon"] + "@2x.png";
            document.getElementById("day2Temp").textContent = "Temperature: " + data["list"]["8"]["main"]["temp"] + "°F";
            document.getElementById("day2WindSpeed").textContent = "Wind Speed: " +  data["list"]["8"]["main"]["wind"] + "mph";
            document.getElementById("day2Humidity").textContent = "Humidity: " + data["list"]["8"]["main"]["humidity"] + "%";

            document.getElementById("current1Date").textContent = data["list"]["0"]["dt_txt"];
            document.getElementById("3img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["0"]["weather"][0]["icon"] + "@2x.png";
            document.getElementById("day3Temp").textContent = "Temperature: " + data["list"]["16"]["main"]["temp"] + "°F";
            document.getElementById("day3WindSpeed").textContent = "Wind Speed: " +  data["list"]["16"]["main"]["wind"] + "mph";
            document.getElementById("day3Humidity").textContent = "Humidity: " + data["list"]["16"]["main"]["humidity"] + "%";

            document.getElementById("current1Date").textContent = data["list"]["0"]["dt_txt"];
            document.getElementById("4img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["0"]["weather"][0]["icon"] + "@2x.png";
            document.getElementById("day4Temp").textContent = "Temperature: " + data["list"]["24"]["main"]["temp"] + "°F";
            document.getElementById("day4WindSpeed").textContent = "Wind Speed: " +  data["list"]["24"]["main"]["wind"] + "mph";
            document.getElementById("day4Humidity").textContent = "Humidity: " + data["list"]["24"]["main"]["humidity"] + "%";

            document.getElementById("current1Date").textContent = data["list"]["0"]["dt_txt"];
            document.getElementById("5img").src = 'https://api.openweathermap.org/img/wn/'+ data["list"]["32"]["weather"][0]["icon"] + "@2x.png";
            document.getElementById("day5Temp").textContent = "Temperature: " + data["list"]["32"]["main"]["temp"] + "°F";
            document.getElementById("day5WindSpeed").textContent = "Wind Speed: " +  data["list"]["32"]["main"]["wind"] + "mph";
            document.getElementById("day5Humidity").textContent = "Humidity: " + data["list"]["32"]["main"]["humidity"] + "%";
        });
    }
};

/* ids from html */
let cityTemp = document.getElementById("cityTemp");
let cityWindSpeed = document.getElementById("cityWindSpeed");
let cityHumidity = document.getElementById("cityHumidity");
let userSearchEl = document.getElementById("citySearched");
let userSearchElValue = document.getElementById("citySearched").value;
let searchBtnEl = document.getElementById("clickSearch");
let userCityInput = document.getElementById("cityName");
let listSearchHistory = document.getElementById("listSearchHist");

/* local storage */
searchBtnEl.addEventListener("click", function (event) {
    event.preventDefault()

    let storedHistArr = []

    let storedHist = document.createElement("button");
    $(storedHist).css("width", "150px");
    $(storedHist).css("margin-top", "20px");

    let test = document.getElementById("citySearched").value;
    localStorage.setItem("test", test);

    storedHistArr.pop(test);
    console.log(storedHistArr);

    let tester = localStorage.getItem("test");
    storedHist.textContent = tester;

    listSearchHistory.append(storedHist);
});

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* function to show the day */
function whatDay(day) {
    if(day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[whatDay(i)];
}