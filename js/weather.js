const API_KEY = "f3b841ef855285cdfa2b959e89e50dac";

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도

  

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` //&units=metric는 섭씨온도로 변경해주는 것

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  })

  //https://api.openweathermap.org/data/2.5/weather?lat=37.460475&lon=126.7009954&appid=f3b841ef855285cdfa2b959e89e50dac

}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);