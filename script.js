const weatherform=document.querySelector(".weatherForm");
const cityinput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const api="18317ee1a696ff6ccdb562eace85c7cc";
weatherform.addEventListener("submit", async event=>{
event.preventDefault();
const city=cityinput.value;
if(city)
{
try{
const weatherData=await getweatherdata(city);
displayweatherinfo(weatherData);
}
catch(error)
{
 console.error(error);
 displayerror(error);
}
}
else{
    displayerror("Please enter your city"); 
}
});
async function getweatherdata(city) 
{
    const urlapi =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const response=await fetch(urlapi);
    console.log(response);
    if(!response.ok)
    {
        throw new error("can't fetch the data");
    }
    return await response.json()
}
function displayweatherinfo(data)
{
 const{
    name:city,
    main:{temp,humidity},
    weather:[{description,id}]}=data
    card.textContent="";
    card.style.display="flex";
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F;`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getweatheremojy(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
    }

    function getweatheremojy(weatherId)
    {
        switch(true){
            case (weatherId >= 200 && weatherId < 300):
                return "⛈";
            case (weatherId >= 300 && weatherId < 400):
                return "🌧";
            case (weatherId >= 500 && weatherId < 600):
                return "🌧";
            case (weatherId >= 600 && weatherId < 700):
                return "❄";
            case (weatherId >= 700 && weatherId < 800):
                return "🌫";
            case (weatherId === 800):
                return "☀";
            case (weatherId >= 801 && weatherId < 810):
                return "☁";
            default:
                return "❓";
        }
    }
function displayerror(message)
{
 const errordisplay=document.createElement("p");
 errordisplay.textContent=message;
 errordisplay.classList.add("errordisplay");
 card.textContent="";
 card.style.display="flex";
 card.appendChild(errordisplay);
}