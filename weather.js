const apiKey="d2591ed5cc93cdcc929f02fbf79ade5f";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector(".search input");
     const searchbtn=document.querySelector(".search button");
     let weatherIcon=document.querySelector(".weather-icon");


    async function checkweather(city){
      const response = await fetch(apiurl + city + `&appid=${apiKey}`);
      var data =await response.json();

      if(data.cod == "404"){
          alert("City not found");
          return;
}
      console.log(data);
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML=data.main.humidity +"%" ;
      document.querySelector(".Wind").innerHTML=data.wind.speed+ " km/h";

      const weatherCondition=data.weather[0].main;

 if(weatherCondition === "Clouds"){
  weatherIcon.src = "images/clouds.png";
}
else if(weatherCondition === "Clear"){
  weatherIcon.src = "images/clear.png";
}
else if(weatherCondition === "Rain"){
  weatherIcon.src = "images/rain.png";
}
else if(weatherCondition === "Drizzle"){
  weatherIcon.src = "images/drizzle.png";
}
else if(weatherCondition === "Mist"){
  weatherIcon.src = "images/mist.png";
}
else if(weatherCondition === "Snow"){
  weatherIcon.src = "images/snow.png";
}

document.querySelector(".weather").style.display="block";
    }

    searchbtn.addEventListener("click",()=>{
      checkweather(searchbox.value);
    } )