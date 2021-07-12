// --search btn evevt istener --//
const btn = document.getElementById("search-btn");
btn.addEventListener("click", function () {
  const inputValue = document.getElementById("input-location").value;
  displayWeather(inputValue);
});

// --data load according to the input value --//
const displayWeather = (inputValue) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=52a1b1991eef6e3a6e3a0d87c95b1a0b`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showWeather(data))
    .catch((err) => console.log(err));
};
// displayWeather();

const showWeather = (data) => {
    console.log(data);
  // --city --//
  const city = data.name;
  document.getElementById("city").innerText = city;
  // --temperature --//
  const { temp } = data.main;
  document.getElementById("temperature").innerText = temp;
  // --weather --//
  const weather = data.weather[0];
  const {description } = weather;
  document.getElementById("weather").innerText = description;
};
