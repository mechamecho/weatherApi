var lat=0.0;
var lon=0.0;
var x = document.getElementById("demo");
var weatherMain="";
var temp="";
var unitDisplay="";
var weatherIcon="";

$(document).ready(function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getWeather);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
function getWeather(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude; 
    
    var url="https://api.openweathermap.org/data/2.5/weather?";
    var key="01b347e0bc70514efa39a98ff1f1b6ce";
    var units="metric";
    var unitDisplay="Celsius"
    
    var data={APPID:key,lat:lat, lon:lon, units:units};
    $.ajax({
        url:url,
        data:data,
        type:"GET",
        success:function(response){
            weatherMain=response.weather[0].main;
            temp=response.main.temp;
            weatherIcon=response.weather[0].icon;
            x.innerHTML="<p>"+weatherMain+" the temperature is "+temp+" in "+unitDisplay+"<img src='http://openweathermap.org/img/w/"+weatherIcon+".png'"+"></p>";
            console.log(response.weather[0].icon);
        }
        
    });
    
    function displayWeather(){
        x.innerHTML="<p>"+weatherMain+" the temperature is "+temp+" in "+unitDisplay+"<img src='http://openweathermap.org/img/w/"+weatherIcon+".png'"+"></p>";    
    }
    
    function toggleTemperature(){
        if (unitDisplay=="Celsius"){
            unitDisplay="Fahrentheit";
            temp=(temp*(1.8)+32).toFixed(2);
        }else{
            unitDisplay="Celsius";
            temp=((temp-32)/1.8).toFixed(2);
        }
        displayWeather();
    }

$("#toggleTemperature").click(toggleTemperature);
    
}